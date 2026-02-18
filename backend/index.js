import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors({origin: process.env.CLIENT_URL}));
app.use(express.json());

app.get("/",(req,res) =>{
    res.send("Hello from 5000 backend");
}) 
// API to create checkout session
app.post("/create-checkout-session",async(req,res) =>{
    try {
        const {cart} = req.body;
        const line_items = cart.map((item) => ({
            price_data:{
                currency: "cad",
                product_data: {
                    name: `${item.title} (${item.selectedSize})`,
                    images:[item.image],
                },
                unit_amount: Math.round(item.price*100),
            },
            quantity: item.quantity
        }))
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/payment-success`,
            cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,

        })

        res.json({url: session.url});
    } catch (error) {
        console.log("ERROR:",error.message);
        
        res.status(500).json({error: error.message});
    }
})

app.listen(5000,() =>{
    console.log("Server started at 5000");
    
})