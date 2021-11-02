import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import ImageCard from '../components/ImageCard';
import WeddingBG from '../components/WeddingBg';
import WeddingEvent from '../components/WeddingDetails';
import WeddingHeader from '../components/WeddingHeader';
import '../styles/index.scss';

const IndexPage = () => {
    const WELCOME_HEADER = "Chaitanya & Vedanshi's";
    const HERO_HEADER = 'Beautiful Story';

    return (
        <main>
            <section className='main-section'>
                <section className='hero-section'>
                    <div className='hero-welcome'>
                        <div>
                            <span>{WELCOME_HEADER}</span>
                            <h1 className='hero-header'>{HERO_HEADER}</h1>
                        </div>
                    </div>
                    <div className='hero-image'>
                        <StaticImage
                            src='../assets/images/hero-pic.png'
                            alt="Krishna and Vedanshi's Picture"
                        />
                    </div>
                </section>
                <section className='savethedate'>
                    <WeddingHeader title='Save the Date' />
                    <WeddingBG>
                        <WeddingEvent
                            event='Engagement'
                            date={
                                <a href='/calendar/engagement.ics' download>
                                    23.Nov.2021
                                </a>
                            }
                            eventText='12:00 PM Onwards'
                        />
                        <WeddingEvent
                            event='Wedding'
                            date={
                                <a href='/calendar/marraige.ics' download>
                                    24.Nov.2021
                                </a>
                            }
                            eventText='9:23 AM'
                        />
                        <WeddingEvent
                            event='Venue'
                            eventText={
                                <a
                                    href='https://goo.gl/maps/n36cV2bbXEZjUSQ47'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Tivoli Palace, Faridabad, Haryana
                                </a>
                            }
                        />
                    </WeddingBG>
                </section>
                <section className='gallery'>
                    <WeddingHeader title='Gallery' />
                    <article className='gallery-content'>
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/f_auto/mywedding/01.jpg'
                            alt='Somewhere near necklace road'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/f_auto/mywedding/02.jpg'
                            alt='Finally a decent pic with smoke bomb '
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/f_auto/mywedding/03.jpg'
                            alt='By the sunset'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/f_auto/mywedding/04.jpg'
                            alt='Near Faluknama palace'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/f_auto/mywedding/05.jpg'
                            alt='This one too'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/f_auto/mywedding/06.jpg'
                            alt='Probably the best pic of that day'
                        />
                    </article>
                </section>
            </section>
        </main>
    );
};

export default IndexPage;
