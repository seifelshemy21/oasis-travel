import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PlaceGallery = () => {
    const { id } = useParams();
    const [images, setImages] = useState([]);

    // Mapping from connection-friendly slug to actual folder name in assets
    const folderMapping = {
        'sharm-elsheikh': 'sharm elshikh',
        'hurghada': 'Hurgada', // Note: Case sensitive and specific spelling from file list
        'aswan': 'aswan',
        'taba': 'taba',
        'luxor': 'luxor',
    };

    useEffect(() => {
        const loadImages = async () => {
            const folderName = folderMapping[id];
            if (!folderName) {
                console.error(`No folder mapping found for id: ${id}`);
                return;
            }

            // Dynamically import all images from the assets folder
            // We have to use a broad glob and then filter because import.meta.glob must have static arguments roughly
            // Actually, standard vite partial matching works best if we glob everything in subfolders
            const allImages = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp}', { eager: true });

            // Filter for images that are in the specific folder
            const placeImages = Object.keys(allImages)
                .filter((path) => path.includes(`/${folderName}/`))
                .map((path) => allImages[path].default);

            setImages(placeImages);
        };

        loadImages();
    }, [id]);

    // Title formatting
    const formatTitle = (slug) => {
        return slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12 font-serif">
            {/* Navigation */}
            <div className="max-w-7xl mt-10 mx-auto mb-8 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-oasis-gold text-lg hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                    ← Back to Journeys
                </Link>

            </div>

            {/* Header */}
            <header className="max-w-7xl mx-auto mb-16 text-center">
                <h1 className="text-4xl md:text-6xl text-oasis-gold mb-4 drop-shadow-lg">
                    {formatTitle(id)}
                </h1>
                <div className="h-1 w-24 bg-oasis-gold mx-auto opacity-70"></div>
            </header>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                {images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className={`
              relative overflow-hidden rounded-lg group border border-stone-800
              ${index % 3 === 0 ? 'md:col-span-2' : ''} 
              ${index % 5 === 0 ? 'row-span-2 h-full' : ''}
            `}
                    >
                        <img
                            src={imgSrc}
                            alt={`View of ${id} ${index + 1}`}
                            className="w-full h-full object-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                ))}
                {images.length === 0 && (
                    <div className="col-span-full text-center py-20 text-white/50">
                        Scanning for images...
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlaceGallery;
