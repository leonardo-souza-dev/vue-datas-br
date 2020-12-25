'use-strict'

var DatasBr = {
  converterDataYYYYMMDD: function(dataYYYYMMDD){
  if (dataYYYYMMDD === undefined) {
    throw "dataYYYYMMDD é undefined"
  }

  const dataSplitada = dataYYYYMMDD.split('-')
  const ano = dataSplitada[0]
  const mes = dataSplitada[1]
  const dia = dataSplitada[2]
 
  return new Date(ano, mes - 1, dia)
  }
}

function plugin(Vue){
  Vue.DatasBr = DatasBr

   Object.defineProperties(Vue.prototype, {
     $converterDataYYYYMMDD: {
       get: function get(){
         return DatasBr.converterDataYYYYMMDD
       }
     }
   })
}

export default plugin
