/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /': { action: 'view-homepage-or-redirect' },
  'GET /welcome': { action: 'dashboard/view-welcome' },

  'GET /faq': { view: 'pages/faq' },
  'GET /legal/terms': { view: 'pages/legal/terms' },
  'GET /legal/privacy': { view: 'pages/legal/privacy' },
  'GET /contact': { view: 'pages/contact' },

  'GET /signup': { action: 'entrance/view-signup' },
  'GET /email/confirm': { action: 'entrance/confirm-email' },
  'GET /email/confirmed': { view: 'pages/entrance/confirmed-email' },

  'GET /login': { action: 'entrance/view-login' },
  'GET /password/forgot': { action: 'entrance/view-forgot-password' },
  'GET /password/new': { action: 'entrance/view-new-password' },

  'GET /account': { action: 'account/view-account-overview' },
  'GET /account/password': { action: 'account/view-edit-password' },
  'GET /account/profile': { action: 'account/view-edit-profile' },

  'GET /work': { action: 'work/index' },
  'GET /work/edit/:id': { action: 'work/edit' },
  'PUT /work/update/:id': { action: 'work/update' },
  'GET /work/finish/:id': { action: 'work/finish' },
  'GET /work/new': { action: 'work/new' },
  'POST /work/create': { action: 'work/create' },

  'GET /plan': { action: 'plan/index' },
  'GET /plan/new': { action: 'plan/new' },
  'POST /plan/create': { action: 'plan/create' },

  'GET /absen': { action: 'absen/index' },
  'GET /absen/new': { action: 'absen/new' },
  'POST /absen/create': { action: 'absen/create' },


  'GET /admin': { action: 'admin/index' },
  'GET /admin/user': { action: 'admin/user/index' },
  'GET /admin/user/new': { action: 'admin/user/new' },
  'POST /admin/user/create': { action: 'admin/user/create' },
  'GET /admin/user/edit/:userId': { action: 'admin/user/edit' },
  'GET /admin/user/update/:userId': { action: 'admin/user/update' },


  'GET /admin/team': { action: 'admin/team/index' },
  'GET /admin/team/new': { action: 'admin/team/new' },
  'POST /admin/team/create': { action: 'admin/team/create' },
  'GET /admin/team/edit/:teamId': { action: 'admin/team/edit' },
  'GET /admin/team/update/:teamId': { action: 'admin/team/update' },

  'GET /admin/position': { action: 'admin/position/index' },
  'GET /admin/position/new': { action: 'admin/position/new' },
  'POST /admin/position/create': { action: 'admin/position/create' },
  'GET /admin/position/edit/:positionId': { action: 'admin/position/edit' },
  'GET /admin/position/update/:positionId': { action: 'admin/position/update' },


  'GET /admin/project': { action: 'admin/project/index' },
  'GET /admin/project/new': { action: 'admin/project/new' },
  'POST /admin/project/create': { action: 'admin/project/create' },


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the CloudSDK library.
  '/api/v1/account/logout': { action: 'account/logout' },
  'PUT   /api/v1/account/update-password': { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile': { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card': { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login': { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup': { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login': { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message': { action: 'deliver-contact-form-message' },


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝
  '/terms': '/legal/terms',
  '/logout': '/api/v1/account/logout',

};
