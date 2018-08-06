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
      positionId: {
        type: "number"
      }
    },
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/admin/position/edit'
      },
      redirect: {
        description: "The requesting user is already logged in.",
        responseType: "redirect"
      }
    },
  
    fn: async function (inputs, exits) {
  
      var position = await Position.find({id: inputs.positionId}).limit(1);

      return exits.success({position: position[0]});
    }
  };
  