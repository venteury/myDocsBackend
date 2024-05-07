const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const apiLogger = require("./utils/apiLogger");
const bodyParser = require("body-parser");

const app = express();
const documentRoutes = require("./routes/document.routes");
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log API hits
app.use(apiLogger);

// Connect to MongoDB

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Use document routes
app.use("/api", documentRoutes);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
