import React from 'react';
import Header from '../components/Header';
import GoldenStandard from '../components/GoldenStandard';
import Journeys from '../components/Journeys';
import Description from '../components/Description';
import Extraordinary from '../components/Extraordinary';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar scroll-pt-24" id="scroll-container">
            <section id="home" className="snap-start">
                <Header />
            </section>
            <section id="golden-standard" className="snap-start">
                <GoldenStandard />
            </section>
            <section id="journeys" className="snap-start">
                <Journeys />
            </section>
            <section id="description" className="snap-start">
                <Description />
            </section>
            <section id="extraordinary" className="snap-start">
                <Extraordinary />
            </section>
            <section id="footer" className="snap-start">
                <Footer />
            </section>
        </div>
    );
};

export default Home;
