const express = require("express");
const notesRoutes = require("./routes/notesRoutes");
const connectDB = require("../config/db");
const dotenv = require("dotenv");
const port = process.env.PORT || 5001;

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(port, () => {
    console.log("Server started on PORT: ", port);
});