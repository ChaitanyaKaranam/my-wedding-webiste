import React from 'react';

export default function ImageCard({ src, alt }) {
    return (
        <div className='card'>
            <img src={src} alt={alt} />
        </div>
    );
}
