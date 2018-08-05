/**
 * Project.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // Add a reference to planing
    plans: {
      collection: 'plan',
      via: 'project'
    },

    // Add a reference to works
    works: {
      collection: 'work',
      via: 'project'
    },

    // Add a reference to User
    attends: {
      collection: 'user',
      via: 'projects'
    },

    title: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 200,
      example: 'Tomcat'
    },

    startDate: {
      type: 'ref',
      columnType: 'datetime',
    },
    endDate: {
      type: 'ref',
      columnType: 'datetime',
    }
  },

};

