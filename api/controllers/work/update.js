module.exports = {
  friendlyName: 'Update work info',
  description: 'Display "Edit profile" page.',

  inputs: {
    id: {
      description: 'The ID of the work',
      type: 'number'
    },

    workLoad: {
      type: 'number'
    },

    completeDate: {
      type: 'string',
      columnType: 'datetime',
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
    console.log('process update work');
    console.log(inputs.workLoad);
    var valuesToSet = {
      workLoad: inputs.workLoad,
      title: inputs.title,
      completeDate: inputs.completeDate
    };
    await Work.update({ id: inputs.id }).set(valuesToSet);
    //return exits.success();
    throw {redirect: '/work'};
  }
};
