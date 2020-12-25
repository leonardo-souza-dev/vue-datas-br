'use-strict'

var DatasBr = {
  converterData: function(data){
    if (data === undefined) {
      throw "data é undefined"
    }

    if (data.indexOf('T') > -1) {    
      let dataSplitada = data.split('T')

      dataSplitada = dataSplitada[0].split('-')
      const ano = dataSplitada[0]
      const mesIndice = Number(dataSplitada[1]) - 1
      const dia = dataSplitada[2]

      return new Date(ano, mesIndice, dia)
    } else if (data.indexOf('-') > -1) {

      const dataSplitada = data.split('-')
      const ano = dataSplitada[0]
      const mesIndice = Number(dataSplitada[1]) - 1
      const dia = dataSplitada[2]

      return new Date(ano, mesIndice, dia)
    }
  }
}

function plugin(Vue){
  Vue.DatasBr = DatasBr

   Object.defineProperties(Vue.prototype, {
     $converterData: {
       get: function get(){
         return DatasBr.converterData
       }
     }
   })
}

export default plugin
