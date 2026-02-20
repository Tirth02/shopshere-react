const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");


dotenv.config();
const app = express();

app.use(cors({origin: process.env.CLIENT_URL}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("MONGODB connected"))
        .catch(err => console.log(err));

app.use("/api/auth",authRoutes);
app.use("/api/checkout", checkoutRoutes);

app.listen(5000,() =>{
    console.log("Server started at 5000");
    
})