/**
 * PlanController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName: 'New the plan info',
    description: 'List works of current user, user must logign.',
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/admin/position/new'
      }
    },
  
    fn: async function (inputs, exits) {
      return exits.success();
    }
  };
  