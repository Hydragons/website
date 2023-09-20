'use client';
interface EventsContent {
    events: Event[]
 }

 export interface Event {
  title: string;
  date: Date;
 }

 function EventCard(eventDetails: Event){
  return (
    <div className="flow-root">
      <div className="float-left m-2">
        <h1 className="text-2xl">{eventDetails.date.getDate()}</h1>
        <h1 className="text-lg">{eventDetails.date.toLocaleString('default', { month: 'long' }).slice(0,3)}</h1>
      </div>
      <h1 className="float-left m-2 text-3xl">{eventDetails.title}</h1>
    </div>
  )
 }

 export default function EventsComponent(events: EventsContent) {

    function print(timeRange:string) {
        console.log(`${timeRange}`)
    }

    const TODAY = "today";
    const WEEK = "this week";
    const NEXT_WEEK = "next week";
    const MONTH = "this month";
    const NEXT_MONTH = "next month";
    const ALL = "all";

    const timeRanges: string[] = [TODAY, WEEK, NEXT_WEEK, MONTH, NEXT_MONTH, ALL]

    const timeCards = timeRanges.map((timeRange, index) => (
        <div onClick={() => print(timeRange)} key={index} className="text-lg font-medium float-left m-2 border border-gray-400 rounded-full p-2 hover:bg-gray-200 active:bg-blue-50 active:text-blue-700 focus:outline-none focus:ring focus:ring-purple-300 ...">
          {timeRange}</div>
      ));

    const eventCards = events.events.map((event, index) => (
      <EventCard title={event.title} date={event.date}></EventCard>
    ));

     return (
           <div>
              <div className="flow-root">
                  {timeCards}
              </div>
              {eventCards}
           </div>
          )
  }
