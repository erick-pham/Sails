/**
 * Work.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true,
      maxLength: 200,
    },
    workLoad : {
      type: 'double',
      required: true,
    },
    dateComplete:{
      type: 'Date',
      required: true,
    },
    id_user:{
      type: 'Date',
      required: true,
    },
    id_project:{
      type: 'Date',
      required: true,
    }
  },

};

