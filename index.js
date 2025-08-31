import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import ProductRoute from "./routes/product.route.js";
const app = express()

//middleware
app.use(express.json());//middleware for json type
app.use(express.urlencoded({ extended: false }))//middleware for form [url] type 

//routes
app.use("/api/products", ProductRoute);


app.get('/', (req, res) => {
    res.send("hello form Node API Server updated");
});

//connection to mongpodb database
mongoose.connect("mongodb+srv://rahavi:crazy12@backenddb.w3rh7dn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");

        app.listen(3000, () => {
            console.log("server is running on port 3000");
        });
    })
    .catch((error) => {
        console.log("Connection failed", error.message);
    });