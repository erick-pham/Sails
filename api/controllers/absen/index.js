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
    //   userId: {
    //     description: 'The ID of the user to look up.',
    //     // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
    //     // if the `userId` parameter is not a number.
    //     type: 'number',
    //     // By making the `userId` parameter required, Sails will automatically respond with
    //     // `res.badRequest` if it's left out.
    //     //required: true
    //   }
  },

  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/absen/index'
    },
    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {

    // Look up the user whose ID was specified in the request.
    // Note that we don't have to validate that `userId` is a number;
    // the machine runner does this for us and returns `badRequest`
    // if validation fails.
    var absens = await Absen.find({ owner: this.req.session.userId }).populate('approvedBy');
    var absens_need_accept;

    var users = await User.find({id: this.req.session.userId});
    var current_user = users[0];

    if(current_user.manage_team){
      var arrUserId =[];

      var membersId = await User.find({
        select: ['id'], 
        where: {team: current_user.manage_team}
      })


      membersId.forEach(function(item){
        arrUserId.push(item.id);
      });
      absens_need_accept= await Absen.find({
        owner: arrUserId,
        approvedBy: null
      }).populate('owner');
    }
 
    //var user = await User.findOne({ id: inputs.userId });

    // If no user was found, respond "notFound" (like calling `res.notFound()`)
    // if (!user) { return exits.notFound(); }

    // Display the welcome view.
    return exits.success({ absens: absens, absens_need_accept: absens_need_accept });
  }
};