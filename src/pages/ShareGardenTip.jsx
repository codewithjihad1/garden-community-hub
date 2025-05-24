import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { api } from "../services/GetServices";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { toast } from "react-toastify";

const ShareGardenTip = () => {
    const { user } = useContext(AuthContext)
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = e.target;

        const tipData = new FormData(formData);
        const tip = Object.fromEntries(tipData.entries());

        // Add totalLiked field with initial value of 0
        tip.totalLiked = 0;

        try {
            await api.post('/tips', tip);
            setSubmitted(true);
            toast.success("Successfully added garden tip", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        } catch (error) {
            console.error("Error submitting tip:", error);
        }
    };

    // Document title
    useDocumentTitle("share garden Tips")

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Share a Garden Tip</h2>

            {submitted ? (
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded">
                    ✅ Tip submitted successfully!
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="e.g., How I Grow Tomatoes Indoors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Plant Type / Topic</label>
                        <input
                            type="text"
                            name="plantType"
                            // value={formData.plantType}
                            // onChange={handleChange}
                            placeholder="Plant type"
                            required
                            className="w-full mt-1 p-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Difficulty</label>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Description</label>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Image URL</label>
                        <input
                            type="url"
                            name="images"
                            // value={formData.imageUrl}
                            // onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Category</label>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Availability</label>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
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
                        Submit Tip
                    </button>
                </form>
            )}
        </div>
    );
};

export default ShareGardenTip;
