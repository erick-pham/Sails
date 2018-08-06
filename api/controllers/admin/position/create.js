/**
 * PlanController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  friendlyName: 'New the plan info',
  description: 'List works of current user, user must logign.',
  inputs: {
    name: {
      type: "string"
    },
    fields: {
      type: "json"
    }
  },
  exits: {
    success: {},
    redirect: {
      description: "The requesting user is already logged in.",
      responseType: "redirect"
    }
  },

  fn: async function (inputs, exits) {

    var valuesToCreate = {};
    var fields = {};
    if (inputs.fields) {
      for (var i = 0; i < inputs.fields.length; i++) {
        var f = 'field' + i;
        fields[f] = inputs.fields[i];
      }
    }
    valuesToCreate.name = inputs.name;
    valuesToCreate.fields = fields;
    await Position.create(valuesToCreate);
    throw { redirect: "/admin/position" };
    //return exits.success();
  }
};
