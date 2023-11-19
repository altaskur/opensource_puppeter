import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ConferencesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  eventDate: String,
  urls: [
    {
      url: String,
      type: String,
    },
  ],
});

export default mongoose.model('Conferences', ConferencesSchema);
