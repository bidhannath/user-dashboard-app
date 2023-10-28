'use strict';

module.exports = {
  up: (queryInterface: any, Sequelize: any) => {
    return queryInterface.bulkInsert('Users', [
      {
        uid: 'gjgsdcut7yuy',
        displayName: 'Test User',
        email: 'test@gmail.com',
        phoneNumber: 8767567654,
        avatar: 'dummy-url',
        coverImage: 'dummy-url',
        bio: 'This is a dummy bio.',
        location: 'dummy-location',
        dob: new Date("1995-08-17"),
        gender: 'male',
        relationshipStatus: 'single',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface: any, Sequelize: any) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};