import React from 'react';

export default function ReviewProp(props) {
  return (
    <div>
      <h2>Name: {props.username}</h2>
      <h4>Message: {props.message}</h4>
    </div>
  )
}
