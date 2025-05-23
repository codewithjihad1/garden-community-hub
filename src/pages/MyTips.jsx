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
                        id: "1",
                        title: "Tomato Indoor Tips",
                        category: "Indoor Gardening",
                        availability: "Public",
                        imageUrl: "https://source.unsplash.com/100x70/?tomato",
                    },
                    {
                        id: "2",
                        title: "Homemade Compost Secret",
                        category: "Composting",
                        availability: "Hidden",
                        imageUrl: "https://source.unsplash.com/100x70/?compost",
                    },
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
        <div className="max-w-6xl mx-auto p-6">
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
                                    <img src={tip.imageUrl} alt={tip.title} className="w-20 h-14 object-cover rounded" />
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
