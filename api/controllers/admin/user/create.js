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
    emailAddress: {
      required: true,
      type: 'string',
      isEmail: true,
      description: 'The email address for the new account, e.g. m@example.com.',
      extendedDescription: 'Must be a valid email address.'
    },

    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'passwordlol',
      description: 'The unencrypted password to use for the new account.'
    },

    fullName: {
      required: true,
      type: 'string',
      example: 'Frida Kahlo de Rivera',
      description: 'The user\'s full name.'
    },

    position: {
      type: 'number',
      example: 1,
      description: 'The user\'s position.'
    },
    team: {
      type: 'number',
      example: 1,
      description: 'The user\'s team.'
    },
    workingDate: {
      type: 'ref',
      columnType: 'datetime',
      example: 1,
      description: 'The user\'s team.'
    },
    emailStatus: {
      type: 'string',
      example: 'confirmed',
      description: 'Email status is confirmed.'
    }
  },

  exits: {
    success: {},
    redirect: {
      description: 'The requesting user is already created.',
      responseType: 'redirect'
    },
    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function(inputs, exits) {
    var newEmailAddress = inputs.emailAddress.toLowerCase();

    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    var newUserRecord = await User.create({
      emailAddress: newEmailAddress,
      password: await sails.helpers.passwords.hashPassword(inputs.password),
      fullName: inputs.fullName,
      position: inputs.position,
      team: inputs.team,
      workingDate: inputs.workingDate,
      emailStatus: inputs.emailStatus
    });
    //return res.redirect("/admin/user");
    throw { redirect: '/admin/user' };
  }
};
