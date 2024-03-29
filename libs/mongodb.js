import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("error from DB ", error);
  }
};
export default connectMongoDB;
