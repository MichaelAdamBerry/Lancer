import moment from "moment";

export const formatDate = str => {
  const date = moment(str);
  const now = moment();
  const isInFuture = now.isBefore(str); //bool true if date is after now
  const diff = now.diff(date, "days");
  if (isInFuture === true && diff <= 7) {
    return date.fromNow();
  } else if (isInFuture === false && diff <= 7) {
    return date.toNow();
  } else {
    return date.format("ll");
  }
};

export const formatTime = str => {
  const num = Number(str.split(":")[0]);
  const hrs = num % 12 !== 0 ? (num % 12).toString() : "12";
  const min = str.split(":")[1];
  const amPm = num > 12 ? "pm" : "am";
  return `${hrs}:${min} ${amPm}`;
};

export const collectIdsAndDocs = doc => {
  return { id: doc.id, ...doc.data() };
};
