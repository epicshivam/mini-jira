import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`Successfully connected to the Database: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting with database: ${err.message}`);
    process.exit(1); 
  }
};

export default connectDb;