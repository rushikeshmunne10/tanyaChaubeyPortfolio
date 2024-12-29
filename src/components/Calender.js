"use client"
import { useState } from 'react';

const Calendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const generateCalendar = () => {
    const daysInMonth = new Date(2024, 1, 0).getDate(); // Get the number of days in the current month
    let days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
    onDateSelect(day); // Trigger the callback to set the selected date in the parent
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-7 gap-2">
        {generateCalendar().map((day, index) => (
          <div
            key={index}
            className="p-3 text-center cursor-pointer hover:bg-gray-200 rounded-lg"
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
      {selectedDate && (
        <div className="text-center mt-4">
          <p className="text-xl">You selected {selectedDate}</p>
        </div>
      )}
    </div>
  );
};

export default Calendar;
