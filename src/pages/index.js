import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <meta charset='utf-8' />
                <title>💍 Our Beautiful Story 💍</title>
                <meta
                    name='description'
                    content='💕💕 We are getting married on 24th November. We would love for you to be part of our beautiful story 💕💕'
                />
                <meta
                    name='image'
                    content='https://res.cloudinary.com/kchai/image/upload/v1635879961/mywedding/og-image.png'
                />
                <meta itemprop='name' content='💍 Our Beautiful Story 💍' />
                <meta
                    itemprop='description'
                    content='💕💕 We are getting married on 24th November. We would love for you to be part of our beautiful story 💕💕'
                />
                <meta
                    itemprop='image'
                    content='https://res.cloudinary.com/kchai/image/upload/v1635879961/mywedding/og-image.png'
                />
                <meta name='og:title' content='💍 Our Beautiful Story 💍' />
                <meta
                    name='og:description'
                    content='💕💕 We are getting married on 24th November. We would love for you to be part of our beautiful story 💕💕'
                />
                <meta
                    name='og:image'
                    content='https://res.cloudinary.com/kchai/image/upload/v1635879961/mywedding/og-image.png'
                />
                <meta name='og:url' content='https://ourbeautifulstory.com/' />
                <meta name='og:site_name' content='Our Beautiful Story' />
                <meta name='og:type' content='website' />
            </Helmet>
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
                            event={`Haldi & Mehandi`}
                            date={
                                <a href='/calendar/haldi.ics' download>
                                    22.Nov.2021
                                </a>
                            }
                            eventText='11:00 AM Onwards'
                        />
                        <a href='/images/Haldi.jpeg' download>
                            <img src='/images/Haldi.jpeg' alt='Haldi card' />
                        </a>
                        <WeddingEvent
                            event='Engagement'
                            date={
                                <a href='/calendar/engagement.ics' download>
                                    23.Nov.2021
                                </a>
                            }
                            eventText='12:00 PM Onwards'
                        />
                        <a href='/images/Engagement_Card.jpg' download>
                            <img
                                src='/images/Engagement_Card.jpg'
                                alt='Engagement Card'
                            />
                        </a>
                        <WeddingEvent
                            event='Wedding'
                            date={
                                <a href='/calendar/marraige.ics' download>
                                    24.Nov.2021
                                </a>
                            }
                            eventText='Muhurat time:  9:23 AM'
                        />
                        <a href='/images/Wedding_Card.png' download>
                            <img
                                src='/images/Wedding_Card.png'
                                alt='Wedding Card'
                            />
                        </a>
                        <WeddingEvent
                            event='Venue'
                            eventText={
                                <a
                                    href='https://goo.gl/maps/n36cV2bbXEZjUSQ47'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Tivoli Royal Palace, Faridabad, Haryana
                                </a>
                            }
                        />
                    </WeddingBG>
                </section>
                <section className='gallery'>
                    <WeddingHeader title='Gallery' />
                    <article className='gallery-content'>
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/01.jpg'
                            alt='Somewhere near necklace road'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/02.jpg'
                            alt='Finally a decent pic with smoke bomb '
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/03.jpg'
                            alt='By the sunset'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/04.jpg'
                            alt='Near Faluknama palace'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/05.jpg'
                            alt='This one too'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/06.jpg'
                            alt='Probably the best pic of that day'
                        />
                        {/* <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/himalaya.jpg'
                            alt='Himalaya wala pic'
                        /> */}
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/outing.jpg'
                            alt='Outing wala pic'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/birthday.jpg'
                            alt='Birthday wala pic'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/party.jpg'
                            alt='Party wala pic'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/jaidhalmer.jpg'
                            alt='Jaidhalmer wala pic'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/mybirthday.jpg'
                            alt='Birthday wala pic'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/movie.jpg'
                            alt='Movie wala pic'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/firstparty.jpg'
                            alt='First party wala pic'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/birthday2.jpg'
                            alt='Doosra birthday party wala pic'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/roka3.jpg'
                            alt='Roka ka doosra pic'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/house.jpg'
                            alt='Roka ka doosra pic'
                        />
                        <ImageCard
                            src='https://res.cloudinary.com/kchai/image/upload/w_800,f_auto,q_auto/mywedding/zomato.jpg'
                            alt='Concert ka pic'
                        />
                    </article>
                </section>
            </section>
            <footer>
                <span>
                    Ourbeautifulstory©{new Date().getFullYear()}. All rights
                    reserved
                </span>
            </footer>
        </main>
    );
};

export default IndexPage;
