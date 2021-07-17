import React, { useState, useEffect } from 'react';
import { formatAMPMTime } from '../../function';
const MonthName = (mon) => {
  var month = ""
  var monthArray = [
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
  ]
  monthArray.map((m) => {
    if (m.substring(0, 3) === mon) {
      month = m
    }
  }
  )
  return month
};
const DayName = (da) => {
  var day = ""
  var dayArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]
  dayArray.map((d) => {
    if (d.substring(0, 3) === da) {
      day = d
    }
  }
  )
  return day
};
const Index = ({ item }) => {
  useEffect(() => {
    if (item) {
      setCurrValues(item);
    }
  }, [item]);

  const [eventDetails, setEventDetails] = useState([]);
  const [days, setDays] = useState([]);
  const [sessionTime, setSessionTime] = useState('');
  const [occurrences, setOccurrences] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endYear, setEndYear] = useState('');
  const [startFullDate, setStartFullDate] = useState('');
  const [endFullDate, setEndFullDate] = useState('');

  const setCurrValues = (data) => {
    let schedule = data.schedule && JSON.parse(data.schedule);
    setEventDetails(schedule);
    setDays(schedule?.days);
    if (schedule?.sessionTime) {
      let hours = schedule?.sessionTime
        ? schedule?.sessionTime.substring(0, 2)
        : '00';
      let minutes = schedule?.sessionTime
        ? schedule?.sessionTime.substring(2, 5)
        : '00';
      if (hours > 12) {
        setSessionTime((hours % 12) + minutes + ' PM');
      } else if (hours === 0) {
        setSessionTime(12 + minutes + ' AM');
      } else if (hours === 12) {
        setSessionTime(12 + minutes + ' PM');
      } else {
        setSessionTime((hours % 12) + minutes + ' AM');
      }
    }
    let start = null;
    if (schedule?.startDate) {
      start = schedule.startDate;
    } else {
      start = schedule?.sessionDate;
    }
    if (start) {
      setStartMonth(start.substring(5, 7));
      setStartDate(start.substring(8, 10));
      var dateObj = new Date(start)
      var date = dateObj.toString()
      var tempDate = date.substring(0, 16)
      var day = tempDate.substring(0, 3)
      var month = tempDate.substring(4, 7)
      var datee = tempDate.substring(8, 10)
      var year = tempDate.substring(11)
      var finalDate = DayName(day) + ", " + MonthName(month) + " " + datee + ", " + year
      setStartFullDate(finalDate)
    }
    if (schedule?.endDate) {
      setEndMonth(schedule.endDate.substring(5, 7));
      setEndDate(schedule.endDate.substring(8, 10));
      setEndYear(schedule.endDate.substring(0, 4));
      var dateObj = new Date(schedule.endDate)
      var date = dateObj.toString()
      var tempDate = date.substring(0, 16)
      var day = tempDate.substring(0, 3)
      var month = tempDate.substring(4, 7)
      var datee = tempDate.substring(8, 10)
      var year = tempDate.substring(11)
      var finalDate = DayName(day) + ", " + MonthName(month) + " " + datee + ", " + year
      setEndFullDate(finalDate)
    } else {
      setOccurrences(schedule?.occurrences);
    }
  };

  return (
    <>
      <div className="flex">
        <div>
          <img src="/static/images/calender.svg" className="w-6 h-6 mr-3" />
        </div>
        <div>
          <p className={'text-base f-p-t font-medium pb-2 text-custom-black'}>
            {days &&
              days.map((day, i) => {
                return <span key={i}>{day}{i + 1 < days.length ? ", " : " "}</span>;
              })}
          </p>

          <p
            className={
              'text-base f-p-t font-medium leading-3 pb-2 text-custom-black'
            }
          >
            {/* {
              startMonth +
              '/' +
              startDate +
              (occurrences || endDate
                ? ' - ' +
                (occurrences
                  ? occurrences + ' Occurrences'
                  :
                  endMonth + '/' + endDate

                )
                : '')} */}
            {startFullDate}
            {!occurrences ? "" : endFullDate}

          </p>

          <p
            className={
              'text-base f-p-t font-medium leading-3 pb-2 text-custom-black'
            }
          >
            {formatAMPMTime(eventDetails?.sessionTime)}
          </p>
          {item.type === "multi" ?
            <p
              className={
                'text-base f-p-t font-medium leading-3 pb-2 text-custom-black'
              }
            >
              {item.sessions.items.length} Session
              {item.sessions.items.length === 1 ? '' : 's'}
            </p>
            : " "}
        </div>
      </div>
    </>
  );
};
export default Index;
