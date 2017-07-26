'use strict';

const Sequelize = require('sequelize');
const conf    = require('../../conf/sequelize.json');
const sequelize = new Sequelize(conf.database, conf.username, conf.password,{dialect:'mysql'});

const Project = sequelize.define('t_plant_data',{
	PlantId:Sequelize.INTEGER,
	temp:Sequelize.INTEGER,
	humidity:Sequelize.INTEGER,
	luminous:Sequelize.INTEGER,
	SoilHumidity:Sequelize.INTEGER,
	deleted:Sequelize.INTEGER
},{
	freezeTableName: true
});


Project.findAll().then(t_plant_data =>{
console.log(t_plant_data);

});
