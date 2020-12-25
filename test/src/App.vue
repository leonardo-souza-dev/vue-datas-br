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
