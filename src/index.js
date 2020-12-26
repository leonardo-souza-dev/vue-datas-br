'use-strict'

var DatasBr = {
  converterData: function(data){
    if (data === undefined) {
      throw "data é undefined"
    }

    if (data.indexOf('T') > -1) {
      return DatasBr._converterDeYYYY_MM_DD(data)
    } else if (data.indexOf('-') > -1) {
      return DatasBr._converterDeYYYY_MM_DDTHH_MM_SS(data)
    }
  },
  converterDeYYYY_MM_DDParaDataISOShort: function(dataYYYY_MM_DD){
    if (dataYYYY_MM_DD === undefined) {
      throw "data é undefined"
    }

    let dataConvertida = DatasBr._converterDeYYYY_MM_DD(dataYYYY_MM_DD)
    const horasDiferenca = dataConvertida.getTimezoneOffset() / 60
    dataConvertida.setHours(dataConvertida.getHours() - horasDiferenca)
    return dataConvertida.toISOString().substring(0, 19)
  },
  obterNumeroSemana: function(data){
    //Source: https://weeknumber.net/how-to/javascript
    var date = new Date(data.getTime())
    date.setHours(0, 0, 0, 0)
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
    var week1 = new Date(date.getFullYear(), 0, 4)
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
  },
  _converterDeYYYY_MM_DD: function(data){
    return DatasBr._comum(data.split('T')[0].split('-'))
  },
  _converterDeYYYY_MM_DDTHH_MM_SS: function(data){
    return DatasBr._comum(data.split('-'))
  },
  _comum: function(data){
    const ano = data[0]
    const mesIndice = Number(data[1]) - 1
    const dia = data[2]

    return new Date(ano, mesIndice, dia)
  }
}

function plugin(Vue){
  Vue.DatasBr = DatasBr

  Object.defineProperties(Vue.prototype, {
    $converterData: {
      get: function get(){
        return DatasBr.converterData
      }
    },
    $converterDeYYYY_MM_DDParaDataISOShort: {
      get: function get(){
        return DatasBr.converterDeYYYY_MM_DDParaDataISOShort
      }
    },
    $obterNumeroSemana: {
      get: function get(){
        return DatasBr.obterNumeroSemana
      }
    }
  })
}

export default plugin
