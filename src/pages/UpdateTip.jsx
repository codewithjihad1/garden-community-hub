import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { api } from "../services/GetServices";
import Loading from "../components/Loading";
// import axios from "axios";

const UpdateTip = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const [tip, setTip] = useState({});
    const [loading, setLoading] = useState(true)
    const [updated, setUpdated] = useState(false)

    const navigate = useNavigate()


    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get(`/tips/${id}`)
                setTip(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        getData()
    }, [id])

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const updatedTip = Object.fromEntries(formData.entries());

        try {
            await api.put(`/tips/${id}`, updatedTip);
            setUpdated(true);
            console.log("Updated tip:", tip);
            setTimeout(() => navigate("/my-tips"), 2000);
        } catch (err) {
            console.error("Update failed", err);
        }
    };

    // When data is loading
    if (loading) return <Loading />


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
                            defaultValue={tip.title}
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="e.g., How I Grow Tomatoes Indoors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Plant Type / Topic</label>
                        <input
                            type="text"
                            name="plantType"
                            defaultValue={tip.plantType}
                            required
                            className="w-full mt-1 p-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Difficulty</label>
                        <select
                            name="difficulty"
                            defaultValue={tip.difficulty}
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
                            defaultValue={tip.description}
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
                            name="images"
                            defaultValue={tip.images}
                            required
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            name="category"
                            defaultValue={tip.category}
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
                            defaultValue={tip.availability}
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
