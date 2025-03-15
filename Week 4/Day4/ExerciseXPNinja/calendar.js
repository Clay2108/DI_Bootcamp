
function createCalendar(year, month) {
  // Get the first day of the month (0 for Sunday, 1 for Monday, etc.)
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate(); // Last day of the month
  
  // Adjust firstDay to make Monday the first day of the week
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  // Create the table element
  const calendarTable = document.createElement('table');
  
  // Create the header row with weekdays
  const weekdays = ['Mon',  'Tue',  'Wed',  'Thu',  'Fri',  'Sat',  'Sun'];
  const headerRow = document.createElement('tr');
  weekdays.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    headerRow.appendChild(th);
  });
  calendarTable.appendChild(headerRow);

  // Create the rows for the days
  let currentDay = 1;
  
  // Add empty cells for days before the first day of the month
  let row = document.createElement('tr');
  for (let i = 0; i < adjustedFirstDay; i++) {
    const td = document.createElement('td');
    row.appendChild(td);
  }

  // Add the days of the month
  for (let i = adjustedFirstDay; i < 7; i++) {
    const td = document.createElement('td');
    td.textContent = currentDay;
    row.appendChild(td);
    currentDay++;
  }
  calendarTable.appendChild(row);
  
  // Add remaining weeks
  while (currentDay <= lastDate) {
    row = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      if (currentDay > lastDate) {
        calendarTable.appendChild(row);
        return calendarTable;
      }
      const td = document.createElement('td');
      td.textContent = currentDay;
      row.appendChild(td);
      currentDay++;
    }
    calendarTable.appendChild(row)
  }

  return calendarTable;
}
const calendar = createCalendar(2012, 9);
document.body.appendChild(calendar);