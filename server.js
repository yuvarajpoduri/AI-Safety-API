const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const incidentRoutes = require("./routes/incidents");

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/incidents", incidentRoutes);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error(err));
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
