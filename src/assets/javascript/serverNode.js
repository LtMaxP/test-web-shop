//import express from 'express';
//import mercadopago from 'mercadopago';
//import cors from 'cors'

//const app = express();
//app.use(cors);
//app.use(express.json()); // Asegúrate de parsear JSON
//app.use(bodyParser.json()); // Asegúrate de parsear JSON

//app.listen(4000, () => {
//    console.log('Servidor backend corriendo en el puerto 4000');
//});

import express from 'express';
import mercadopago from 'mercadopago';

const app = express();
app.use(express.json());

/* const client = new mercadopago({access_token: 'TEST-4109502089176554-062016-9e45d4bd781669cd5166f9abbe96836b-74242923'});
//MercadoPagoConfig.access_token.configure({access_token: 'TEST-4109502089176554-062016-9e45d4bd781669cd5166f9abbe96836b-74242923'});

app.post('/create_preference', (req, res) => {
    let preference = {
        items: [
            {
                title: 'Mi producto',
                unit_price: 100,
                quantity: 1,
            }
        ],
        back_urls: {
            success: 'http://localhost:4200/success',
            failure: 'http://localhost:4200/failure',
            pending: 'http://localhost:4200/pending',
        },
        auto_return: 'approved',
    };
    
    client.preferences.create(preference)
        .then(response => {
            res.json({
                id: response.body.id
            });
        }).catch(error => {
            console.error('Error al crear la preferencia:', error);
            res.status(500).send('Error interno del servidor');
        });
}); */

app.listen(3000, () => {
    console.log('Servidor backend corriendo en el puerto 3000');
});