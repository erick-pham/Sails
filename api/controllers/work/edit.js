module.exports = {
  friendlyName: 'View edit work',
  description: 'Display "Edit profile" page.',

  inputs: {
    id: {
      description: 'The ID of the work',
      type: 'number'
    }
  },

  exits: {
    success: {
      viewTemplatePath: 'pages/work/edit'
    }
  },
  fn: async function (inputs, exits) {

    //todo
    console.log(inputs.id);
    var work = await Work.findOne({ id: inputs.id });
    console.log(work.title);
    return exits.success({ work: work });
  }
};
