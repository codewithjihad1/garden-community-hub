import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import TipCard from './TipCard';


// data/tips.js 
const tipsData = [
    {
        id: 1,
        title: "How I Grow Tomatoes Indoors",
        plantType: "Tomato",
        difficulty: "Medium",
        description: "By using grow lights and proper air circulation, I’m able to grow juicy tomatoes inside my apartment all year round.",
        images: ["https://example.com/images/tomatoes-indoor-1.jpg", "https://example.com/images/tomatoes-indoor-2.jpg"],
        category: "Indoor Gardening",
        availability: "Public",
        user: {
            name: "Jane Doe",
            email: "jane@example.com"
        }
    },
    {
        id: 2,
        title: "Beginner’s Guide to Composting",
        plantType: "General",
        difficulty: "Easy",
        description: "Learn how to turn kitchen scraps into nutrient-rich compost for your garden.",
        images: ["https://example.com/images/compost-bin.jpg"],
        category: "Composting",
        availability: "Public",
        user: {
            name: "Tom Green",
            email: "tom.green@example.com"
        }
    },
    {
        id: 3,
        title: "Growing Basil on Your Windowsill",
        plantType: "Basil",
        difficulty: "Easy",
        description: "A simple method to grow fresh basil using minimal space and sunlight.",
        images: ["https://example.com/images/basil-window.jpg"],
        category: "Herbs & Spices",
        availability: "Public",
        user: {
            name: "Lina Smith",
            email: "lina.smith@example.com"
        }
    },
    {
        id: 4,
        title: "Advanced Vertical Garden Setup",
        plantType: "Various",
        difficulty: "Hard",
        description: "My custom vertical gardening system for maximizing space in urban environments.",
        images: ["https://example.com/images/vertical-garden.jpg"],
        category: "Vertical Gardening",
        availability: "Public",
        user: {
            name: "Mark Rivera",
            email: "mark.r@example.com"
        }
    },
    {
        id: 5,
        title: "Caring for Succulents in Humid Climates",
        plantType: "Succulents",
        difficulty: "Medium",
        description: "Tips for keeping succulents healthy when moisture levels are high.",
        images: ["https://example.com/images/succulent-care.jpg"],
        category: "Plant Care",
        availability: "Hidden",
        user: {
            name: "Emily Tran",
            email: "emily.tran@example.com"
        }
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
            <Fade direction="up">
                <h2 className="text-3xl text-green-800 font-bold text-center mb-12">Top Trending Tips</h2>
            </Fade>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map(tip => (
                    <TipCard key={tip.id} tip={tip} />
                ))}
            </div>
        </div>
    );
};

export default TopTrendingTips;
