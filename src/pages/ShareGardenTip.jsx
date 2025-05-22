import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const ShareGardenTip = () => {
    // const [formData, setFormData] = useState({
    //     title: "",
    //     plantType: "",
    //     difficulty: "Easy",
    //     description: "",
    //     imageUrl: "",
    //     category: "Plant Care",
    //     availability: "Public",
    //     email: user.email,
    //     name: user.name,
    // });
    const {user} = useContext(AuthContext)

    const [submitted, setSubmitted] = useState(false);

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = e.target;

        const tipData = new FormData(formData);
        const tip = Object.fromEntries(tipData);
        console.log("🚀 ~ handleSubmit ~ tip:", tip)

        try {
            // Simulate API call with setTimeout or replace with actual POST
            // await axios.post('/api/tips', formData);
            console.log("Submitted data:", formData);
            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting tip:", error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Share a Garden Tip</h2>

            {submitted ? (
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded">
                    ✅ Tip submitted successfully!
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        Submit Tip
                    </button>
                </form>
            )}
        </div>
    );
};

export default ShareGardenTip;
