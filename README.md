# vue-media-queries

Vue.js v 2.1+ plugin for using mediaMatch based queries.

Thanks to [AStaroverov]( https://github.com/AStaroverov ) for creating [v-media-query](https://github.com/AStaroverov/v-media-query) which was the inspiration for this package.


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

Currently [Bootstrap 4](http://getbootstrap.com), [Bulma](http://bulma.io) and [Materialize](http://materializecss.com/) are the only supported frameworks, but PRs are welcome.

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