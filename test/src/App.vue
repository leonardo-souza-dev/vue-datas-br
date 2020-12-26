<template>
  <div id="app">
    <h1><pre>this.$converterData(dataYYYY_MM_DD)</pre></h1>
    <h3>{{ dataYYYY_MM_DD }}</h3>
    <p>{{ this.$converterData(dataYYYY_MM_DD) }}</p>
    <hr />

    <h1><pre>this.$converterData(dataYYYY_MM_DDTHH_MM_SS)</pre></h1>
    <h3>{{ dataYYYY_MM_DDTHH_MM_SS }}</h3>
    <p>{{ this.$converterData(dataYYYY_MM_DDTHH_MM_SS) }}</p>
    <hr />

    <h1><pre>this.$converterDeYYYY_MM_DDParaDataISOShort(dataYYYY_MM_DD)</pre></h1>
    <h3>{{ dataYYYY_MM_DD }}</h3>
    <p>{{ this.$converterDeYYYY_MM_DDParaDataISOShort(dataYYYY_MM_DD) }}</p>

    <h1><pre>this.$obterNumeroSemana(new Date())</pre></h1>
    <h3>{{ new Date() }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date()) }}</p>
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
