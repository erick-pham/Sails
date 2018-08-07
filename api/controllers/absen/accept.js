/**
 * WorkController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    friendlyName: 'List works',
    description: 'List works of current user, user must logign.',

    inputs: {
        absenId: {
            description: 'The ID of the user to look up.',
            // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
            // if the `userId` parameter is not a number.
            type: 'number',
            // By making the `userId` parameter required, Sails will automatically respond with
            // `res.badRequest` if it's left out.
            //required: true
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

        // get absen with id
        var absens = await Absen.find({ id: inputs.absenId });
        var absen = absens[0];


        //get current_user
        var users = await User.find({ id: this.req.session.userId });
        var current_user = users[0];

        // check user who has the absen is member of current_user
        users = await User.find({ id: absen.owner, team: current_user.manage_team }).limit(1);

        // check = true, process to update
        if (users) {
            await Absen.update({ id: inputs.absenId }).set({ approvedBy: current_user.id });
        }

        throw { redirect: "/absen" };
    }
};