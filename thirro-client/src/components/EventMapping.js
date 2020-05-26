import React from 'react';
import EventProp from './EventProp';

export default function EventMapping(props) {

  return (
    <div>

      {props.events.map(event => <EventProp 
      name= {event.event_name}
      location= {event.event_location}
      date= {event.event_date}
      summary= {event.event_summary}  
      />
      )}

    </div>
  )
}