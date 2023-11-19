import { parse, toDate, format } from 'date-fns';

const parseDate = (dateString) => {
  const parsedDate = parse(dateString, "dd MMM yyyy HH:mm 'CET'", new Date());
  const formattedDate = toDate(parsedDate);

  try {
    return format(formattedDate, 'yyyy-MM-dd');
  } catch (error) {
    return dateString;
  }
};

const createNewEvent = (data, site) => {
  const event = {
    eventDate: parseDate(data.dateTime),
    title: data.title,
    hostName: data.hostName,
    url: site.url,
    site: site.name,
    createdAt: new Date(),
  };
  return event;
};

export { parseDate, createNewEvent };
