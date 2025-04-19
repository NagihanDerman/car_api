const express = require("express");
const cors = require("cors");
const { getAllCars, getCar, deleteCar, updateCar, createCar } = require("./controllers");

const app = express();
const port = 3000;

//middkeware
app.use(cors);

//route/endpointlei tanimla
app.route("/api/v1/cars")
.get(getAllCars) 
.post(createCar);

app.route("/api/v1/cars/:id")
.get(getCar)
.patch(updateCar)
.delete(deleteCar);


//dinlenecek port
app.listen(port, () => {
  console.log(`server ${port}.dan gelen istekleri dinliyor`);
});
