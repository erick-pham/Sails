module.exports = {
  friendlyName: 'Update work info',
  description: 'Display "Edit work" page.',

  inputs: {
    userId: {
      description: 'The ID of the user to look up.',
      type: 'number'
    },
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
    emailStatus:{
      type: "string"
    }
  },

  exits: {
    success: {},
    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect'
    }
  },
  fn: async function(inputs, exits) {
    console.log('process update work');
    var valuesToSet = {
      emailAddress: inputs.emailAddress,
      password: await sails.helpers.passwords.hashPassword(inputs.password),
      fullName: inputs.fullName,
      team: inputs.team,
      position: inputs.position,
      workingDate: inputs.workingDate,
      emailStatus: inputs.emailStatus
    };
    await User.update({ id: inputs.userId }).set(valuesToSet);
    //return exits.success();
    throw { redirect: '/admin/user' };
  }
};
