import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.emv.MONGO_URL);
    if (connection.readyState == 1) {
      console.log("Connected to MongoDB");
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectMongo;
