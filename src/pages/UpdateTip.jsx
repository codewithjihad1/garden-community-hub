import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
// import axios from "axios";

const UpdateTip = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const navigate = useNavigate();
    const [tip, setTip] = useState(null);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        const fetchTip = async () => {
            try {
                // const res = await axios.get(`/api/tips/${id}`);
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
                };
                setTip(mockTip);
            } catch (err) {
                console.error("Failed to load tip:", err);
            }
        };
        fetchTip();
    }, [id]);

    const handleChange = (e) => {
        setTip({ ...tip, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            // await axios.put(`/api/tips/${id}`, tip);
            console.log("Updated tip:", tip);
            setUpdated(true);
            setTimeout(() => navigate("/my-tips"), 2000);
        } catch (err) {
            console.error("Update failed", err);
        }
    };

    if (!tip) return <div className="p-6 text-gray-500">Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Share a Garden Tip</h2>

            {updated ? (
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded">
                    ✅ Tip Updated successfully!
                </div>
            ) : (
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="e.g., How I Grow Tomatoes Indoors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Plant Type / Topic</label>
                        <input
                            type="text"
                            name="plantType"
                            // value={formData.plantType}
                            // onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Difficulty</label>
                        <select
                            name="difficulty"
                            // value={formData.difficulty}
                            // onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-md"
                        >
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            // value={formData.description}
                            // onChange={handleChange}
                            rows="4"
                            required
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="Describe your tip in detail..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="url"
                            name="imageUrl"
                            // value={formData.imageUrl}
                            // onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            name="category"
                            // value={formData.category}
                            // onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-md"
                        >
                            <option>Composting</option>
                            <option>Plant Care</option>
                            <option>Vertical Gardening</option>
                            <option>Herbs & Spices</option>
                            <option>Indoor Gardening</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Availability</label>
                        <select
                            name="availability"
                            // value={formData.availability}
                            // onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-md"
                        >
                            <option>Public</option>
                            <option>Hidden</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={user.displayName}
                            required
                            className="w-full mt-1 p-2 border rounded-md"
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            name="email"
                            defaultValue={user.email}
                            required
                            className="w-full mt-1 p-2 border rounded-md"
                            readOnly
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    >
                        Update Tip
                    </button>
                </form>
            )}
        </div>
    );
};

export default UpdateTip;
