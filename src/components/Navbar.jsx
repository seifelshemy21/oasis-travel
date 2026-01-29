import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsOpen((prev) => !prev);

    // Listen to scroll-container only
    useEffect(() => {
        const container = document.getElementById("scroll-container");
        if (!container) return; // Maybe on a subpage

        const handleScroll = () => {
            setScrolled(container.scrollTop > 50);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [location.pathname]); // Re-run when path changes

    // Lock scroll when mobile menu is open
    useEffect(() => {
        const container = document.getElementById("scroll-container");
        if (!container) return;

        if (isOpen) {
            container.classList.add("overflow-hidden");
        } else {
            container.classList.remove("overflow-hidden");
        }

        return () => container.classList.remove("overflow-hidden");
    }, [isOpen]);

    const handleNavClick = (id) => {
        setIsOpen(false);

        if (location.pathname !== "/") {
            navigate("/");
            // Wait for navigation and mount
            setTimeout(() => {
                const container = document.getElementById("scroll-container");
                const element = document.getElementById(id);
                if (container && element) {
                    container.scrollTo({
                        top: element.offsetTop,
                        behavior: "smooth",
                    });
                }
            }, 100);
        } else {
            const container = document.getElementById("scroll-container");
            const element = document.getElementById(id);

            if (container && element) {
                container.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                });
            }
        }
    };

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "Golden Standard", id: "golden-standard" },
        { name: "Journeys", id: "journeys" },
        { name: "Description", id: "description" },
        { name: "Extraordinary", id: "extraordinary" },
        { name: "Footer", id: "footer" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
                    ? "bg-oasis-gold/90 backdrop-blur-sm py-4 shadow-lg"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center text-white relative z-50">

                {/* Logo */}
                <button
                    onClick={() => handleNavClick("home")}
                    className="text-2xl font-serif tracking-widest uppercase font-bold focus:outline-none"
                >
                    Oasis
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.id)}
                            className="text-sm uppercase tracking-widest hover:text-oasis-gold transition focus:outline-none"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Overlay - Portaled to Body */}
            {typeof document !== 'undefined' && createPortal(
                <div
                    className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm
          flex flex-col items-center justify-center space-y-10
          transition-opacity duration-300 md:hidden
          ${isOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                        }`}
                >
                    <button
                        onClick={toggleMenu}
                        className="absolute top-6 right-6 text-3xl text-white hover:text-oasis-gold transition focus:outline-none"
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>

                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.id)}
                            className="text-2xl font-serif text-white uppercase tracking-widest hover:text-oasis-gold transition focus:outline-none"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>,
                document.body
            )}
        </nav>
    );
};

export default Navbar;
