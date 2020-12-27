<template>
  <div id="app">
    <h3><pre>this.$converterData(dataYYYY_MM_DD)</pre></h3>
    <h3>{{ dataYYYY_MM_DD }}</h3>
    <p>{{ this.$converterData(dataYYYY_MM_DD) }}</p>
    <hr />

    <h3><pre>this.$converterData(dataYYYY_MM_DDTHH_MM_SS)</pre></h3>
    <h3>{{ dataYYYY_MM_DDTHH_MM_SS }}</h3>
    <p>{{ this.$converterData(dataYYYY_MM_DDTHH_MM_SS) }}</p>
    <hr />

    <h3><pre>this.$converterDeYYYY_MM_DDParaDataISOShort(dataYYYY_MM_DD)</pre></h3>
    <h3>{{ dataYYYY_MM_DD }}</h3>
    <p>{{ this.$converterDeYYYY_MM_DDParaDataISOShort(dataYYYY_MM_DD) }}</p>
    <hr />

    <h3><pre>this.$obterNumeroSemana(new Date(2021, 0, 1))</pre></h3>
    <h3>{{ new Date(2021, 0, 1) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2021, 0, 1)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 11, 31))</pre></h3>
    <h3>{{ new Date(2020, 11, 31) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 11, 31)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 5, 13))</pre></h3>
    <h3>{{ new Date(2020, 5, 13) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 5, 13)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 5, 14))</pre></h3>
    <h3>{{ new Date(2020, 5, 14) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 5, 14)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 5, 15))</pre></h3>
    <h3>{{ new Date(2020, 5, 15) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 5, 15)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 5, 16))</pre></h3>
    <h3>{{ new Date(2020, 5, 16) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 5, 16)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 5, 17))</pre></h3>
    <h3>{{ new Date(2020, 5, 17) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 5, 17)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 5, 18))</pre></h3>
    <h3>{{ new Date(2020, 5, 18) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 5, 18)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 5, 19))</pre></h3>
    <h3>{{ new Date(2020, 5, 19) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 5, 19)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 5, 20))</pre></h3>
    <h3>{{ new Date(2020, 5, 20) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 5, 20)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 5, 21))</pre></h3>
    <h3>{{ new Date(2020, 5, 21) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 5, 21)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 5, 22))</pre></h3>
    <h3>{{ new Date(2020, 5, 22) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 5, 22)) }}</p>

    <h3><pre>this.$obterNumeroSemana(new Date(2020, 9, 12))</pre></h3>
    <h3>{{ new Date(2020, 9, 12) }}</h3>
    <p>{{ this.$obterNumeroSemana(new Date(2020, 9, 12)) }}</p>
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
