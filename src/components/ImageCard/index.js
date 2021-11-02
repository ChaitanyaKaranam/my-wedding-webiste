import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ImageCard({ src, alt }) {
    return (
        <div className='card'>
            <LazyLoadImage
                width='100%'
                height='100%'
                src={src}
                alt={alt}
                effect='blur'
            />
        </div>
    );
}
