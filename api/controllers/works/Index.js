/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  friendlyName: 'View list works',


  description: 'Display "Index works" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/works/index',
    }

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};

