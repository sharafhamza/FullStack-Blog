const mongoose = require("mongoose");
function MongoDbconfig() {
  mongoose
    .connect(
      "mongodb+srv://admin:admin123@cluster0.alc6g.mongodb.net/Hamza?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("DataBase Connected!"));
}

module.exports = MongoDbconfig;
