const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user");
const carsRouter = require("./routes/cars");
const bookingsRouter = require("./routes/bookings");
const contactRouter = require("./routes/contact");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/user", userRoute);
app.use("/cars", carsRouter);
app.use("/bookings", bookingsRouter);
app.use("/contact", contactRouter); 

module.exports = app;
