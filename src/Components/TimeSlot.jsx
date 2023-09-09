import React, { useState, useEffect } from 'react';

function TimeSlot({ selectedDate }) {
  const [timeIntervals, setTimeIntervals] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState(null);

  useEffect(() => {
    const currentTime = new Date();

    const startTime = new Date();
    startTime.setHours(9, 0, 0, 0); // 9:00 AM

    const endTime = new Date();
    endTime.setHours(22, 0, 0, 0); // 10:00 PM

    const intervals = [];

    let currentTimeSlot = new Date(startTime);

    while (currentTimeSlot <= endTime) {
      const formattedTime = currentTimeSlot.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });

      // Compare selectedDate with today's date
      const isToday = selectedDate.toDateString() === currentTime.toDateString();

      // Check if the time slot is in the past and it's today's date
      const isPast = isToday && currentTimeSlot < currentTime;

      intervals.push({
        time: formattedTime,
        isPast: isPast,
      });

      currentTimeSlot.setHours(currentTimeSlot.getHours() + 1);
    }

    setTimeIntervals(intervals);
  }, [selectedDate]);

  const handleIntervalClick = (index) => {
    if (!timeIntervals[index].isPast) {
      setSelectedInterval(index);
    }
  };

  return (
    <div className='mt-14'>
      <h1 className='text-xl font-semibold my-8'>Select Time</h1>
      <div className='grid md:grid-cols-5 grid-cols-2 gap-8'>
        {timeIntervals.map((timeInterval, index) => (
          <p
            className={`border-2 rounded-md p-2 cursor-pointer duration-300 ${
              selectedInterval === index
                ? 'bg-blue-500 text-white'
                : timeInterval.isPast
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'hover:bg-blue-500 hover:text-white'
            }`}
            key={index}
            onClick={() => {
              handleIntervalClick(index);
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
