import React from 'react';
////////////

export default function Calen() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;

    // Array of month names
    const monthNames = [ '',
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

    // Get the month name
    const currentMonthName = monthNames[currentMonth];

    const currentDayOfYear = Math.ceil((currentDate - new Date(currentDate.getFullYear(), 0, 1)) / (24 * 60 * 60 * 1000));

    const currentDayOfMonth = new Date(currentDate.getFullYear(), 0, currentDayOfYear).getDate();

    return (
        <div className="Scheduler">
            <div className="CurrentDate">
                Today is {currentMonthName}  {currentDayOfMonth}
            </div>
            <div className="revText">
            Please select a preferred date for a consultation to discuss your project requirements. Feel free to provide any additional comments or details that may assist us in preparing for our meeting. Your input is greatly appreciated, and we look forward to the opportunity to collaborate on your dream.
            </div>
            <div className="dropzone">
                <div className="box">
					<label htmlFor="date" /> 
				        Set a meeting:<input type="date" name="comp" id="comp"  required />

				        <input type="time" name="comp" id="comp"  required />

				        Email:<input type="email" name="comp" id="comp"  required />

				        Phone:<input type="phone" name="comp" id="comp"  required />
                </div>

                <div className="box">
					<label htmlFor="date"  />



					<label htmlFor="mes">Comments or Questions: </label>
					<textarea id="mes" required />
                </div>

        <br/> <br/>
			<button type="submit">Submit</button>

            </div>
    </div>
    );
}

{/*

*/}