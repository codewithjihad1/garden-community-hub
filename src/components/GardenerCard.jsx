import React from "react";

const GardenerCard = ({ gardener }) => {

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300">
            <div className="flex items-center space-x-4 mb-4">
                <img
                    src={gardener.image}
                    alt={gardener.name}
                    className="w-16 h-16 rounded-full border-2 border-green-400 object-cover"
                />
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{gardener.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-200">{gardener.status}</p>
                </div>
            </div>

            <div className="text-sm text-gray-700 mb-3 space-y-1 dark:text-gray-100">
                <p><span className="font-medium">Email: </span> {gardener.email}</p>
                <p><span className="font-medium">Age:</span> {gardener.age}</p>
                <p><span className="font-medium">Gender:</span> {gardener.gender}</p>
                <p><span className="font-medium">Experience:</span> {gardener.experiences}</p>
                {gardener.location && <p><span className="font-medium">Location:</span> {gardener.location}</p>}
                {gardener.certifications && (
                    <p><span className="font-medium">Certifications:</span> {gardener.certifications.join(", ")}</p>
                )}
                {gardener.gardenName && <p><span className="font-medium">Garden Name:</span> {gardener.gardenName}</p>}
                {gardener.youtube && (
                    <p><span className="font-medium">YouTube:</span> <a href={`https://${gardener.youtube}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{gardener.youtube}</a></p>
                )}
            </div>

            <div className="mt-4 text-green-700 font-semibold text-sm">
                🌱 Total Shared Tips: {gardener.totalSharedTips}
            </div>
        </div>
    );
};

export default GardenerCard;
