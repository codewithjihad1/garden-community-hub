import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import axios from "axios"; // Use for real DB

const TipDetails = () => {
    const { id } = useParams(); // URL param
    const [tip, setTip] = useState(null);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const fetchTip = async () => {
            try {
                // Example: const response = await axios.get(`/api/tips/${id}`);
                // setTip(response.data);

                // Mock Data (Replace with API call)
                const mockTip = {
                    id: 1,
                    title: "How I Grow Tomatoes Indoors",
                    plantType: "Tomato",
                    difficulty: "Medium",
                    description: "By using grow lights and proper air circulation, I’m able to grow juicy tomatoes inside my apartment all year round.",
                    image: "https://i.imgur.com/0Y9hHmE.jpeg",
                    category: "Indoor Gardening",
                    availability: "Public",
                    user: {
                        name: "Jane Doe",
                        email: "jane@example.com"
                    }
                }
                setTip(mockTip);
            } catch (err) {
                console.error("Error fetching tip:", err);
            }
        };

        fetchTip();
    }, [id]);

    const handleLike = () => {
        setLiked(!liked);
        // Optionally send like to DB
    };

    if (!tip) {
        return <div className="text-center py-10 text-gray-600">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-green-700">{tip.title}</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Shared by: <span className="font-medium">{tip.name}</span> ({tip.email})
                    </p>
                </div>

                <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-64 object-cover rounded-md mb-6"
                />

                <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                    <p><strong>Plant Type:</strong> {tip.plantType}</p>
                    <p><strong>Category:</strong> {tip.category}</p>
                    <p><strong>Difficulty:</strong> {tip.difficulty}</p>
                    <p><strong>Availability:</strong> {tip.availability}</p>
                </div>

                <div className="mt-6 text-gray-800 leading-relaxed">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p>{tip.description}</p>
                </div>

                <div className="mt-6">
                    <button
                        onClick={handleLike}
                        className={`px-4 py-2 rounded-md text-white transition ${liked ? "bg-pink-500" : "bg-green-600 hover:bg-green-700"
                            }`}
                    >
                        {liked ? "❤️ Liked" : "🤍 Like"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TipDetails;

