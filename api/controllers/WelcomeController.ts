/// <reference path="../../typings/index.d.ts" />
/**
 * WelcomeController
 *
 * @description :: Server-side logic for managing Welcomes
 * @help 		:: See http://links.sailsjs.org/docs/controllers
 */

import e = require('express');
import util = require('util');

declare const sails: any;

const WelcomeController = {
  index: function (req: e.Request, res: e.Response, next: Function) {
    console.log('index() from WelcomeController.ts');
    sails.models.welcome.find().limit(1).then((welcome) => {
      /// TODO: add logger
      console.log(`welcome page rendering w/ message ${welcome[0].message}`);
      return res.render('welcome', {
        welcome: welcome[0].message
      });
    }).catch((err:Error) => {
      console.error(err.message);
      return res.render('500', err)
    });


  },
  config: function (req: e.Request, res:e.Response, next:Function) {
    console.log('config() from WelcomeController.ts');
    return res.status(200)
      .send('<h1>sails.config :</h1><pre>' + util.inspect(sails.config) + '<pre>');
  }
};

module.exports = WelcomeController;
