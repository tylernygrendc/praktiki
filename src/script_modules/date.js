import { object } from "firebase-functions/v1/storage";
import * as error from "./error.js"

const dayNames = {
    en: {
        full: [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday],
        abbr: [Mon, Tue, Wed, Thu, Fri, Sat, Sun]
    }
}

const monthNames = {
    en: {
        full: [January, February, March, April, May, June, July, August, September, October, November, December],
        abbr: [Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec]
    }
}


// function that returns the number of days in any given month
function daysIn(month = new Date().getMonth()){
    try{
        if(typeof month === "number"){
            const year = new Date().getFullYear();
            const exception = year % 4 === 0 && year % 100 != 0 || year % 4 === 0 && year % 400 === 0 ? 29 : 28;
            const monthDays = [31, exception, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            return monthDays[month];
        } else {
            throw new Error(`Function daysIn() requires parameter type of "number". Try passing new Date(year, month).getMonth().`)
        }
    } 
    catch(err) {
        error.handle(err);
    }
}

function decrementMonth(date) {
    try {
        if(typeof month === "object"){
            let month = date.getMonth();
            let year = date.getFullYear();
            if (currentMonth === 0) {
                month=11;
                --year;
            } else {
                --month;
            }
            return new Date(year, month);
        }
    }
    catch (err) {
        error.handle(err);
    }
}

// function that returns the days of given month
function getMonthArray(date = new Date()){
    try {
        if(typeof date === "object"){
            let year = date.getFullYear(),
                month = date.getMonth();

            let firstDay = new Date(year, month).getDay(),
                daysInLastMonth = daysIn(month-1),
                array=[];
            for (let i = firstDay; i > 0; --i) array.unshift(daysInLastMonth--);
            for (let i = 0; i < daysIn(month); ++i) array.push(i);

            let daysOfNextMonth = 42 - array.length;
            for (let i = 0; i < daysOfNextMonth; ++i) array.push(i);

            return array;
        } else {
            throw new Error(`Function getCalendarArrayFor() requires parameter type of "object". Try passing new Date().`)    
        }
    }
    catch(err){
        error.handle(err);
    }
}

function getWeekArray(date){
    try{
        let match = date.getDate(),
        firstDay = new Date(date.getFullYear(), date.getMonth()).getDate(),
        monthArray = getMonthArray(date),
        start = 0;
        for (let i = firstDay; i < monthArray.length; i++) {
            if(monthArray[i] === match) {
                start = Math.floor(i / 7);
                end = start + 7;
                break;
            }
        }
        return monthArray.slice(start, end);
    }
    catch (err) {
        error.handle(err);
    }
}

function incrementMonth(date) {
    try {
        if(typeof month === "object"){
            let month = date.getMonth();
            let year = date.getFullYear();
            if (currentMonth === 11) {
                month=0;
                ++year;
            } else {
                ++month;
            }
            return new Date(year, month);
        } else {
            throw new Error(`Function decrementMonth() requires parameter type of "object". Try passing new Date().`);
        }
    }
    catch (err) {
        error.handle(err);
    }
}

export { dayNames, monthNames };
export const daysIn = daysIn(); 
export const decrementMonth = decrementMonth();
export const getMonthArray = getMonthArray();
export const getWeekArray = getWeekArray();
export const incrementMonth = incrementMonth();
