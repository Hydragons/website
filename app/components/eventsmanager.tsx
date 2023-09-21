import {Event} from '../helper/interfaces'
import EventCard from './eventcard';

function areDatesInSameWeek(date1: Date, date2: Date): boolean {
    // Get the week number and year for each date
    const weekNumber1 = getWeekNumber(date1);
    const year1 = date1.getFullYear();
    const weekNumber2 = getWeekNumber(date2);
    const year2 = date2.getFullYear();
    
    console.log(`year 1: ${year1} year2: ${year2}`)
    console.log(`week 1: ${weekNumber1} week2: ${weekNumber2}`)
    // Check if the week numbers and years are the same
    return weekNumber1 === weekNumber2 && year1 === year2;
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

export function getThisWeekEventCard(events: Event[]): JSX.Element[] {
  return getEventCard(getThisWeekEvents(events))
}

export function getEventCard(events: Event[]): JSX.Element[] {
  var element = events.map((event, index) => (
    <EventCard title={event.title} date={event.date}></EventCard>
  ));
  return element;
}
