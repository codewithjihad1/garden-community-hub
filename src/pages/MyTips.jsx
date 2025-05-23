import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { api } from "../services/GetServices";
import Loading from "../components/Loading";
// import axios from "axios";

const MyTips = () => {
    const { user } = useContext(AuthContext)
    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(true)
    // const [confirmDeleteId, setConfirmDeleteId] = useState(null);

    useEffect(() => {
        const fetchMyTips = async () => {
            try {
                const res = await api.get(`/tips?email=${user.email}`);
                setTips(res.data);
                setLoading(false)
            } catch (err) {
                console.error("Failed to fetch tips:", err);
                setLoading(false)
            }
        };

        fetchMyTips();
    }, [user.email]);

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this tip?");
        if (!confirmed) return;

        try {
            await api.delete(`/tips/${id}`);
            setTips((prev) => prev.filter((tip) => tip._id !== id));
        } catch (err) {
            console.error("Delete failed", err);
        }
    };


    // When data is loading
    if (loading) return <Loading />

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
                            <tr key={tip._id} className="hover:bg-green-50">
                                <td className="p-2 border">
                                    <img src={tip.images} alt={tip.title} className="w-20 h-14 object-cover rounded" />
                                </td>
                                <td className="p-2 border">{tip.title}</td>
                                <td className="p-2 border">{tip.category}</td>
                                <td className="p-2 border">{tip.availability}</td>
                                <td className="p-2 border text-center space-x-2">
                                    <Link
                                        to={`/update-tip/${tip._id}`}
                                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        ✏️ Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(tip._id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        🗑️ Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {/* Tips not found */}
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
