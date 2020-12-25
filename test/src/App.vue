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
