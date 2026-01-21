import React from 'react'
import background1 from '../assets/oasis-background1.jpg'
import logo from '../assets/logo-oasis.png'
function Header() {
    return (
        <section className="relative h-screen snap-start flex flex-col md:flex-row items-center justify-center md:justify-start px-6 py-20 md:px-12 md:py-0 overflow-hidden border-b-2 border-oasis-gold">

            {/* Background Image */}
            <img
                src={background1}
                alt="Desert landscape background"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center">

                {/* Logo Section */}
                <div className="flex justify-center md:justify-start flex-shrink-0 mb-8 md:mb-0">
                    <img
                        src={logo}
                        alt="Oasis Logo"
                        className="w-64 h-64 md:w-[400px] md:h-[400px] object-cover rounded-2xl shadow-2xl"
                    />
                </div>

                {/* Text Section */}
                <div className="max-w-xl md:ml-12 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight drop-shadow-lg">
                        Find Your <span className="italic text-oasis-gold">Silence</span> in the Sand
                    </h2>
                </div>
            </div>

        </section>

    )
}

export default Header