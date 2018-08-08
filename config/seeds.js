// /**
//  * Sails Seed Settings
//  * (sails.config.seeds)
//  *
//  * Configuration for the data seeding in Sails.
//  *
//  * For more information on configuration, check out:
//  * http://github.com/frostme/sails-seed
//  */
// var faker = require("faker");
// module.exports.seeds = {
//   // seeding User
//   overwrite: true,
//   user: {
//     data: [
//       {
//         emailAddress: "admin@gmail.com",
//         fullName: "admin",
//         emailStatus: "confirmed",
//         isSuperAdmin: true,
//         password: "$2a$10$EPqg0D4LBeZpwBVUsUBeNe8VjmpbSliCGE9HGAypFeInUiSKRtubO"
//         //password: sails.helpers.passwords.hashPassword('admin@gmail.com')
//       }
//     ],
//     active: true
//   },

//   team: {
//     data: [
//       {
//         name: faker.internet.userName(),
//         createdAt: new Date()
//       }
//     ],
//     active: true
//   },

//   project: {
//     data: [
//       {
//         title: faker.internet.userName(),
//         startDate: new Date(),
//         endDate: new Date()
//       }
//     ],
//     active: true
//   }
// };
