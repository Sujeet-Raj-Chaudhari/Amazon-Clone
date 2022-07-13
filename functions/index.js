const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51LKzQYSFsiX9j4tcqeLb3lsYXydUKhk0WI6Haxyzr0Asj7eJ5aUEYqIYoYarkX0XIaBtPHv3thw9xDBRMfa9UIWf00G2tTuHMB"
);

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routers
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("PAYMENT REQUEST RECIEVED BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //PK-Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-Listen command
exports.api = functions.https.onRequest(app);
//example endpoint
//http://localhost:5001/clone-c480d/us-central1/api
