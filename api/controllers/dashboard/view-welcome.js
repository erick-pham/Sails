module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function (inputs, exits) {
    if (this.req.me && this.req.me.isSuperAdmin) {
      this.res.redirect('/admin');
    }
    return exits.success();

  }


};
