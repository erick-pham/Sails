module.exports = {

    friendlyName: 'List projects',
    description: 'List projects in managament system.',
  
    inputs: {
      userId: {
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
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/admin/user/index'
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
      var users = await User.find();
      //var user = await User.findOne({ id: inputs.userId });
  
      // If no user was found, respond "notFound" (like calling `res.notFound()`)
      // if (!user) { return exits.notFound(); }
  
      // Display the welcome view.
      return exits.success({users: users});
    }
  };
  