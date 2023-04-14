'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos',[{
      title: 'Foto Pertama Milik UserID 1',
      caption: 'Ini foto milik userid 1',
      image_url: 'https://foto1.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Foto Kedua Milik UserID 1',
      caption: 'Ini foto milik userid 1 yang kedua',
      image_url: 'https://foto2.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Foto Ketiga Milik UserID 1',
      caption: 'Ini foto milik userid 1 yang ketiga',
      image_url: 'https://foto3.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
