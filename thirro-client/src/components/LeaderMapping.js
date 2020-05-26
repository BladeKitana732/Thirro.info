import React from 'react';
import LeaderProps from './LeaderProps';

export default function LeaderMapping(props) {
    return (
        <div>
            
            {props.leader.map(devLeader => <LeaderProps 
            name= {devLeader.speaker_name}
            aboutSpeaker= {devLeader.about_speaker}
            />
            )}

        </div>
    )
}
