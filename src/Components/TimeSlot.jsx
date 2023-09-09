import React, { useState, useEffect } from 'react';

function TimeSlot() {
  const [timeIntervals, setTimeIntervals] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState(null);

  const handleIntervalClick = (index) => {
    setSelectedInterval(index);
  };


  useEffect(() => {
    // Define start and end times
    const startTime = new Date();
    startTime.setHours(9, 0, 0, 0); // 9:00 AM

    const endTime = new Date();
    endTime.setHours(22, 0, 0, 0); // 10:00 PM

    // Initialize an empty array to store the time intervals
    const intervals = [];

    // Loop through the intervals and add them to the array
    let currentTime = new Date(startTime);

    while (currentTime <= endTime) {
      const formattedTime = currentTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      intervals.push(formattedTime);
      currentTime.setHours(currentTime.getHours() + 1);
    }

    // Set the time intervals in the component's state
    setTimeIntervals(intervals);
  }, []);

  return (
    <div className='mt-14'>
      <h1 className='text-xl font-semibold my-2'>Select Time</h1>
      <div className='grid grid-cols-5 gap-8'>
      {timeIntervals.map((timeInterval, index) => (
        <p
          className={`border-2 rounded-md p-2 cursor-pointer duration-300 ${
            selectedInterval === index ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
          }`}
          key={index}
          onClick={() => handleIntervalClick(index)}
        >
          {timeInterval}
        </p>
      ))}
    </div>
    </div>
  );
}

export default TimeSlot;
