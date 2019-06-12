const envelopeDefault = (operacao) =>
'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:typ="http://www.portoseguro.com.br/fiancalocaticia/dominios/v1/types">'+
   '<soapenv:Header/>'+
   '<soapenv:Body>'+
      `<typ:${operacao}/>`+
   '</soapenv:Body>'+
'</soapenv:Envelope>';

module.exports = { envelopeDefault }