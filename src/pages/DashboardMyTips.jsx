import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { api } from '../services/GetServices';
import Loading from '../components/Loading';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { toast } from 'react-toastify';

const DashboardMyTips = () => {
    const { user } = useContext(AuthContext);
    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');

    // Set document title
    useDocumentTitle("My Tips - Dashboard");

    useEffect(() => {
        const fetchMyTips = async () => {
            try {
                const response = await api.get(`/tips?email=${user?.email}`);
                setTips(response.data);
            } catch (error) {
                console.error("Error fetching my tips:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user?.email) {
            fetchMyTips();
        }
    }, [user?.email]);

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this tip?");
        if (!confirmed) return;

        try {
            await api.delete(`/tips/${id}`);
            toast.success("Tip deleted successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            setTips((prev) => prev.filter((tip) => tip._id !== id));
        } catch (error) {
            console.error("Delete failed:", error);
            toast.error("Failed to delete tip", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
    };

    // Filter and sort tips
    const filteredAndSortedTips = tips
        .filter(tip =>
            tip.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tip.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tip.plantType?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date);
                case 'oldest':
                    return new Date(a.createdAt || a.date) - new Date(b.createdAt || b.date);
                case 'likes':
                    return (b.totalLiked || 0) - (a.totalLiked || 0);
                case 'alphabetical':
                    return (a.title || '').localeCompare(b.title || '');
                default:
                    return 0;
            }
        });

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                            My Garden Tips
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Manage your shared garden tips
                        </p>
                    </div>
                    <Link
                        to="/dashboard/add-tip"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                        <span>➕</span>
                        <span>Add New Tip</span>
                    </Link>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Search My Tips
                        </label>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by title, category, or plant type..."
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Sort By
                        </label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="likes">Most Liked</option>
                            <option value="alphabetical">Alphabetical</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300">
                    You have {filteredAndSortedTips.length} tips
                    {searchTerm && ` matching "${searchTerm}"`}
                </p>
            </div>

            {/* Tips Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Tip Details
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Plant Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Difficulty
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Likes
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Date Created
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {filteredAndSortedTips.map((tip) => (
                                <tr key={tip._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <img
                                                className="h-12 w-12 rounded-lg object-cover"
                                                src={tip.images || '/default-plant.jpg'}
                                                alt={tip.title}
                                            />
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {tip.title}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    {tip.description?.substring(0, 60)}...
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                                            {tip.plantType}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                                            {tip.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${tip.difficulty === 'Easy' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                                                tip.difficulty === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                                                    'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                                            }`}>
                                            {tip.difficulty}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                        <div className="flex items-center">
                                            <span className="mr-1">❤️</span>
                                            {tip.totalLiked || 0}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        {new Date(tip.createdAt || tip.date).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-2">
                                            <Link
                                                to={`/tips/${tip._id}`}
                                                className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                                            >
                                                View
                                            </Link>
                                            <Link
                                                to={`/update-tip/${tip._id}`}
                                                className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(tip._id)}
                                                className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredAndSortedTips.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📝</div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            {searchTerm ? 'No matching tips found' : 'No tips yet'}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                            {searchTerm ? 'Try adjusting your search criteria.' : 'Start sharing your garden wisdom with the community!'}
                        </p>
                        {!searchTerm && (
                            <Link
                                to="/dashboard/add-tip"
                                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                            >
                                <span className="mr-2">➕</span>
                                Share Your First Tip
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardMyTips;
