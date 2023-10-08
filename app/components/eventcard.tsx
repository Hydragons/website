import {Event} from '../helper/interfaces'

export default function EventCard(eventDetails: Event){
    return (
      <div className="flow-root ml-3">
        <div className="float-left m-2">
          <h1 className="text-2xl font-light text-udemBlue">{eventDetails.date.getDate()}</h1>
          <h1 className="text-lg font-light">{eventDetails.date.toLocaleString('fr-FR', {month: 'long' }).slice(0,3)}</h1>
        </div>
        <div className="float-left m-2">
          <h1 className="text-2xl font-light">{eventDetails.title}</h1>
        </div>
      </div>
    )
   }