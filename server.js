const express = require('express');
const bodyParser = require ('body-parser');
const cokieParser = require ('cookie-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
require('dotenv').config({path: './config/.env'})
require('./config/db'); 
const {checkUser,requireAuth} = require ('./middleware/auth.middleware');
const app = express();


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cokieParser());

//jwt (ceci est pour assurer la sécurité de la connexion de notre utilisateur (user))
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (_req, res) => {
    res.status(200).send(res.locals.user._id)
} );

//routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

//server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
}) 