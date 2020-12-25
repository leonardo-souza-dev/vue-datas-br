# vue-datas-br

> Pacote NPM para ajudar a formatar datas usando Vue.js

## npm

https://www.npmjs.com/package/vue-datas-br

## github

https://github.com/ltreze/vue-datas-br

## Exemplo 

2020-12-25
Fri Dec 25 2020 00:00:00 GMT-0300 (Brasilia Standard Time)

2020-12-25T00:00:00
Fri Dec 25 2020 00:00:00 GMT-0300 (Brasilia Standard Time)

```
this.$converterData(data)
```

====

```
import Vue from 'vue'
import App from './App.vue'
import VueDatasBr from 'vue-datas-br'

Vue.use(VueDatasBr)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

```
<template>
  <div id="app">
    <h3>{{ dataYYYY_MM_DD }}</h3>
    <p>{{ this.$converterData(dataYYYY_MM_DD) }}</p>
    <hr />
    <h3>{{ dataYYYY_MM_DDTHH_MM_SS }}</h3>
    <p>{{ this.$converterData(dataYYYY_MM_DDTHH_MM_SS) }}</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      dataYYYY_MM_DD: '2020-12-25',
      dataYYYY_MM_DDTHH_MM_SS: '2020-12-25T00:00:00'
    }
  }
}
</script>

<style>
</style>
``` 


## Configuração do projeto de teste

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
