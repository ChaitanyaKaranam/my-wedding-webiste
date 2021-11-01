import React from 'react';

export default function WeddingEvent({ event, date, eventText }) {
    return (
        <div>
            <article className='wd-event'>
                <h3>{event}</h3>
                {date && <h2>{date}</h2>}
                <span>{eventText}</span>
            </article>
        </div>
    );
}
