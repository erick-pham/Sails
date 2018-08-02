module.exports = {
  friendlyName: 'Update work info',
  description: 'Display "Edit work" page.',

  inputs: {
    id: {
      description: 'The ID of the work',
      type: 'number'
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
  // 2018-08-02T15:06:11.841Z
  // 2018-08-23T17:00:00.000Z
    console.log('process update work, finish work');
    var valuesToSet = {
      completeDate: new Date().toLocaleString()
    };
    await Work.update({ id: inputs.id }).set(valuesToSet);
    //return exits.success();
    throw {redirect: '/work'};
  }
};
