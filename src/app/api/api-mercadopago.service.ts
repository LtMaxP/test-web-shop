import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Step 1: Import the parts of the module you want to use
import { MercadoPagoConfig, Payment, Preference } from 'mercadopago';
import { title } from 'process';
import { createOrder } from '../../assets/javascript/mercadolibreAPI';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
//import { test1 } from '../../assets/javascript/serverNode';

const client3 = new MercadoPagoConfig({ accessToken: 'TEST-4109502089176554-062016-9e45d4bd781669cd5166f9abbe96836b-74242923', options: { timeout: 5000, idempotencyKey: 'abc' } });


@Injectable({
    providedIn: 'root'
})
export class mercadoPagoService {

    constructor(private http: HttpClient, private apiServicio: ApiService) {
        //test1();
    }
    apiUrl = this.apiServicio.apiUrlString;

    pagarRequestOLD() {

        // Step 2: Initialize the client object
        const client = new MercadoPagoConfig({ accessToken: 'TEST-4109502089176554-062016-9e45d4bd781669cd5166f9abbe96836b-74242923', options: { timeout: 5000, idempotencyKey: 'abc' } });

        // Step 3: Initialize the API object
        const payment = new Payment(client);

        // Step 4: Create the request object
        const body = {
            transaction_amount: 112.34,
            description: 'remera full',
            payment_method_id: '1',
            payer: {
                email: 'pepe@gmail.com'
            },
        };

        // Step 5: Create request options object - Optional
        const requestOptions = {
            idempotencyKey: 'abc',
        };

        // Step 6: Make the request
        var asd = payment.create({ body, requestOptions }).then(console.log).catch(console.log);
    }

    createPayment(preference2: any): Observable<any> {
        const preference = {
            title: 'Mi producto',
            unit_price: 100,
            quantity: 1,
          };
        return this.http.post(`${this.apiUrl}/api/payment/create_preference`, preference);
        /* await createOrder();  create_preference   */ 
    }
    async pagarRequest3() {

        /* // Step 2: Initialize the client object
        const client = new MercadoPagoConfig({ accessToken: 'TEST-4109502089176554-062016-9e45d4bd781669cd5166f9abbe96836b-74242923', options: { timeout: 5000, idempotencyKey: 'abc' } });
        client3.
        // Step 3: Initialize the API object
        const payment = new Payment(client);
         */
        // Step 4: Create the request object
        const preferencex = await new Preference(client3);
        preferencex.create({
            body: {
                items: [
                    {
                        title: "Productin",
                        quantity: 1,
                        unit_price: 2000,
                        id: '3'
                    }
                ],
            }
        })
        .then(console.log)
        .catch(console.log);

        // Step 5: Create request options object - Optional
        const requestOptions = {
            idempotencyKey: 'abc',
        };

        /* redirect(preferencex.sandbox_init_point!); */

        /* const tre = await new Preference(client3).create({bodyTest, requestOptions}); */
        /* // Step 6: Make the request
        var responseML = payment.create({ body, requestOptions }).then(console.log).catch(console.log); */
        /* 
        var bodyx = responseML.then(r => {r.body}) */

    }
}

