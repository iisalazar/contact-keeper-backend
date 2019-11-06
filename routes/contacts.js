const express = require('express');
const router = express.Router();

/*

@route 	GET /api/contacts/
@desc 	Get all user contacts
@access Private

*/
router.get('/', (req, res) => {
	res.send({ msg: 'This is the get user contacts endpoint' })	
})

/*

@route 	POST /api/contacts/
@desc 	Add a new contact
@access Private

*/
router.post('/', (req, res) => {
	res.send({ msg: 'This is the create contact endpoint' })	
})

/*

@route 	UPDATE /api/contacts/:id
@desc 	Update a contact given an id
@access Private

*/
router.put('/', (req, res) => {
	res.send({ msg: 'This is the update contact endpoint' })	
})
/*

@route 	DELETE /api/users/
@desc 	Delete a contact given an ID
@access Private

*/
router.delete('/', (req, res) => {
	res.send({ msg: 'This is the delete contact endpoint' })	
})

module.exports = router;