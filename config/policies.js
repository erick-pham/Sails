/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'view-homepage-or-redirect': true,
  'deliver-contact-form-message': true,
 
  'admin/index': 'is-super-admin',
  'admin/user-new': 'is-super-admin',
  'admin/user-create': 'is-super-admin',
  'admin/project/index': 'is-super-admin',
  'admin/project/new': 'is-super-admin',
  'admin/project/create': 'is-super-admin',
};
