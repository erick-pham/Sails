module.exports = {
    friendlyName: 'View edit work',
    description: 'Display "Edit profile" page.',
  
    inputs: {
      teamId: {
        description: 'The ID of the team',
        type: 'number'
      }
    },
  
    exits: {
      success: {
        viewTemplatePath: 'pages/admin/team/edit'
      }
    },
    fn: async function (inputs, exits) {
  
      var teams = await Team.find({ id: inputs.teamId }).limit(1);
      var users = await User.find();
      return exits.success({ edited_team: teams[0],  users: users});
    }
  };
  