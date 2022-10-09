const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const correctDate = (date: Date) => {
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDate();
  return `${month} ${day}, ${year}`;
};
