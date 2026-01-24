import React from 'react'
import bgImg from '../assets/extraordinary.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

function Extraordinary() {
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden border-b-2 border-oasis-gold">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="text-white max-w-lg text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-4 text-[#EAEAEA]">
                        Ready for the <br />
                        <span className="italic">extraordinary?</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 font-light tracking-wide max-w-md mx-auto md:mx-0">
                        Join our inner circle for exclusive access to new journeys and private events.
                    </p>
                </div>

                {/* Right Form Card */}
                <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                        Email Address
                    </label>
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-white/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400/50 transition-all font-light"
                        />
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-[10px] text-gray-500">
                                We respect your privacy.
                            </span>
                            <button className="group flex items-center justify-center gap-2 bg-[#C68A40] hover:bg-[#b07836] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#C68A40]/20">
                                Submit
                                <FaArrowRightLong className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Extraordinary

