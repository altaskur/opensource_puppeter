/* eslint-disable import/prefer-default-export */
import { connectDatabase } from "../utils/db.js";
import Conferences from "../models/conferences.js";
import mongoose from "mongoose";

export const saveEvents = async (events) => {
  const mergedEvents = events.reduce((acc, event) => {
    const { title } = event;
    const eventCopy = event;

    const conference = {
      eventType: event.siteType,
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
  const records = mergedEvents.map((eventData) => new Conferences({
    _id: new mongoose.Types.ObjectId(),
    title: eventData.title,
    urls: eventData.urls,
    eventDate: eventData.eventDate,
  }));

  await Conferences.insertMany(records);
};
