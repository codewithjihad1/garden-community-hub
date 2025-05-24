import React from "react";
import { Fade } from "react-awesome-reveal";

const events = [
    {
        id: 1,
        title: "Balcony Gardening Workshop",
        date: "June 5, 2025",
        time: "3:00 PM - 5:00 PM",
        location: "Online (Zoom)",
        description:
            "Learn how to maximize small spaces with vertical and container gardening tips from experts.",
        link: "#"
    },
    {
        id: 2,
        title: "Composting 101",
        date: "June 12, 2025",
        time: "10:00 AM - 12:00 PM",
        location: "Greenleaf Community Garden, NY",
        description:
            "Hands-on session on building and maintaining your own compost system at home.",
        link: "#"
    },
    {
        id: 3,
        title: "Plant Swap & Coffee Meetup",
        date: "June 20, 2025",
        time: "4:00 PM - 6:00 PM",
        location: "Bloom Cafe, LA",
        description:
            "Bring a plant, take a plant! Meet fellow gardeners and enjoy a coffee together.",
        link: "#"
    }
];

const UpcomingEvents = () => {
    return (
        <section className="py-12 px-6 lg:px-20">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <Fade direction="up">
                        <h2 className="text-3xl lg:text-4xl font-bold text-green-700 dark:text-white">
                            Upcoming Gardening Events
                        </h2>
                    </Fade>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto dark:text-gray-200">
                        Join us at upcoming workshops, meetups, and online events to grow your gardening journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map(({ id, title, date, time, location, description, link }) => (
                        <div
                            key={id}
                            className="bg-green-50  border border-green-100 rounded-2xl p-6 shadow hover:shadow-lg transition dark:bg-gray-800"
                        >
                            <h3 className="text-xl font-bold text-green-800 mb-2 dark:text-gray-100">{title}</h3>
                            <p className="text-sm text-gray-700 mb-1 dark:text-gray-200">
                                <span className="font-medium">📅 Date:</span> {date}
                            </p>
                            <p className="text-sm text-gray-700 mb-1 dark:text-gray-200">
                                <span className="font-medium">🕒 Time:</span> {time}
                            </p>
                            <p className="text-sm text-gray-700 mb-3 dark:text-gray-200">
                                <span className="font-medium">📍 Location:</span> {location}
                            </p>
                            <p className="text-gray-600 text-sm mb-4 dark:text-gray-200">{description}</p>
                            <a
                                href={link}
                                className="inline-block text-green-700 hover:text-green-900 font-semibold text-sm dark:text-gray-200"
                            >
                                👉 Register/Join
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
