import express from "express";
import { serve, setup } from "swagger-ui-express";
import authRoutes from "./routes/auth_routes.js";
import jsonFile from '../swagger-output.json' assert { type: 'json' };

const app = express()

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use(authRoutes)
app.use('/swagger', serve, setup(jsonFile))

app.listen(3000, () => {
  console.log("Server is running!\nAPI documentation: http://localhost:3000/swagger")
})
