const mongoose = require("mongoose");
require("dotenv").config();

exports.connectToDB = async () => {
  await mongoose
    .connect(process.env.Mongo_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) =>
      console.log("Error While Connecting With the DB", error.message)
    );
};
