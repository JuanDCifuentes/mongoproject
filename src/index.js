const Express = require( "express");
const mongoose = require( "mongoose");
require('dotenv').config();
const userRoutes = require("./routes/user");
const peliculasRoutes = require("./routes/peliculas");

const app = Express();
const port = process.env.port || 3000;


//middleware
app.use(Express.json());
app.use('/home', userRoutes);
app.use('/catalogo', peliculasRoutes)

// routes 
app.get('/', (req, res) => {
    res.send("welcome api");
})


// mondb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => { console.log("conexion realizada")} )
    .catch((err) => console.log(err));




app.listen(port, () => console.log( `server litening on port ${port}`));
