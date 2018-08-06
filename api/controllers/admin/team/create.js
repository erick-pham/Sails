module.exports = {
  friendlyName: "Update work info",
  description: 'Display "Edit work" page.',

  inputs: {
    name: {
      type: "string"
    }
  },

  exits: {
    success: {},
    redirect: {
      description: "The requesting user is already logged in.",
      responseType: "redirect"
    }
  },
  fn: async function(inputs, exits) {
    console.log("log: create team");

    var valuesToCreate = {
      name: inputs.name
    };

    await Team.create(valuesToCreate);
    throw { redirect: "/admin/team" };
  }
};
