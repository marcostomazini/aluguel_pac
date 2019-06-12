const express = require('express');
const path = require('path');
const service = require('./api/business/services');

var init = require('./api/config/init')(),
	config = require('./api/config/config');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

/*app.get('/*', function(req,res) {    
	res.sendFile(path.join(__dirname+'/dist/index.html'));
});*/

app.get('/orcamento/*', function(req,res) {    
	res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.get('/api/pac/motivos-locacao', async (req, res) => {
  const motivos = await service.executar('PesquisarMotivosLocacaoRequest');
  res.send(motivos)
});

app.get('/api/pac/vinculos-empregaticios', async (req, res) => {
  const motivos = await service.executar('PesquisarVinculosEmpregaticiosRequest');
  res.send(motivos)
});


app.listen(config.port, () => {
  console.log('ArquitetaWeb app listening on port ->' + config.port);
});
