const express 	= require('express');
const app 		= express();
const connectDB = require('./config/db');

// connect to database
connectDB();

app.use(  express.json({ extended: false }) );

// Defining routes
app.use('/api/users', require('./routes/users.js'));
app.use('/api/contacts', require('./routes/contacts.js'));
app.use('/api/auth', require('./routes/auth.js'));

const PORT = process.env.PORT || 5000

app.listen( PORT, () => {
	console.log(`Listening on port ${PORT}`)
})