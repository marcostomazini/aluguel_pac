const axios = require('axios');
const convert = require('xml-js');
const { envelopeDefault } = require('./envelopes');

async function executar(operacao){
    const requestSoap = await axios({
        method: 'POST',
        url: 'https://hml.portoseguro.com.br/AluguelDominiosIntegrationService/AluguelDominiosIntegrationServiceV1_0/AluguelDominiosIntegrationService/AluguelDominiosIntegrationServiceV1_0',
        headers:{
            Authorization:'Basic c2xodGRjZXg6emNidmZqNTY=',
            soapAction: 'http://www.portoseguro.com.br/fiancalocaticia/dominios/v1/pesquisarMotivosLocacao',
            'Content-Type':'text/xml; charset=UTF-8'
        },
        data: envelopeDefault(operacao)
    });

    const { data } = requestSoap;
    const json = convert.xml2json(data, { compact: false, spaces:4 });

    return  adapterList(JSON.parse(json));
}

function adapterList(x){
   
     const { elements } = x;
     const array1 = elements.map(item => {
         return [...item.elements];
     });
     
     const array2 = array1[0].filter(item => item.name.indexOf('soapenv:Body')!==-1).map(item => item.elements);
     const array3 = array2[0].map(item => item.elements);
     const array4 = array3[0].map(item => item.elements)[0].map(item => item.elements);
     const retorno = array4.map(item =>{
        const id= item[0].elements[0].text;
        const value= item[1].elements[0].text;
        return {id,value};
     });

     console.log(retorno);
     return retorno;
    
}
module.exports = { executar };