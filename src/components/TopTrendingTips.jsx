import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import TipCard from './TipCard';
import { api } from '../services/GetServices';


const TopTrendingTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get("/tips?availability=Public&limit=6")
                setTips(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <Fade direction="up">
                <h2 className="text-3xl text-green-800 font-bold text-center mb-12 dark:text-gray-50">Top Trending Tips</h2>
            </Fade>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map(tip => (
                    <TipCard key={tip._id} tip={tip} />
                ))}
            </div>
        </div>
    );
};

export default TopTrendingTips;
