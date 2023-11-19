import mongoose from 'mongoose'

export const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected.");
    })
    .catch((error) => console.log(`Error Connecting to DB: ${error}`));
};
