# vue-datas-br

> Pacote NPM para ajudar a formatar datas usando Vue.js

## npm

https://www.npmjs.com/package/vue-datas-br

## Exemplo 

2020-12-25

Fri Dec 25 2020 00:00:00 GMT-0300 (Brasilia Standard Time)

```
<template>
  <div id="app">
    <p>{{ dataYYYYMMDD }}</p>
    <p>{{ this.converter(dataYYYYMMDD) }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dataYYYYMMDD: '2020-12-25'
    }
  },
  methods: {
    converter(data){
      return this.$converterDataYYYYMMDD(data)
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
