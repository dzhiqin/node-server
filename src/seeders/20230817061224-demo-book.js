'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books',[
      {
        name: "Spare",
        author: "harry",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "If you tell",
        author: "Gregg Olsen",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Reminders of him",
        author: "Colleen Hoover",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Book',null,{})
  }
};
