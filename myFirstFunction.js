let dateToday = {
    "Employer": "Facecheck",
    "Month": 03,
    "Day": 28,
    "Year": 2022,
    "Current Date": "March 28th, 2022"
};
const mostRecentdateHired = {
    "Employer": "Facecheck",
    "Month": 04,
    "Day": 08,
    "Year": 2021,
    "Hire Date": "April 8th, 2021"
};
function getTimeEmployed() {
    if (dateToday.Employer == mostRecentdateHired.Employer) {
        var years = 0;
        if (dateToday.Year == mostRecentdateHired.Year) {
            years = 0;
        } else {
            dateToday.Year - mostRecentdateHired.Year;
        };
        var months = 0; 
        if (dateToday.Month < mostRecentdateHired.Month && dateToday.Year - mostRecentdateHired.Year == 1) {
            months = dateToday.Month - mostRecentdateHired.Month + 12;
        } else if (dateToday.Month < mostRecentdateHired.Month) {
            years = years - 1;
            months = dateToday.Month - mostRecentdateHired.Month + 12;
        } else {
            months = dateToday.Month - mostRecentdateHired.Month;
        };
        var days = 0;
        if (dateToday.Day < mostRecentdateHired.Day) {
            months = months - 1;
            days = dateToday.Day - mostRecentdateHired.Day + 30;
        } else {
            days = dateToday.Day - mostRecentdateHired.Day;
        };
        let employmentDuration = "Time employed by " + dateToday.Employer + ": " + years + " Years " + months + " Months " + days + " Days";
        return employmentDuration;
    } else {
        return "Unemployed";
    };
};
console.log(getTimeEmployed());

let me = {
    "Name": "Brad",
    "Age": 25,
    "Occupation": "Software Developer",
    "Employer": "Facecheck",
    "Tenure": mostRecentdateHired["Hire Date"] + " - " + dateToday["Current Date"]
}

console.log(me.Tenure);
