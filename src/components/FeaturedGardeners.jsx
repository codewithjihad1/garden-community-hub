import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import GardenerCard from './GardenerCard';

const gardenerData = [
    {
        id: 1,
        name: "Alice Brown",
        age: 34,
        gender: "Female",
        status: "active",
        experiences: "5 years of balcony and indoor gardening",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        totalSharedTips: 8,
        location: "Austin, TX"
    },
    {
        id: 2,
        name: "George Lee",
        age: 45,
        gender: "Male",
        status: "active",
        experiences: "Landscape gardener for 15+ years",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        totalSharedTips: 14,
        certifications: ["Certified Horticulturist"]
    },
    {
        id: 3,
        name: "Maria Torres",
        age: 29,
        gender: "Female",
        status: "active",
        experiences: "Grows herbs and vegetables in containers",
        image: "https://randomuser.me/api/portraits/women/41.jpg",
        totalSharedTips: 5,
        social: "@greenmaria"
    },
    {
        id: 4,
        name: "Daniel Kim",
        age: 52,
        gender: "Male",
        status: "active",
        experiences: "Retired botany teacher with lifelong gardening passion",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        totalSharedTips: 20,
        location: "Seattle, WA"
    },
    {
        id: 5,
        name: "Nina Patel",
        age: 38,
        gender: "Female",
        status: "active",
        experiences: "Urban farming specialist and garden designer",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
        totalSharedTips: 12,
        business: "Grow Green Solutions"
    },
    {
        id: 6,
        name: "Henry Nguyen",
        age: 26,
        gender: "Male",
        status: "active",
        experiences: "Backyard gardener with a focus on composting",
        image: "https://randomuser.me/api/portraits/men/23.jpg",
        totalSharedTips: 4,
        blog: "soilsecrets.blog"
    },
    {
        id: 7,
        name: "Linda Zhao",
        age: 60,
        gender: "Female",
        status: "inactive",
        experiences: "Retired florist, now gardens for joy and relaxation",
        image: "https://randomuser.me/api/portraits/women/60.jpg",
        totalSharedTips: 16,
        gardenName: "Peaceful Petals"
    },
    {
        id: 8,
        name: "Carlos Rivera",
        age: 42,
        gender: "Male",
        status: "inactive",
        experiences: "Owns a local nursery and teaches plant care workshops",
        image: "https://randomuser.me/api/portraits/men/51.jpg",
        totalSharedTips: 10,
        certifications: ["Master Gardener"]
    },
    {
        id: 9,
        name: "Emma Wilson",
        age: 31,
        gender: "Female",
        status: "inactive",
        experiences: "Uses vertical gardening for small space planting",
        image: "https://randomuser.me/api/portraits/women/34.jpg",
        totalSharedTips: 6,
        youtube: "youtube.com/@growwithemma"
    },
    {
        id: 10,
        name: "Rajiv Das",
        age: 48,
        gender: "Male",
        status: "inactive",
        experiences: "10 years specializing in hydroponics and organic gardening",
        image: "https://randomuser.me/api/portraits/men/70.jpg",
        totalSharedTips: 18,
        location: "New Delhi, India"
    }
];


const FeaturedGardeners = () => {
    const [activeGardeners, setActiveGardeners] = useState([]);

    useEffect(() => {
        // Simulate fetching data and filtering
        const active = gardenerData.filter(g => g.status === 'active').slice(0, 6);
        setActiveGardeners(active);
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
