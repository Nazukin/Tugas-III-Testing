'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos',[{
      title: 'Foto Bayi',
      caption: 'Foto ketika aku baru dilahirkan',
      image_url: 'https://fotobayi.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Foto Liburan SD',
      caption: 'Foto ketika aku berlibur bareng keluarga di bali',
      image_url: 'https://fotoliburan-SD.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Foto Perpisahan SMA',
      caption: 'Foto ketika aku tampil di acara perpisahan SMA',
      image_url: 'https://fotosma.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {})
    
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
