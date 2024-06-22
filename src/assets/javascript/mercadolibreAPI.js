import  mercadopage from 'mercadopago';
import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const app = express();
/* 
app.use(morgan("dev"));

app.use(paymentRoutes);
app.use(express.json());
app.use(express.static(path.resolve("src/public"))); */
app.use(cors());
app.use(express.json())
app.listen(4000);

console.log("Server on port", 4000);


export const createOrder = async (req, res) => {

    console.log('SAPE1');
    mercadopage.configurations.setAccessToken('TEST-4109502089176554-062016-9e45d4bd781669cd5166f9abbe96836b-74242923');
    
    console.log('SAPE2');
    const preference = {
      items: [
        {
          title: "Laptop",
          unit_price: 500,
          currency_id: "ARS",
          quantity: 1,
        },
      ],
      /* notification_url: "https://e720-190-237-16-208.sa.ngrok.io/webhook", */
      back_urls: {
        success: "http://localhost:3000/success",
        pending: "http://localhost:3000/pending",
        failure: "http://localhost:3000/failure",
    },
  };
    console.log('SAPE3');
  
    const resp = mercadopage.preferences.create(preference);
    console.log('SAPE4');
    resp.then(
      response => {
        console.log('SAPE4')
        return res.json(response.body);
  }); 
}