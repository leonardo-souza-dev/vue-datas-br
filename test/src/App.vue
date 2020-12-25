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
