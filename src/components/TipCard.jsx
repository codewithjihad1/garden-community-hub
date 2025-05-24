import React from "react";

const TipCard = ({ tip }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 max-w-md mx-auto hover:shadow-lg transition duration-300">
            <img
                src={tip.images}
                alt={tip.title}
                className="rounded-xl h-48 w-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-1 dark:text-gray-200">{tip.title}</h2>
            <p className="text-sm text-gray-600 mb-2 dark:text-gray-200">{tip.description}</p>

            <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Plant: {tip.plantType}
                </span>
                <span
                    className={`text-xs px-2 py-1 rounded-full ${tip.difficulty === "Easy"
                            ? "bg-blue-100 text-blue-700"
                            : tip.difficulty === "Medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                        }`}
                >
                    Difficulty: {tip.difficulty}
                </span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    {tip.category}
                </span>
                <span
                    className={`text-xs px-2 py-1 rounded-full ${tip.availability === "Public"
                            ? "bg-green-200 text-green-800"
                            : "bg-gray-200 text-gray-700"
                        }`}
                >
                    {tip.availability}
                </span>
            </div>

            <div className="text-sm text-gray-500 mt-4 border-t pt-2 dark:text-gray-200">
                <p>Posted by: <span className="font-medium">{tip.name}</span></p>
                <p className="text-xs">{tip.email}</p>
            </div>
        </div>
    );
};

export default TipCard;
