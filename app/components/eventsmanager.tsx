import {Event} from '../helper/interfaces'
import EventCard from './eventcard';

function areDatesInSameWeek(date1: Date, date2: Date): boolean {
    // Get the week number and year for each date
    const weekNumber1 = getWeekNumber(date1);
    const year1 = date1.getFullYear();
    const weekNumber2 = getWeekNumber(date2);
    const year2 = date2.getFullYear();
    
    // Check if the week numbers and years are the same
    return weekNumber1 === weekNumber2 && year1 === year2;
}

function isSecondDateOneWeekLater(date1: Date, date2:Date): boolean {
    // Get the week number and year for each date
    const weekNumber1 = getWeekNumber(date1);
    const year1 = date1.getFullYear();
    const weekNumber2 = getWeekNumber(date2);
    const year2 = date2.getFullYear();
    
    // Check if the week numbers and years are the same
    return (weekNumber1 + 1 === weekNumber2 && year1 === year2) || (weekNumber1 === 52 && weekNumber2 === 1 && year1 + 1 === year2);
}

function areDatesInSameMonth(date1: Date, date2: Date): boolean {
    // Get the week number and year for each date
    const month1 = date1.getMonth();
    const year1 = date1.getFullYear();
    const month2 = date2.getMonth();
    const year2 = date2.getFullYear();
    
    // Check if the week numbers and years are the same
    return month1 === month2 && year1 === year2;
}

function isSecondDateNextMonth(date1: Date, date2: Date): boolean {
    // Get the week number and year for each date
    const month1 = date1.getMonth();
    const year1 = date1.getFullYear();
    const month2 = date2.getMonth();
    const year2 = date2.getFullYear();
    
    // Check if the week numbers and years are the same
    return (month1 + 1 === month2 && year1 === year2) || (month1 === 12 && month2 === 1 && year1 + 1 === year2);
}
  
// Helper function to get the ISO week number of a date
function getWeekNumber(date: Date): number {
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date.getTime() - yearStart.getTime()) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + 1 + yearStart.getDay()) / 7);
}

function getThisWeekEvents(events:Event[]): Event[] {
  var today = new Date();
  var weekEvents = [];
  for(let event of events){
    if(areDatesInSameWeek(today, event.date))
      weekEvents.push(event)
  }
  return weekEvents
}

function getNextWeekEvents(events:Event[]): Event[] {
  var today = new Date();
  var returnEvents = [];
  for(let event of events){
    if(isSecondDateOneWeekLater(today, event.date))
      returnEvents.push(event)
  }
  return returnEvents
}

function getThisMonthEvents(events:Event[]): Event[] {
    var today = new Date();
    var returnEvents = [];
    for(let event of events){
      if(areDatesInSameMonth(today, event.date))
        returnEvents.push(event)
    }
    return returnEvents
}

function getNextMonthEvents(events:Event[]): Event[] {
    var today = new Date();
    var returnEvents = [];
    for(let event of events){
      if(isSecondDateNextMonth(today, event.date))
        returnEvents.push(event);
    }
    return returnEvents;
}

export function getThisWeekEventCard(events: Event[]): JSX.Element[] {
  return getEventCard(getThisWeekEvents(events));
}

export function getNextWeekEventCard(events: Event[]): JSX.Element[] {
    return getEventCard(getNextWeekEvents(events));
}

export function getThisMonthEventCard(events: Event[]): JSX.Element[] {
    return getEventCard(getThisMonthEvents(events));
}

export function getNextMonthEventCard(events: Event[]): JSX.Element[] {
    return getEventCard(getNextMonthEvents(events));
}

export function getAllEventCard(events: Event[]): JSX.Element[] {
    return getEventCard(events);
}

function getEventCard(events: Event[]): JSX.Element[] {
  var element = events.map((event, index) => (
    <EventCard key={index} title={event.title} date={event.date}></EventCard>
  ));
  return element;
}
