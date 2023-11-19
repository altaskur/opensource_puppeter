import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ConferencesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  eventDate: String,
  urls: [
    {
      eventType: String,
      url: String,
    },
  ],
});

export default mongoose.model("Conferences", ConferencesSchema);
