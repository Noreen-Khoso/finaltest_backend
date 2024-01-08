const express = require("express");
const errorHandlers = require("./middleware/errorHandlers");
const connectDb = require("./Config/connectionDb");
const env = require("dotenv").config();

const app = express();

// Database connection
connectDb();

app.use(express.json());

// Routes
// app.use("/api/contacts", require("./Routers/contactRoutes"));
app.use("/api/poetrys", require("./routers/poetryRoutes"));
app.use("/api/poets",require("./routers/poetDataRoutes"))

// Error handlers
app.use(errorHandlers); 



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});