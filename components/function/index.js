export const standardDate = dat => {
    try{
        let issueResolver = dat.split("-");
        if (issueResolver[1] === "01" && issueResolver[2] === "01") {
            dat = issueResolver[0] + "-01-02";
        }
    }catch(e){

    }
    const date = new Date(dat);
    const newDate = new Date(date);
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const daysHalf = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    const months = [
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
        "December"
    ];
    const monthsHalf = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    let time = formatAMPM(newDate);
    let hours12 = newDate.toLocaleString("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        hour12: true
    });
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let dayName = days[newDate.getDay()];
    let dayNameHalf = daysHalf[newDate.getDay()];
    let dateNumber = ("0" + newDate.getDate()).slice(-2);
    let monthName = months[newDate.getMonth()];
    let monthNameHalf = monthsHalf[newDate.getMonth()];
    let monthNumber = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let fullYear = newDate.getFullYear();
    let standardDate = monthNumber + "/" + dateNumber + "/" + fullYear;
    let standardDateRe =   + fullYear + "-" + monthNumber + "-" + dateNumber;
    return {
        standardDate: standardDate,
        time: time,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        hours12: hours12,
        dayName: dayName,
        dayNameHalf: dayNameHalf,
        dateNumber: dateNumber,
        monthName: monthName,
        monthNameHalf: monthNameHalf,
        monthNumber: monthNumber,
        fullYear: fullYear+"",
        standardDateRe
    };
};

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return (hours + ":" + minutes + " " + ampm);
}

export const formatAMPMTime = (date) =>  {
    if(date){
        let hours = parseInt(date.substring(0, 2));
        let minutes = parseInt(date.substring(3, 5));
        let ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        return (hours + ":" + minutes + " " + ampm);
    } else {
        return "-";
    }
}

export const  tConvert = (time) =>  {
    // Check correct time format and split into components
    if(time){
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice (1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
    } else {
        return "";
    }
};

export const getWindowHeight = () => {
    const { innerHeight: height } = window;
    return height;
}