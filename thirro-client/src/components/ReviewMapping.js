import React from 'react';
import ReviewProp from './ReviewProp';

export default function ReviewMapping(props) {

  return (
    <div>

      {props.messages.map(message => <ReviewProp 
      username= {message.username}
      message= {message.message}
      />
      )}

    </div>
  )
}
