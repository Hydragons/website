'use client';
import {EventsContent} from '../helper/interfaces'
import { getThisWeekEventCard, getNextWeekEventCard, getThisMonthEventCard, getNextMonthEventCard, getAllEventCard } from './eventsmanager';
import React, { useState } from 'react'; // Import React and useState

export default function EventsComponent(events: EventsContent) {
  function TimeSelector() {
    interface timeRangeSelector {
      label: string;
      getTimeRangeCard: () => void;
    }
  
    function print(timeRange:string) {
        console.log(`${timeRange}`)
    }
  
    const WEEK = "Cette semaine";
    const NEXT_WEEK = "La semaine prochaine";
    const MONTH = "Ce mois-ci";
    const NEXT_MONTH = "Le mois prochain";
    const ALL = "Tout";
    
    const timeRanges: timeRangeSelector[] = [
      {
        label: WEEK, 
        getTimeRangeCard: () => {
          renderThisWeekEvents()
        }
      },
      {
        label: NEXT_WEEK, 
        getTimeRangeCard: () => {
          renderNextWeekEvents();
        }
      },
      {
        label: MONTH, 
        getTimeRangeCard: () => {
          renderThisMonthEvents();
        }
      },
      {
        label: NEXT_MONTH, 
        getTimeRangeCard: () => {
          renderNextMonthEvents();
        }
      },
      {
        label: ALL, 
        getTimeRangeCard: () => {
          renderAllEvents();
        }
      },
    ]
    
    const timeCards = timeRanges.map(({label, getTimeRangeCard}, index) => (
        <div onClick={() => getTimeRangeCard()} key={index} className="text-lg font-medium select-none cursor-pointer float-left m-2 border border-gray-400 rounded-full p-2 hover:bg-gray-100 active:bg-blue-50 active:text-blue-700 focus:outline-none focus:ring focus:ring-purple-300 ...">
          {label}</div>
    ));
  
    return (
    <div className="flow-root">
        {timeCards}
    </div>
    )
  }
    var displayedEvents: JSX.Element[] = [];

    const weekEvents = getThisWeekEventCard(events.events)

    const nextWeekEvents = getNextWeekEventCard(events.events)

    const thisMonthEvents = getThisMonthEventCard(events.events)

    const nextMonthEvents = getNextMonthEventCard(events.events)

    const allEvents = getAllEventCard(events.events)

    const possibleEvents = [weekEvents, nextWeekEvents, thisMonthEvents, nextMonthEvents, allEvents]

    
    const [indexToDisplay, setIndexToDisplay] = useState(0); // Initialize indexToDisplay with state
    function renderThisWeekEvents() {
      setIndexToDisplay(0);
      console.log(indexToDisplay);
    }

    function renderNextWeekEvents() {
      setIndexToDisplay(1);
      console.log(indexToDisplay);
    }

    function renderThisMonthEvents() {
      setIndexToDisplay(2);
      console.log(indexToDisplay);
    }

    function renderNextMonthEvents() {
      setIndexToDisplay(3);
      console.log(indexToDisplay);
    }

    function renderAllEvents() {
      setIndexToDisplay(4);
      console.log(indexToDisplay);
    }


     return (
           <div className="pb-2">
              <TimeSelector></TimeSelector>
              {possibleEvents[indexToDisplay].length < 1 ? (
              <h1 className="text-xl">Aucun événement</h1>
            ) : (
              possibleEvents[indexToDisplay]
            )}
           </div>
          )
  }
