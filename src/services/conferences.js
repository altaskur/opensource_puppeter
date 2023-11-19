/* eslint-disable import/prefer-default-export */
import mongoose from 'mongoose';
import { connectDatabase } from '../utils/db.js';
import logger from '../utils/logger.js';
import Conferences from '../models/conferences.js';

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

  const existingEvents = await Conferences.find({
    title: { $in: mergedEvents.map((event) => event.title) },
  });

  const records = mergedEvents
    .filter(
      (event) => !existingEvents.find(
        (existingEvent) => existingEvent.title === event.title,
      ),
    )
    .map(
      (eventData) => new Conferences({
        _id: new mongoose.Types.ObjectId(),
        title: eventData.title,
        urls: eventData.urls,
        eventDate: eventData.eventDate,
      }),
    );

  logger.info(`Saving ${records.length} events`);
  records.forEach((record) => logger.info(`Saving ${record.title}`));

  await Conferences.insertMany(records);
};
