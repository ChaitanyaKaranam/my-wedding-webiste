import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loader from '../Loader';

export default function ImageCard({ src, alt }) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <div className='card'>
            {!isImageLoaded && <Loader />}
            <LazyLoadImage
                width='100%'
                height='100%'
                src={src}
                alt={alt}
                effect='blur'
                afterLoad={() => {
                    setIsImageLoaded(true);
                }}
            />
        </div>
    );
}
