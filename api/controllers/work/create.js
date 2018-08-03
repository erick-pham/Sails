module.exports = {
  friendlyName: 'Update work info',
  description: 'Display "Edit work" page.',

  inputs: {
    project_id: {
      description: 'The ID of the work',
      type: 'number'
    },

    workLoad: {
      type: 'number'
    },

    title: {
      type: 'string'
    }
  },

  exits: {
    success: {

    },
    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect'
    }
  },
  fn: async function (inputs, exits) {

    //todo
    //debugger;
    console.log('process create work');

    var valuesToCreate = {
      workLoad: inputs.workLoad,
      title: inputs.title,
      project: inputs.project_id,
      owner: this.req.session.userId
    };

    console.log(valuesToCreate);
    await Work.create(valuesToCreate);
    //return exits.success();
    throw { redirect: '/work' };
  }
};
