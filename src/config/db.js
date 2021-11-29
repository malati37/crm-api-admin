import mongoose from "mongoose";

const mongoClint = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    console.log(process.env.MONGO_URL);
    if (!mongoUrl) {
      return console.log("please provide mongo connection string");
    }
    const con = await mongoose.connect(mongoUrl);
    con && console.log("connected to mongo");
  } catch (error) {
    console.log(error);
  }
};
export default mongoClint;
