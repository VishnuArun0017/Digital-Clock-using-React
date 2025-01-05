import React, { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    
    // Use useEffect to update the time every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());  // Update the time every second
        }, 1000);
        
        // Cleanup interval on component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, []);  // Empty dependency array means it runs once when the component mounts

    // Function to format time in 12-hour format with AM/PM
    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours >= 12 ? "PM" : "AM";
        
        hours = hours % 12 || 12;  // Convert 24-hour format to 12-hour format
        
        return `${pz(hours)}:${pz(minutes)}:${pz(seconds)} ${meridian}`;  // Return formatted time
    }

    // Function to add leading zero to numbers less than 10
    function pz(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className="clockCont">
            <div className="clock">
                <span>{formatTime()}</span>  {/* Display the formatted time */}
            </div>
        </div>
    );
}

export default DigitalClock;