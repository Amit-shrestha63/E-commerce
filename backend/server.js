const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes"); // Make sure this path is correct

const app = express();

dotenv.config();
console.log(process.env.PORT)
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});