import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import GardenerCard from './GardenerCard';
import { getFeaturedGardeners } from '../services/GetServices';


const FeaturedGardeners = () => {
    const [activeGardeners, setActiveGardeners] = useState([]);

    const getFeaturedData = async () => {
        try {
            const res = await getFeaturedGardeners()
            setActiveGardeners(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFeaturedData()
    }, []);

    return (
        <div className="container mx-auto py-8">
            <Fade direction="up">
                <h2 className="text-3xl text-green-800 font-bold text-center mb-12">Featured Gardeners</h2>
            </Fade>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeGardeners.map(gardener => (
                    <GardenerCard key={gardener.id} gardener={gardener} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedGardeners;
