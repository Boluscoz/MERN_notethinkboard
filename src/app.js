const express = require("express");
const notesRoutes = require("./routes/notesRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const rateLimiter = require("./middleware/ratelimiter");
const port = process.env.PORT || 5001;

dotenv.config();
const app = express();

app.use(express.json());

app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log("Server started on PORT: ", port);
    })
});
