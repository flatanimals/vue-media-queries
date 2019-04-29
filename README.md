# vue-media-queries

Vue.js v 2.1+ plugin for using mediaMatch based queries.

Thanks to [AStaroverov]( https://github.com/AStaroverov ) for creating [v-media-query](https://github.com/AStaroverov/v-media-query) which was the inspiration for this package.

*Note: As of v0.0.5, Output is now minified*


## Basic Usage

##### Setup

```javascript
import Vue from 'vue';
import {MediaQueries} from 'vue-media-queries';
import App from './App';

const mediaQueries = new MediaQueries();

Vue.use(mediaQueries);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mediaQueries: mediaQueries
});
```

##### Vue Component

```vue
<template>
    <div>
        <div>
        <strong>Screen Size:</strong>
        </div>
        <div v-if="$resize && $mq.above(992)">Desktop</div>
        <div v-else>Tablet and Below</div>
    </div>
</template>
```

## Using common CSS Framework responsive bands

Currently, supported framework are:
- [Bootstrap 4](https://getbootstrap.com).
- [Bulma](https://bulma.io).
- [Materialize](https://materializecss.com/).
- [Tailwind](https://tailwindcss.com).
- [Spectre](https://picturepan2.github.io/spectre/).

PRs are welcome.

##### Bulma

```javascript
import Vue from 'vue';
import {MediaQueries, CommonBands} from 'vue-media-queries';
import App from './App';

const mediaQueries = new MediaQueries({
  bands: CommonBands.Bulma
});

Vue.use(mediaQueries);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mediaQueries: mediaQueries,
  mixins: [CommonBands.Bulma.mixin]
});
```
##### Bootstrap 4

```javascript
import Vue from 'vue';
import {MediaQueries, CommonBands} from 'vue-media-queries';
import App from './App';

const mediaQueries = new MediaQueries({
  bands: CommonBands.Bootstrap4
});

Vue.use(mediaQueries);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mediaQueries: mediaQueries,
  mixins: [CommonBands.Bootstrap4.mixin]
});
```
##### Materialize

```javascript
import Vue from 'vue';
import {MediaQueries, CommonBands} from 'vue-media-queries';
import App from './App';

const mediaQueries = new MediaQueries({
  bands: CommonBands.Materialize
});

Vue.use(mediaQueries);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mediaQueries: mediaQueries,
  mixins: [CommonBands.Materialize.mixin]
});
```
##### Tailwind

```javascript
import Vue from 'vue';
import {MediaQueries, CommonBands} from 'vue-media-queries';
import App from './App';

const mediaQueries = new MediaQueries({
  bands: CommonBands.Tailwind
});

Vue.use(mediaQueries);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mediaQueries: mediaQueries,
  mixins: [CommonBands.Tailwind.mixin]
});
```
##### Spectre

```javascript
import Vue from 'vue';
import {MediaQueries, CommonBands} from 'vue-media-queries';
import App from './App';
const mediaQueries = new MediaQueries({
  bands: CommonBands.Spectre
});
Vue.use(mediaQueries);
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mediaQueries: mediaQueries,
  mixins: [CommonBands.Spectre.mixin]
});
```