import React, { useState, useEffect } from 'react';

const getRandomImage = async () => {
    try {
        const response = await fetch('https://picsum.photos/200');
        if (response.ok) {
            const imageUrl = response.url;
            return imageUrl;
        } else {
            console.error('Failed to fetch image');
            return '';
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        return '';
    }
};

const LoremPicsum = () => {
    const [imageData, setImageData] = useState('');

    useEffect(() => {
        const fetchRandomImage = async () => {
            const imageUrl = await getRandomImage();
            setImageData(imageUrl);
        };

        fetchRandomImage();
    }, []); // Run this effect only once on component mount

    return <img className="h-8 w-8 rounded-full" src={imageData} alt="Random Image" />;
};

export default LoremPicsum;
