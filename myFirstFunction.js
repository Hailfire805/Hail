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
    "Paid Date": "April 8th, 2021",
    "Start Date": "August, 19th, 2020",
    "Start Month": 08,
    "Start Day": 19,
    "Start Year": 2020
};
function getTimeEmployed() {
    if (dateToday.Employer == mostRecentdateHired.Employer) {
        var years = 0;
        if (dateToday.Year == mostRecentdateHired["Start Year"]) {
                years = 0;
            } else {
                years = dateToday.Year - mostRecentdateHired["Start Year"];
            };
        var months = 0; 
        if (dateToday.Month < mostRecentdateHired["Start Month"] && dateToday.Year - mostRecentdateHired["Start Year"] == 1) {
                months = dateToday.Month - mostRecentdateHired["Start Month"] + 12;
            } else if (dateToday.Month < mostRecentdateHired["Start Month"]) {
                years = years - 1;
                months = dateToday.Month - mostRecentdateHired["Start Month"] + 12;
            } else {
                months = dateToday.Month - mostRecentdateHired["Start Month"];
            };
        var days = 0;
        if (dateToday.Day < mostRecentdateHired["Start Day"]) {
                months = months - 1;
                days = dateToday.Day - mostRecentdateHired["Start Day"] + 30;
            } else {
                days = dateToday.Day - mostRecentdateHired["Start Day"];
            };
        let employmentDuration = "Time employed by " + dateToday.Employer + ": " + years + " Years " + months + " Months " + days + " Days";
            return employmentDuration;
        } else {
            return "Unemployed";
    };
};


const me = {
    "Name": "Brad",
    "Age": 25,
    "Occupations": [
        ["      1. [Completed: Internal Community Server Guru, ", 0],
        ["      2. [Completed: Video Recording Artist,         ","18 to 20"],
        ["      3. [On-Hold: Remote Team Manager,              ","20 to 25"],
        ["      4. [On-Hold: Lead Video Editor,                ", 40],
        ["      5. [Active: Junior Research Assistant,         ","25 to 40"],
        ["      6. [Active: Technical Manager,                 ", 40]
    ],
    "Employer": "Facecheck",
    "Tenure": mostRecentdateHired["Start Date"] + " - " + dateToday["Current Date"],
    "Paid Time": mostRecentdateHired["Paid Date"] + " - " + dateToday["Current Date"]
};


if (dateToday.Employer == mostRecentdateHired.Employer) {
    let employmentStatus = "Employed";
    console.log("Employment Status: " + employmentStatus);
    console.log("Employer: " + dateToday.Employer);
    console.log("  " + getTimeEmployed());
    console.log("    Dates Employed: " + me.Tenure);
    console.log("    Dates Paid: " + me["Paid Time"])
    console.log("      Jobs: ");
    for (let i = 0, x = me["Occupations"].length; i < x; i++) {
        let jobTitle = me["Occupations"][i].shift();
        let payRate =" Rate: $" + me["Occupations"][i].shift() + "/Hr";
        console.log("   " + jobTitle + " " + payRate + "]");
    };
};