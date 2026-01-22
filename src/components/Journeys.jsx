import background3 from '../assets/oasis-background3.jpg'
import sharm from '../assets/sharm elshikh/sharm32.jpeg'
import hurghada from '../assets/Hurgada/hurgada3.jpeg'
import aswan from '../assets/aswan/aswan17.jpeg'
import taba from '../assets/taba/taba12.jpeg'
import luxor from '../assets/luxor/luxor19.jpeg'
export default function Journeys() {
    const journeys = [
        {
            title: "Sharm Elsheikh",
            image: sharm,
        },
        {
            title: "Hurghada",
            image: hurghada,
        },
        {
            title: "Nile in Aswan",
            image: aswan,
        },
        {
            title: "Taba",
            image: taba,
        },
        {
            title: "Sunrise in Luxor",
            image: luxor,
        },
    ]
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 md:p-12 border-b-2 border-oasis-gold bg-black">

            {/* Background Texture (optional, lowered opacity) */}
            <img
                src={background3}
                alt="Background texture"
                className="absolute inset-0 w-full h-full object-center opacity-30"
            />

            {/* Header */}
            <div className="relative z-10 text-center mb-8 md:mb-12">
                <h3 className="text-4xl md:text-5xl font-serif text-oasis-gold drop-shadow-lg">
                    Signature Journeys
                </h3>
                <p className="text-white/70 mt-4 max-w-2xl mx-auto italic">
                    Trace the path of the ancients through our meticulously
                    designed itineraries.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-6 auto-rows-[200px] md:auto-rows-[300px] ">
                {journeys.map((journey, index) => {
                    // Logic for 3-up then 2-up layout
                    // First 3 items: col-span-2 (2+2+2 = 6)
                    // Next 2 items: col-span-3 (3+3 = 6)
                    const isTopRow = index < 3;
                    const colSpan = isTopRow ? 'md:col-span-2' : 'md:col-span-2';

                    return (
                        <div
                            key={index}
                            className={`${colSpan} relative group rounded-2xl overflow-hidden shadow-2xl border-2 border-oasis-gold hover:border-oasis-gold/50 transition-colors duration-500 `}
                        >
                            <img
                                src={journey.image}
                                alt={journey.title}
                                className="w-full h-full object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                <h4 className="text-white text-2xl md:text-3xl font-serif drop-shadow-md transform translate-y-0 transition-transform duration-500">
                                    {journey.title}
                                </h4>
                                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    <span className="text-oasis-gold uppercase tracking-widest text-xs font-semibold">
                                        View Details
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}