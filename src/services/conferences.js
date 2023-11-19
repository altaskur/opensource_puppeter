import { connectDatabase } from "../utils/db.js";
// import Conferences from "../models/conferences.js";

export const saveEvents = async (events) => {
  await connectDatabase();
  // const records = events.map((event) => new Conferences(event));

  // await Conferences.insertMany(records);
};
