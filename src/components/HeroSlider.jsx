// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../assets/style.css"


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

export default function App() {


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
        <section className='container mx-auto rounded-lg overflow-hidden'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {bannerSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {/* <img src={slide.image} alt={slide.title} /> */}
                        <div className=' bg-cover bg-center' style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className='flex flex-col items-center justify-center min-h-[500px] bg-[#0000007a] p-4 rounded-lg'>
                                <h2 className="text-4xl text-white font-bold mb-4">
                                    <Typewriter
                                        words={[slide.title]}
                                        loop={true}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                    />
                                </h2>
                                <p className="text-xl text-gray-100 mb-8">{slide.description}</p>
                                <button className="btn btn-primary bg-primary hover:bg-primary border-none">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
