import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { api } from "../services/GetServices";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { toast } from "react-toastify";

const DashboardAddTip = () => {
    const { user } = useContext(AuthContext);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = e.target;
        const tipData = new FormData(formData);
        const tip = Object.fromEntries(tipData.entries());

        // Add required fields
        tip.totalLiked = 0;
        tip.createdAt = new Date().toISOString();
        tip.availability = tip.availability || "Public";

        try {
            await api.post('/tips', tip);
            setSubmitted(true);
            toast.success("Garden tip added successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });

            // Navigate to my tips after 2 seconds
            setTimeout(() => {
                navigate('/dashboard/my-tips');
            }, 2000);
        } catch (error) {
            console.error("Error submitting tip:", error);
            toast.error("Failed to add tip. Please try again.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        } finally {
            setLoading(false);
        }
    };

    // Document title
    useDocumentTitle("Add New Tip - Dashboard");

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    Share a Garden Tip
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Share your gardening knowledge with the community
                </p>
            </div>

            <div className="max-w-2xl bg-white p-8 rounded-xl shadow-md dark:bg-gray-800">
                {submitted ? (
                    <div className="text-center py-8">
                        <div className="text-6xl mb-4">✅</div>
                        <h2 className="text-2xl font-bold text-green-600 mb-2">
                            Tip Submitted Successfully!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Your garden tip has been shared with the community.
                        </p>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-500">
                                Redirecting to your tips...
                            </p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Author Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={user?.displayName || ''}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email || ''}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                        </div>

                        {/* Tip Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Tip Title *
                            </label>
                            <input
                                type="text"
                                name="title"
                                required
                                placeholder="e.g., How I Grow Tomatoes Indoors"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        {/* Plant Type & Difficulty */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Plant Type *
                                </label>
                                <input
                                    type="text"
                                    name="plantType"
                                    required
                                    placeholder="e.g., Tomato, Rose, Basil"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Difficulty Level *
                                </label>
                                <select
                                    name="difficulty"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                                >
                                    <option value="">Select difficulty</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </div>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Category *
                            </label>
                            <select
                                name="category"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                            >
                                <option value="">Select a category</option>
                                <option value="Indoor Gardening">Indoor Gardening</option>
                                <option value="Outdoor Gardening">Outdoor Gardening</option>
                                <option value="Vegetables">Vegetables</option>
                                <option value="Flowers">Flowers</option>
                                <option value="Herbs">Herbs</option>
                                <option value="Trees">Trees</option>
                                <option value="Gardening Tools">Gardening Tools</option>
                                <option value="Pest Control">Pest Control</option>
                                <option value="Soil & Composting">Soil & Composting</option>
                                <option value="Seasonal Care">Seasonal Care</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Description *
                            </label>
                            <textarea
                                name="description"
                                required
                                rows="4"
                                placeholder="Provide a detailed description of your gardening tip..."
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                            ></textarea>
                        </div>

                        {/* Images */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Image URL
                            </label>
                            <input
                                type="url"
                                name="images"
                                placeholder="https://example.com/image.jpg"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                            />
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Optional: Add an image to make your tip more engaging
                            </p>
                        </div>

                        {/* Availability */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Availability *
                            </label>
                            <select
                                name="availability"
                                required
                                defaultValue="Public"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                            >
                                <option value="Public">Public</option>
                                <option value="Private">Private</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => navigate('/dashboard')}
                                className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white rounded-lg transition-colors flex items-center"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    'Share Tip'
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default DashboardAddTip;
