import React from "react";
import { Fade } from "react-awesome-reveal";

const stories = [
    {
        id: 1,
        name: "Lena Carter",
        beforeImage: "https://i.imgur.com/1BytF54.jpeg",
        afterImage: "https://i.imgur.com/1WeotR1.jpeg",
        story:
            "Lena turned her tiny balcony into a lush herb garden. She overcame space constraints using vertical planters and shared her journey with the community.",
        tip: "Start small and be consistent. Basil loves sunshine!"
    },
    {
        id: 2,
        name: "Javed Malik",
        beforeImage: "https://i.imgur.com/EYELO12.jpeg",
        afterImage: "https://i.imgur.com/gX5juQY.jpeg",
        story:
            "Javed revived his backyard after years of neglect. With composting and patience, it bloomed into a vibrant vegetable paradise.",
        tip: "Composting is gold! It revived my soil and saved money."
    },
    {
        id: 3,
        name: "Emily Zhang",
        beforeImage: "https://i.imgur.com/kmFCStC.jpeg",
        afterImage: "https://i.imgur.com/mV60RJt.jpeg",
        story:
            "Emily struggled with overwatering until she discovered hydroponics. Now her lettuce harvest is the envy of her neighborhood.",
        tip: "Hydroponics works wonders in apartments!"
    }
];

const SuccessStories = () => {
    return (
        <section className="py-12 px-6 lg:px-20">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <Fade direction="up">
                        <h2 className="text-3xl lg:text-4xl font-bold text-green-700 dark:text-white">
                            Gardening Success Stories
                        </h2>
                    </Fade>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto dark:text-gray-200">
                        Meet our amazing community members who transformed their gardening dreams into reality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map(({ id, name, beforeImage, afterImage, story, tip }) => (
                        <div
                            key={id}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <div className="grid grid-cols-2 gap-0">
                                <img src={beforeImage} alt="Before" className="w-full h-40 object-cover" />
                                <img src={afterImage} alt="After" className="w-full h-40 object-cover" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-green-800 dark:text-white">{name}</h3>
                                <p className="text-gray-600 text-sm mt-2 dark:text-gray-200">{story}</p>
                                <div className="mt-4 p-3 bg-green-100 dark:bg-gray-100 border-l-4 border-green-500 text-green-700 text-sm italic rounded">
                                    🌱 Tip: {tip}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
