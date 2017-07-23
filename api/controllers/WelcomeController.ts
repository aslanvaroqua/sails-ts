/// <reference path="../../typings/index.d.ts" />
/**
 * WelcomeController
 *
 * @description :: Server-side logic for managing Welcomes
 * @help 		:: See http://links.sailsjs.org/docs/controllers
 */

import e = require('express');
import util = require('util');

declare var sails: any;

const WelcomeController = {
  index: function (req: e.Request, res: e.Response, next: Function) {
    console.log('index() from WelcomeController.ts');
// Find the 5 hottest oven brands on the market
    sails.models.welcome.find().limit(1).then((welcome) => {

      return res.render('welcome', {
        welcome: welcome[0].message
      });
    }).catch((err) => {
      return res.status(500).send(err.message);
    });


  },

  config: function (req: e.Request, res:e.Response, next:Function) {
    console.log('config() from WelcomeController.ts');
    res.status(200)
      .send('<h1>sails.config :</h1><pre>' + util.inspect(sails.config) + '<pre>');
  }
};

module.exports = WelcomeController;
