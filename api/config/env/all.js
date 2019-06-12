'use strict';

module.exports = {
	port: process.env.PORT || 3000,
	sessionSecret: 'ARQUITETAWEB-KEY',
	sessionCollection: 'sessoes',
	porto: {
		authorization: process.env.CHAVE_PORTO
	}
};