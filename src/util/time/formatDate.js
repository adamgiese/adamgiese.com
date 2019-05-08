import ordinalDay from './ordinalDay';
import monthName from './monthName';

export default (date) => {
  const day = ordinalDay(date.getDate());
  const month = monthName(date.getMonth());
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
