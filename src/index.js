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

    var week1 = new Date(date.getFullYear(), 0, 1)

    var dateGetTime = date.getTime()
    var week1GetTime = week1.getTime()
    var diff1 = dateGetTime - week1GetTime
    var div1 = diff1 / 86400000

    var diff2 = div1 + 1
    var week1GetDay = week1.getDay()

    var d6 = week1GetDay + 6
    var resto = d6 % 7

    var calc = ((diff2 + resto) / 7 ) | 0

    var numero = 1 + Math.round(calc)
    
    return numero
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
