const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

/*

@route 	POST /api/users/
@desc 	Register a new user
@access Public

*/
router.post('/', 
	[
		check("name", "Please add a name")
			.not()
			.isEmpty(),
		check("email", "Please provide a valid email")
			.isEmail(),
		check("password", "Please enter a password w/ 6 or more characters")
			.isLength({ min: 6 })
	],
	async (req, res) => {
	const errors = validationResult(req);
	if( !errors.isEmpty() ) {
		return res.status(400).json({ errors: errors.array() })
	}

	// destructure name, email, password
	const { name, email, password } = req.body;
	try {
		let user = await User.findOne({ email });
		if (user) return res.status(400).json({ msg: "User already exists "});
		user = new User({
			name,
			email,
			password
		}); // create new user object from User model
		const salt = await bcrypt.genSalt(10); // generate salt
		user.password = await bcrypt.hash(password, salt); // hash password
		await user.save(); // save user 
		res.send(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}


})


/*

@route 	GET /api/users/
@desc 	Get registered user
@access Private

*/
router.get('/', (req, res) => {
	res.send({ msg: 'This is the get user endpoint' })	
})

module.exports = router;