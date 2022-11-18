const getDayName = (Day) => {
  let DayName;
  switch (Day) {
    case 0:
      DayName = "Minggu";
      break;
    case 1:
      DayName = "Senin";
      break;
    case 2:
      DayName = "Selasa";
      break;
    case 3:
      DayName = "Rabu";
      break;
    case 4:
      DayName = "Kamis";
      break;
    case 5:
      DayName = "Jumat";
      break;
    case 6:
      DayName = "Sabtu";
      break;
    default:
      break;
  }

  return DayName;
};
const getMonthName = (Month) => {
  let MonthName;
  switch (Month) {
    case 0:
      MonthName = "Januari";
      break;
    case 1:
      MonthName = "Februari";
      break;
    case 2:
      MonthName = "Maret";
      break;
    case 3:
      MonthName = "April";
      break;
    case 4:
      MonthName = "Mei";
      break;
    case 5:
      MonthName = "Juni";
      break;
    case 6:
      MonthName = "Juli";
      break;
    case 7:
      MonthName = "Agustus";
      break;
    case 8:
      MonthName = "September";
      break;
    case 9:
      MonthName = "Oktober";
      break;
    case 10:
      MonthName = "November";
      break;
    case 11:
      MonthName = "Desember";
      break;
    default:
      break;
  }
  return MonthName;
};

const getReadableDate = (data) => {
  const dateData = new Date(data);
  const DayName = getDayName(dateData.getDay());
  const DateDay = dateData.getDate();
  const Month = getMonthName(dateData.getMonth());
  const Year = dateData.getFullYear();
  const FormattedDate = `${DayName}, ${DateDay} ${Month} ${Year}`;
  return FormattedDate;
};

export default getReadableDate;
