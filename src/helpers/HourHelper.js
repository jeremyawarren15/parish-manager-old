export const sortHoursByDay = hours => {
  return hours.reduce((result, hour) => {
    const { dayString } = hour;

    // eslint-disable-next-line no-param-reassign
    result[dayString] = result[dayString]
      ? [...result[dayString], hour]
      : [hour];

    return result;
  }, {});
};

export const daysOfTheWeek = {
  SUNDAY: 'Sunday',
  MONDAY: 'Monday',
  TUESDAY: 'Tuesday',
  WEDNESDAY: 'Wednesday',
  THURSDAY: 'Thursday',
  FRIDAY: 'Friday',
  SATURDAY: 'Saturday'
};
