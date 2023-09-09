import React, { useState, useEffect } from 'react';
import '../Calendar.css'
const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  const [change, setChange] = useState("static");

  useEffect(() => {
    const input = document.querySelector('.dateInput');
    input.value = year + '-' + (month + 1) + '-' + date;
  }, [year, month, date]);

  const changeValue = (newYear = year, newMonth = month + 1, newDate = date) => {
    setYear(newYear);
    setMonth(newMonth - 1);
    setDate(newDate);
  };

  const changeDate = (e) => {
    changeValue(e.target.dataset.year, Number(e.target.dataset.month) + 1, e.target.innerText);
  };

  const prevMonth = () => {
    const newYear = month === 0 ? year - 1 : year;
    const newMonth = month === 0 ? 11 : month - 1;
    changeValue(newYear, newMonth + 1);
  };

  const nextMonth = () => {
    const newYear = month === 11 ? year + 1 : year;
    const newMonth = month === 11 ? 0 : month + 1;
    changeValue(newYear, newMonth + 1);
  };

  const classes = (data) => {
    if (data.getMonth() !== month) {
      return "outDate";
    } else if (data.getDate() === date) {
      return "pointDate";
    } else if (
      data.getDate() === new Date().getDate() &&
      data.getMonth() === new Date().getMonth() &&
      data.getFullYear() === new Date().getFullYear()
    ) {
      return "today";
    }
    return "innerDate";
  };

  const changeYear = () => {
    setChange("input");
    setTimeout(() => {
      const input = document.querySelector('.yearInput');
      input.focus();
    }, 0);
  };

  const inputChange = () => {
    const input = document.querySelector('.yearInput');
    const newYear = parseInt(input.value);
    if (newYear > 1899 && newYear < 3000) {
      changeValue(newYear);
      setChange("static");
    } else if (newYear < 1900) {
      changeValue(1900);
      setChange("static");
    } else if (newYear > 3000) {
      changeValue(2999);
      setChange("static");
    } else {
      setChange("static");
    }
  };

  const onKeyup = (e) => {
    if (e.keyCode === 13) {
      inputChange();
    }
  };

  const backToday = () => {
    const newYear = new Date().getFullYear();
    const newMonth = new Date().getMonth();
    const newDate = new Date().getDate();
    changeValue(newYear, newMonth + 1, newDate);
  };

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const listItems = days.map((day, index) => (
    <li key={index}>{day}</li>
  ));

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const firstDay = new Date(year, month).getDay();
  const dates = [];

  for (let i = 1; i <= 42; i++) {
    dates.push(new Date(year, month, i - firstDay));
  }

  const listDates = dates.map((date, index) => (
    <li
      key={index}
      className={classes(date)}
      data-year={date.getFullYear().toString()}
      data-month={date.getMonth().toString()}
      onClick={changeDate}
    >
      {date.getDate()}
    </li>
  ));

  const input = (
    <input
      className="yearInput"
      type="number"
      min="1900"
      max="2999"
      value={year}
      onKeyUp={onKeyup}
      onBlur={inputChange}
    />
  );

  return (
    <div className="wrapper">
      <input className="dateInput" placeholder="点击选择日期" />
      <button className="back" onClick={backToday}>Today</button>
      <div className="main">
        <div className="header">
          <div className="monthAndYear">
            <span>{months[month]} </span>
            <span className="changeYear" onClick={changeYear}>
              {change === "static" ? year : input}
            </span>
          </div>
          <div className="changeMonth">
            <span className="prevMonth" onClick={prevMonth}> {'<'} </span>
            <span className="nextMonth" onClick={nextMonth}> {'>'} </span>
          </div>
        </div>
        <div className="content">
          <ul className="nav">{listItems}</ul>
          <ul className="dates">{listDates}</ul>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
