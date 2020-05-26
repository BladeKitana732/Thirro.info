import React from 'react'

export default function LeaderProps(props) {
    return (
        <div>
            <h2>DevLeader: {props.name}</h2>
            <h3>About Leader:</h3>
            <p>{props.aboutSpeaker}</p>
        </div>
    )
}
