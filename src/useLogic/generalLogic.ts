export const getAge = (birth: string): string => {
  const userYear = parseInt(birth.slice(6, 10));
  const userMonth = parseInt(birth.slice(3, 5));
  const userDay = parseInt(birth.slice(0, 2));

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  let age = currentYear - userYear;

  if (currentMonth < userMonth) {
    age--;
  } else if (currentMonth === userMonth) {
    if (currentDay > userDay) {
      age--;
    }
  }

  return age.toString();
};
