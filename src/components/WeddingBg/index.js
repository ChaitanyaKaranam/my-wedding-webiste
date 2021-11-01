import React from 'react';

export default function WeddingBG({ children }) {
    return (
        <div className='wd-details'>
            {/* <img src='/images/background/fancy-bg.svg' alt='background' /> */}
            <div className='wd-children'>{children}</div>
        </div>
    );
}
