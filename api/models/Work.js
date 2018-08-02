/**
 * Work.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // Add a reference to User
    owner: {
      model: 'user'
    },

    // Add a reference to Project
    project: {
      model: 'project'
    },
    title: {
      type: 'string',
      required: true,
      maxLength: 200,
    },
    workLoad : {
      type: 'number',
    },
    completeDate:{
      type: 'string',
      columnType: 'datetime',
    },
  },

};

