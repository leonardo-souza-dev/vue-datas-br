# vue-datas-br

> Pacote NPM para ajudar a formatar datas usando Vue.js

## npm

https://www.npmjs.com/package/vue-datas-br

## github

https://github.com/ltreze/vue-datas-br

## Exemplo 

2020-12-25

Fri Dec 25 2020 00:00:00 GMT-0300 (Brasilia Standard Time)

```
this.$converterDataYYYYMMDD(dataYYYYMMDD)
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
    <p>{{ dataYYYYMMDD }}</p>
    <p>{{ this.$converterDataYYYYMMDD(dataYYYYMMDD) }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dataYYYYMMDD: '2020-12-25'
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
