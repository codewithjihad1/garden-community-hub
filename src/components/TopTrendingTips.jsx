import React, { useEffect, useState } from 'react';


// data/tips.js 
const tipsData = [
    {
        id: 1,
        title: "Water Plants Early",
        content: "Watering in the early morning reduces evaporation and helps roots absorb more water.",
    },
    {
        id: 2,
        title: "Use Compost",
        content: "Compost adds essential nutrients to your soil and boosts plant health naturally.",
    },
    {
        id: 3,
        title: "Companion Planting",
        content: "Grow basil near tomatoes to naturally deter pests and improve flavor.",
    },
    {
        id: 4,
        title: "Prune for Productivity",
        content: "Regular pruning encourages new growth and prevents disease spread.",
    },
    {
        id: 5,
        title: "Mulch Your Garden",
        content: "Mulching helps retain moisture, reduce weeds, and improve soil structure.",
    },
    {
        id: 6,
        title: "Rotate Your Crops",
        content: "Crop rotation prevents soil nutrient depletion and pest build-up.",
    }
];


const TopTrendingTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        // Simulate fetching tips
        setTips(tipsData.slice(0, 6));
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Top Trending Tips</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map(tip => (
                    <div key={tip.id} className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-green-700">{tip.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{tip.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopTrendingTips;
