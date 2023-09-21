'use client';
import {EventsContent, Event} from '../helper/interfaces'
import { getEventCard, getThisWeekEventCard, getNextWeekEventCard } from './eventsmanager';

function TimeSelector() {
  function print(timeRange:string) {
      console.log(`${timeRange}`)
  }
  const WEEK = "this week";
  const NEXT_WEEK = "next week";
  const MONTH = "this month";
  const NEXT_MONTH = "next month";
  const ALL = "all";
  
  const timeRanges: string[] = [WEEK, NEXT_WEEK, MONTH, NEXT_MONTH, ALL]
  
  const timeCards = timeRanges.map((timeRange, index) => (
      <div onClick={() => print(timeRange)} key={index} className="text-lg font-medium select-none cursor-pointer float-left m-2 border border-gray-400 rounded-full p-2 hover:bg-gray-100 active:bg-blue-50 active:text-blue-700 focus:outline-none focus:ring focus:ring-purple-300 ...">
        {timeRange}</div>
  ));

  return (
  <div className="flow-root">
      {timeCards}
  </div>
  )
}

export default function EventsComponent(events: EventsContent) {
    
    const allEvents = getEventCard(events.events)
    // const eventCards = events.events.map((event, index) => (
    //   <EventCard title={event.title} date={event.date}></EventCard>
    // ));

    const weekEvents = getThisWeekEventCard(events.events)

    const nextWeekEvents = getNextWeekEventCard(events.events)

     return (
           <div>
              <TimeSelector></TimeSelector>
              {/* {weekEvents} */}
              {/* {nextWeekEvents} */}
              {/* {allEvents} */}
              {/* 
              {monthEvents}
              {nextMonthEvents} */}
           </div>
          )
  }
