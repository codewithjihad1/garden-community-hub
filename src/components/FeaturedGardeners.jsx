import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const gardenerData = [
    { id: 1, name: "Alice Green", location: "Portland, OR", experience: "5 years", specialty: "Urban Gardening", status: "active" },
    { id: 2, name: "Ben Bloom", location: "Austin, TX", experience: "8 years", specialty: "Vegetable Gardens", status: "active" },
    { id: 3, name: "Cathy Leaf", location: "Seattle, WA", experience: "4 years", specialty: "Permaculture", status: "inactive" },
    { id: 4, name: "David Root", location: "Boulder, CO", experience: "6 years", specialty: "Hydroponics", status: "active" },
    { id: 5, name: "Ella Fern", location: "Asheville, NC", experience: "3 years", specialty: "Flower Gardening", status: "inactive" },
    { id: 6, name: "Frank Moss", location: "Madison, WI", experience: "7 years", specialty: "Sustainable Landscaping", status: "active" },
    { id: 7, name: "Grace Sprout", location: "Santa Cruz, CA", experience: "2 years", specialty: "Herb Gardens", status: "active" },
    { id: 8, name: "Hank Thorn", location: "Burlington, VT", experience: "10 years", specialty: "Organic Farming", status: "inactive" },
    { id: 9, name: "Isla Bud", location: "Eugene, OR", experience: "6 years", specialty: "Native Plants", status: "active" },
    { id: 10, name: "Jake Grove", location: "Chapel Hill, NC", experience: "9 years", specialty: "Edible Landscapes", status: "inactive" }
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
                    <div key={gardener.id} className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-green-700">{gardener.name}</h3>
                        <p className="text-sm text-gray-600">{gardener.location}</p>
                        <div className="mt-3 text-sm text-green-400">
                            <p><strong>Experience:</strong> {gardener.experience}</p>
                            <p><strong>Specialty:</strong> {gardener.specialty}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedGardeners;
