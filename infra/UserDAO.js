function UserDAO(connection){
	this._connection = connection;
}

UserDAO.prototype.create_user = function(user, callback){
	this._connection.query('insert into user set ?', user, callback);
}

module.exports = function(){
	return UserDAO;
}

