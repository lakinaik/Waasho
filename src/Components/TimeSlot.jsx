import React, { useState, useEffect } from 'react';
import { TimeSlots } from '../Timeslots'; // Make sure to import your time slots data or module here

function TimeSlot({ selectedDate, onTimeSelect }) {
  const [timeIntervals, setTimeIntervals] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState(null);

  useEffect(() => {
   
    const timeSlotsData = TimeSlots.map(time => ({
      time,
      isPast: isPastTime(time), // Implement isPastTime function
    }));
    setTimeIntervals(timeSlotsData);
  }, []);

  const handleIntervalClick = (timeInterval) => {
    if (!timeInterval.isPast) {
      setSelectedInterval(timeInterval);
      // onTimeSelect(timeInterval.time);
    }
  };

  const isPastTime = (time) => {
    
    const currentTime = new Date();
    const selectedTime = new Date(selectedDate + ' ' + time); // Combine selectedDate and time
    return selectedTime < currentTime;
  };

  return (
    <div className='mt-14'>
      <h1 className='text-xl font-semibold my-8'>Select Time</h1>
      <div className='grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {timeIntervals.map((timeInterval, index) => (
          <p
            className={`border-2 rounded-md p-2 cursor-pointer duration-300 ${
              selectedInterval === timeInterval
                ? 'bg-blue-500 text-white'
                : timeInterval.isPast
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'hover:bg-blue-500 hover:text-white'
            }`}
            key={index}
            onClick={() => {
              handleIntervalClick(timeInterval);
              onTimeSelect(timeInterval.time)
            }}
          >
            {timeInterval.time}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TimeSlot;
