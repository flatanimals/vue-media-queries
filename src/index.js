import throttle from 'lodash.throttle';

export { default as CommonBands } from './bands';

export class MediaQueries {
  constructor(options = {
    bands: {}
  }) {
    this.bands = Object.assign({}, options.bands);
    this.resize = 1;
    this.attachListener();
  }

  attachListener() {
    let throttleResize = throttle(() => {
      ++this.resize;
    }, 200);

    window.addEventListener('resize', throttleResize);
  }

  getArgs(args) {
    return args.length > 0 ? args.reverse() : args;
  }

  prepare(val) {
    return ('' + parseInt(val)).length === ('' + val).length ?
      `${val}px` :
      val;
  }

  expr(expressionString) {
    return matchMedia(expressionString).matches;
  }

  below(...args) {
    let [value, measurement = 'width'] = this.getArgs(args);
    return this.expr(`(max-${measurement}: ${this.prepare(value)})`);
  }

  above(...args) {
    let [value, measurement = 'width'] = this.getArgs(args);
    return this.expr(`(min-${measurement}: ${this.prepare(value)})`);
  }

  between(...args) {
    let [value, measurement = 'width'] = this.getArgs(args);
    let [minVal, maxVal] = value;

    return this.expr(`
    (min-${measurement}: ${this.prepare(minVal)}) and
    (max-${measurement}: ${this.prepare(maxVal)})
  `);
  }

  beyond(...args) {
    let [value, measurement = 'width'] = this.getArgs(args);
    let [minVal, maxVal] = value;

    return this.expr(`
    (min-${measurement}: ${this.prepare(maxVal)}),
    (max-${measurement}: ${this.prepare(minVal)})
  `);
  }

  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    Vue.mixin({
      created() {
        if (this.$options.mediaQueries) {
          this._mq = this.$options.mediaQueries;
          Vue.util.defineReactive(this._mq, 'resize', this.$mq.resize);
        }
      }
    });

    Object.defineProperty(Vue.prototype, '$mq', {
      get() {
        return this.$root._mq;
      }
    });

    Object.defineProperty(Vue.prototype, '$resize', {
      get() {
        return this.$root._mq.resize;
      }
    });
  }
}

export default MediaQueries;
