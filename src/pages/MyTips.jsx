import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
// import axios from "axios";

const MyTips = () => {
    const { user } = useContext(AuthContext)
    const [tips, setTips] = useState([]);
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);

    useEffect(() => {
        const fetchMyTips = async () => {
            try {
                // Example: const res = await axios.get(`/api/tips?email=${user.email}`);
                // setTips(res.data);

                const mockTips = [
                    {
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
                    },
                    {
                        id: 2,
                        title: "Beginner’s Guide to Composting",
                        plantType: "General",
                        difficulty: "Easy",
                        description: "Learn how to turn kitchen scraps into nutrient-rich compost for your garden.",
                        image: "https://cdn.shopify.com/s/files/1/0649/8494/0772/files/shutterstock_160161059.jpg?v=1660706299",
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
                        image: "https://i.imgur.com/x0ncS61.jpeg",
                        category: "Herbs & Spices",
                        availability: "Public",
                        user: {
                            name: "Lina Smith",
                            email: "lina.smith@example.com"
                        }
                    }
                ];
                setTips(mockTips);
            } catch (err) {
                console.error("Failed to fetch tips:", err);
            }
        };

        fetchMyTips();
    }, [user.email]);

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this tip?");
        if (!confirmed) return;

        try {
            // await axios.delete(`/api/tips/${id}`);
            setTips((prev) => prev.filter((tip) => tip.id !== id));
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-700">🌿 My Garden Tips</h2>

            <div className="overflow-x-auto shadow border rounded-lg">
                <table className="min-w-full bg-white">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="p-2 border">Image</th>
                            <th className="p-2 border">Title</th>
                            <th className="p-2 border">Category</th>
                            <th className="p-2 border">Status</th>
                            <th className="p-2 border text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tips.map((tip) => (
                            <tr key={tip.id} className="hover:bg-green-50">
                                <td className="p-2 border">
                                    <img src={tip.image} alt={tip.title} className="w-20 h-14 object-cover rounded" />
                                </td>
                                <td className="p-2 border">{tip.title}</td>
                                <td className="p-2 border">{tip.category}</td>
                                <td className="p-2 border">{tip.availability}</td>
                                <td className="p-2 border text-center space-x-2">
                                    <Link
                                        to={`/update-tip/${tip.id}`}
                                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        ✏️ Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(tip.id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        🗑️ Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {tips.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center p-4 text-gray-500">
                                    No tips added yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTips;
