import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full h-auto py-12 bg-[#C68A40] text-white flex flex-col justify-center items-center z-10 relative">
            <div className="container mx-auto px-4 flex flex-col items-center gap-8">

                {/* Brand or Title (Optional but good for footer balance) */}
                <h2 className="text-2xl font-serif tracking-widest uppercase opacity-80">Oasis</h2>

                {/* Social Icons */}
                <div className="flex items-center gap-8">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-gray-400 transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:text-gray-400 transition-colors duration-300"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://whatsapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-gray-400 transition-colors duration-300"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-xs text-gray-500 tracking-wider mt-4">
                    &copy; {new Date().getFullYear()} OASIS TRAVEL. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
