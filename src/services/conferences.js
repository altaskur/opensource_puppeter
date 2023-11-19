/* eslint-disable import/prefer-default-export */
import { connectDatabase } from "../utils/db.js";
import Conferences from "../models/conferences.js";
import mongoose from "mongoose";

export const saveEvents = async (events) => {
  const mergedEvents = events.reduce((acc, event) => {
    const { title } = event;
    const eventCopy = event;

    const conference = {
      type: event.siteType,
      url: event.url,
    };

    delete eventCopy.url;
    const index = acc.findIndex((e) => e.title === title);

    if (index === -1) {
      acc.push({
        ...eventCopy,
        urls: [conference],
      });
    } else {
      acc[index].urls = [...acc[index].urls, conference];
    }
    return acc;
  }, []);

  await connectDatabase();
  const records = events.map(
    (event) => new Conferences({
      _id: new mongoose.Types.ObjectId(),
      title: event.title,
      urls: event.urls,
      eventDate: event.eventDate,
    }),
  );

  await Conferences.insertMany(records);
};
