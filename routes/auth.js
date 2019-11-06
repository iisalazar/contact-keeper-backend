const express = require('express');
const router = express.Router();

/*

@route 	POST /api/auth/
@desc 	Authenticate user and get token
@access Public

*/
router.post('/', (req, res) => {
	res.send({ msg: 'This is the authentication endpoint' })	
})

module.exports = router;