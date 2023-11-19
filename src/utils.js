import { parse, toDate, format } from 'date-fns';

const parseDate = (dateString) => {
  const parsedDate = parse(dateString, "dd MMM yyyy HH:mm 'CET'", new Date());
  const formattedDate = toDate(parsedDate);

  try {
    return format(formattedDate, 'yyyy-MM-dd');
  } catch (error) {
    console.log('Error parsing date: ', dateString);
    return dateString;
  }
};

export default parseDate;
