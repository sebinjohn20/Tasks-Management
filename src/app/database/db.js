import mongoose from "mongoose";
const connectionUrl =
  "mongodb+srv://sebinjohn20_db:sebinjohn20_db2000@cluster0.ithnyoh.mongodb.net";
const connectDB = async () => {
  try {
    await mongoose.connect(connectionUrl);
    console.log("Task Database connection  is successfull");
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
};

export default connectDB;
