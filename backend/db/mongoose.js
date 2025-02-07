const mongoose = require('mongoose');

const DATABASE_URL = "mongodb+srv://vincent123:5Us-2G_hRmN6jN6@cluster0.l95wc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your actual connection string

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected successfully");
}).catch((error) => {
    console.error("DB connection failed:", error);
});
