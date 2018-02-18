const bcrypt = require('bcrypt');
const randomnumber = require('random-number');

module.exports = function(app){
	app.get('/', (req, res) => res.send('any express app'));

	app.get('/register', (req, res) => res.render('register'));

	app.post('/register', (req, res) => {
		var user = req.body;
		console.log("user: ", user);

		const saltRounds = randomnumber({min: 5, max: 20, integer: true});
		const salt = bcrypt.genSaltSync(saltRounds);
		user.password = bcrypt.hashSync(user.password, salt);

		user.hash = bcrypt.hashSync(user.email, salt);

		user.status = 0;

		var connection = new app.infra.connectionFactory();
		var userDAO = new app.infra.UserDAO(connection);

		userDAO.create_user(user, function(err, results){
			if (err) throw err;
			res.redirect('/');
		})
		
	});
}
