"use client";

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Helper functions
  const getMonthName = (monthIndex) => {
    const date = new Date(currentDate.getFullYear(), monthIndex, 1);
    return date.toLocaleString("default", { month: "long" });
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDay = (year, month) => {
    return new Date(year, month, 1).getDay(); // 0 (Sunday) to 6 (Saturday)
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonth = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() - 1,
        1
      );
      return prevMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonth = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + 1,
        1
      );
      return nextMonth;
    });
  };

  const handleDateClick = (day, isCurrentMonth) => {
    if (isCurrentMonth) {
      setSelectedDate(new Date(year, month, day));
    }
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = getMonthName(month);
  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getStartDay(year, month);

  // Previous month details
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

  // Next month details
  // const nextMonth = month === 11 ? 0 : month + 1;
  // const nextYear = month === 11 ? year + 1 : year;

  // Calculate days to show from previous month
  const prevMonthDays = [];
  for (let i = startDay - 1; i >= 0; i--) {
    prevMonthDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
    });
  }

  // Calculate days to show from next month
  const totalCells = prevMonthDays.length + daysInMonth;
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  const nextMonthDays = [];
  for (let i = 1; i <= remainingCells; i++) {
    nextMonthDays.push({
      day: i,
      isCurrentMonth: false,
    });
  }

  // Generate calendar days
  const calendarDays = [
    ...prevMonthDays,
    ...Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      isCurrentMonth: true,
    })),
    ...nextMonthDays,
  ];

  // Get today's date for highlighting
  const today = new Date();
  const isCurrentMonthToday =
    today.getMonth() === month && today.getFullYear() === year;
  const todayDate = isCurrentMonthToday ? today.getDate() : null;

  // Colors for selected date
  const selectedBgColor = "#FFF6ED";
  const selectedBorderColor = "#F36611";

  return (
    <div className="bg-white rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        {/* Month and Year */}
        <h2 className="text-xl font-semibold">
          {monthName} {year}
        </h2>
        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button
            onClick={handlePrevMonth}
            className="p-2 text-gray-600 hover:text-gray-800"
            aria-label="Previous Month"
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 text-gray-600 hover:text-gray-800"
            aria-label="Next Month"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-2 mb-2 text-center font-medium text-gray-700">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-sm">
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((dayObj) => {
          const { day, isCurrentMonth } = dayObj;

          const isToday = isCurrentMonth && day === todayDate;
          const isSelected =
            isCurrentMonth &&
            selectedDate &&
            day === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear();

          return (
            <div
              key={`${year}-${month}-${day}-${
                isCurrentMonth ? "current" : "other"
              }`}
              onClick={() => handleDateClick(day, isCurrentMonth)}
              className={`p-2 text-center cursor-pointer rounded-lg text-sm
                ${
                  isCurrentMonth
                    ? isToday
                      ? "bg-blue-100"
                      : "hover:bg-blue-100"
                    : "bg-[#F2F3F7] text-[#A8A8A8] cursor-default "
                }
                ${isSelected ? "border-2" : ""}
              `}
              style={
                isSelected
                  ? {
                      borderColor: selectedBorderColor,
                      backgroundColor: selectedBgColor,
                    }
                  : {}
              }
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Selected Date Display */}
      {selectedDate && (
        <div className="mt-4 text-textBlack text-center text-sm font-medium">
          Selected Date:{" "}
          <span className="text-headingBlack">
            {selectedDate.toDateString()}
          </span>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
