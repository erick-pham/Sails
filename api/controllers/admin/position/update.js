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
        },
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

        var valuesToUpdate = {};
        var fields = {};

        if (inputs.fields) {
            for (var i = 0; i < inputs.fields.length; i++) {
                var f = 'field' + i;
                fields[f] = inputs.fields[i];
            }
        }

        valuesToUpdate.name = inputs.name;
        valuesToUpdate.fields = fields;
        await Position.update({ id: inputs.positionId }).set(valuesToUpdate);
        throw { redirect: "/admin/position" };
        //return exits.success();
    }
};
