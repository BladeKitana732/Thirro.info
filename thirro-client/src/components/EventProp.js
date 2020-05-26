import React from 'react';

export default function EventProp(props) {
  return (
    <div>
      <h2>Event: {props.name}</h2>
      <h4>Location: {props.location}</h4>
      <h4>Date: {props.date}</h4>
      <p>About Event: {props.summary}</p>
    </div>
  )
}

//also referenced https://github.com/BladeKitana732/Covid-Tracker