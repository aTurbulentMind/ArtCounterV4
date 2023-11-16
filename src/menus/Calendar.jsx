// Import React and necessary styles
import React from 'react';

// Define the Calendar component
export default function Calen() {
    // Get the current date
    const currentDate = new Date();
    
    // Get the current month (adding 1 because months are zero-indexed)
    const currentMonth = currentDate.getMonth() + 1;

    // Array of month names
    const monthNames = [
        '',
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get the name of the current month
    const currentMonthName = monthNames[currentMonth];

    // Calculate the current day of the year
    const currentDayOfYear = Math.ceil((currentDate - new Date(currentDate.getFullYear(), 0, 1)) / (24 * 60 * 60 * 1000));

    // Calculate the current day of the month
    const currentDayOfMonth = new Date(currentDate.getFullYear(), 0, currentDayOfYear).getDate();

    // Return the JSX for the Scheduler component
    return (
        <div className="Scheduler">
            {/* Display the current date */}
            <div className="CurrentDate">
                Today is {currentMonthName} {currentDayOfMonth}
            </div>
            
            {/* Text for scheduling */}
            <div className="revText">
                Please select a preferred date for a consultation to discuss your project requirements. 
                Feel free to provide any additional comments or details that may assist us in preparing for our meeting. 
                Your input is greatly appreciated, and we look forward to the opportunity to collaborate on your dream.
            </div>

            {/* Dropzone for scheduling details */}
            <div className="dropzone">
                {/* Box for date, time, email, and phone input */}
                <div className="box">
                    {/* Label and input for date */}
                    <label htmlFor="date">Set a meeting:</label>
                    <input type="date" name="comp" id="comp" required />

                    {/* Input for time */}
                    <input type="time" name="comp" id="comp" required />

                    {/* Input for email */}
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="comp" id="comp" required />

                    {/* Input for phone */}
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" name="comp" id="comp" required />
                </div>

                {/* Box for comments or questions */}
                <div className="box">
                    <label htmlFor="mes">Comments or Questions:</label>
                    <textarea id="mes" required />
                </div>

                <br/> <br/>

                {/* Submit button */}
                <button type="submit">Submit</button>
            </div>
        </div>
    );
}
