import background2 from '../assets/oasis-background2.jpg'
import boat from '../assets/Frame65.png'
export default function GoldenStandard() {
    return (
        <section className="relative h-screen grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-20 md:px-12 md:py-0 items-center border-b-2 border-oasis-gold overflow-hidden">
            {/* Background Image */}
            <img
                src={background2}
                alt="Sandy background texture"
                className="absolute inset-0 w-full h-full object-center object-center"
                loading="lazy"
            />

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Left Content */}
            <div className="relative z-10 flex flex-col justify-center text-center md:text-left order-2 md:order-1">
                <h3 className="text-4xl md:text-5xl font-serif text-oasis-gold mb-6 drop-shadow-md">
                    The Golden Standard
                </h3>
                <p className="text-white/80 text-lg md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed">
                    Immerse yourself in a world where time stands still, and the horizon is your only boundary. Experience the luxury of silence.
                </p>
                <button className="mt-8 mx-auto md:mx-0 w-fit px-8 py-3 border-2 border-oasis-gold text-oasis-gold rounded-full hover:bg-oasis-gold hover:text-white transition-all duration-300 uppercase tracking-widest text-sm">
                    Explore the journey →
                </button>
            </div>

            {/* Right Image (Boat) */}
            <div className="relative z-10 flex justify-center items-center order-1 md:order-2">
                <img
                    src={boat}
                    alt="Luxury boat on water"
                    className="w-full h-auto max-w-[350px] md:max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
            </div>
        </section>
    )
}
