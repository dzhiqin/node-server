'use strict'
const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.sequelize.transaction(t => {
			return Promise.all([
				queryInterface.addColumn('Books','categoryId',{
					type: DataTypes.INTEGER,
					allowNull: true
				},{transaction: t}),
				queryInterface.addColumn('Books','authorId',{
					type: DataTypes.INTEGER,
					allowNull: true
				},{transaction: t})
			])
		})
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.sequelize.transaction(t => {
			return Promise.all([
				queryInterface.removeColumn('Books','categoryId',{transaction:t}),
				queryInterface.removeColumn('Books','authorId',{transaction:t})
			])
		})
	}
}
