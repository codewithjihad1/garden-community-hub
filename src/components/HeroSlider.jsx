import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HeroSlider = () => {


    // Banner slides data
    const bannerSlides = [
        {
            id: 1,
            title: "Spring Gardening Workshop",
            description: "Join our expert gardeners for a hands-on workshop on spring planting techniques.",
            image: "https://i.imgur.com/CMqvzpd.jpeg",
            buttonText: "Register Now"
        },
        {
            id: 2,
            title: "Community Garden Day",
            description: "Help us maintain our community garden and learn sustainable gardening practices.",
            image: "https://i.imgur.com/wIahhfC.jpeg",
            buttonText: "Learn More"
        },
        {
            id: 3,
            title: "Hydroponics Workshop",
            description: "Discover the future of gardening with our hydroponics workshop.",
            image: "https://i.imgur.com/FP9Dyh4.jpeg",
            buttonText: "Join Event"
        }
    ];


    return (
        <section className='pb-10'>
            <div className="container mx-auto">
                <Swiper
                    modules={[EffectFade, Autoplay, Pagination]}
                    effect="fade"
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    className=""
            >
                {bannerSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative min-h-[600px] w-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50">
                                <div className="container mx-auto px-4 h-full flex items-center">
                                    <div className="text-white max-w-2xl">
                                        <h2 className="text-4xl font-bold mb-4">
                                            <Typewriter
                                                words={[slide.title]}
                                                loop={true}
                                                cursor
                                                cursorStyle="_"
                                                typeSpeed={70}
                                            />
                                        </h2>
                                        <p className="text-xl mb-8">{slide.description}</p>
                                        <button className="btn-primary">
                                            {slide.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </section>
    )
}

export default HeroSlider
