import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import TipCard from "../components/TipCard";
// import axios from "axios"; // Uncomment when using backend
// data/tips.js 
const tipsData = [
    {
        id: 1,
        title: "How I Grow Tomatoes Indoors",
        plantType: "Tomato",
        difficulty: "Medium",
        description: "By using grow lights and proper air circulation, I’m able to grow juicy tomatoes inside my apartment all year round.",
        images: "https://i.imgur.com/0Y9hHmE.jpeg",
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
        images: "https://cdn.shopify.com/s/files/1/0649/8494/0772/files/shutterstock_160161059.jpg?v=1660706299",
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
        images: "https://i.imgur.com/x0ncS61.jpeg",
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
        images: "https://i.imgur.com/B16CdPO.jpeg",
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
        images: "https://i.imgur.com/InUHUUG.jpeg",
        category: "Plant Care",
        availability: "Hidden",
        user: {
            name: "Emily Tran",
            email: "emily.tran@example.com"
        }
    }
];

const BrowseTipsPage = () => {

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-green-700">🌱 Public Garden Tips</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tipsData.map(tip => (
                    <TipCard key={tip.id} tip={tip} />
                ))}
            </div>
            </div>

        </div>
    );
};

export default BrowseTipsPage;
