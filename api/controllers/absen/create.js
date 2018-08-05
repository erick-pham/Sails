module.exports = {
  friendlyName: "Update work info",
  description: 'Display "Edit work" page.',

  inputs: {
    numberOfDaysOff: {
      type: "number"
    },
    reason: {
      type: "string"
    },
    title: {
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
    console.log("process creat absen");

    var valuesToCreate = {
      title: inputs.title,
      reason: inputs.reason,
      owner: this.req.session.userId,
      numberOfDaysOff: inputs.numberOfDaysOff
    };

    await Absen.create(valuesToCreate);

    //return res.redirect("absen");
    throw { redirect: "/absen" };
  }
};
