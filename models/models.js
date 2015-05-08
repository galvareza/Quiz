var path = require('path');

//Cargar Modelo ORM

var Sequelize = require('sequelize');

//usar BBDD

var Sequelize = new Sequelize(null, null, null,
			{dialect: "sqlite", storage: "quiz.sqlite"}
		);
//Importar

var Quiz = sequelize.import(path.join(_dirname, 'quiz'));


