const o = {};
module.exports = o;

o.init = function() {



	const express = require('express');
	const app = express();

	app.use(express.json());
	app.use(express.static('public'));

	o.singleton = app





}