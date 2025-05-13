
import ClipPath from "../assets/svg/ClipPath";
import { testimonials } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";

import reviewVideo from "../assets/review.mp4"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Gradient } from "./design/Hero";
import CustomVideoPlayer from "./CustomVideoPlayer";

const Testimonials = () => {
    return (
        <Section id="testimonials">
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="What Our Users Say About "
                    accent="HearMate"
                />
                {/* <div className="flex flex-wrap gap-10 mb-10"> */}
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 15 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    direction="horizontal"
                    pagination={{ clickable: true }}
                    grabCursor={true}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000, // 3 seconds per slide 
                        disableOnInteraction: false // Keeps autoplay even when user swipes
                    }}
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="w-full max-w-[24rem] rounded-2xl shadow-lg border transition-all duration-300 overflow-hidden flex flex-col h-full">
                                <div className="flex flex-col p-6 flex-grow">
                                    {/* User info with avatar */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="size-20 rounded-full overflow-hidden border-2 border-color-2/50">
                                                <img
                                                    src={item.displayPicture}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-n-7">
                                                {item.name.split(",")[0]}
                                                <span className="block text-sm font-normal text-n-4">
                                                    {item.name.split(",").slice(1).join(",")}
                                                </span>
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Review text with read more functionality */}
                                    <div className="mb-6 flex-grow">
                                        <div className="relative">
                                            <p className={`text-n-6 italic leading-relaxed ${item.review.length > 150 ? 'line-clamp-4' : ''}`}>
                                                &ldquo;{item.review}&rdquo;
                                            </p>
                                            {item.review.length > 150 && (
                                                <button
                                                    className="text-color-1 font-medium text-sm mt-2 hover:underline focus:outline-none"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        const paragraph = e.target.previousElementSibling;
                                                        paragraph.classList.toggle('line-clamp-4');
                                                        e.target.textContent = paragraph.classList.contains('line-clamp-4')
                                                            ? 'View More'
                                                            : 'View Less';
                                                    }}
                                                >
                                                    View More
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Rating section */}
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`text-xl ${i < item.rating ? 'text-amber-400' : 'text-n-3'}`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <div className="bg-color-1/10 px-3 py-1 rounded-full">
                                            <p className="font-code text-sm font-bold text-color-1">
                                                {item.rating.toFixed(1)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative accent */}
                                <div className="h-2 w-full bg-gradient-to-r from-color-1 to-color-2"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* </div> */}

                <div className="mt-32">
                    <div>

                    </div>
                    {/* <Swiper> */}



                    <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                        <div className="relative z-1 p-1 rounded-2xl bg-conic-gradient ">
                            <div className="relative bg-n-8 rounded-[1rem]">
                                {/* <div className="h-[1.4rem] bg-n-6 rounded-t-[0.9rem]"></div> */}
                                <div className="aspect rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                    {/* <video
                                        className="w-full object-cover rounded-lg"
                                        src={reviewVideo}
                                        controls
                                        loop
                                        muted
                                        playsInline
                                        onLoadedMetadata={(e) => console.log("Video loaded", e.target)}
                                    ></video> */}
                                    <CustomVideoPlayer src={reviewVideo} />

                                </div>
                            </div>
                            {/* <Gradient /> */}
                        </div>
                        <div className="my-3 text-xl">
                            Luis Rodgriguez,
                            Madrid, Spain
                        </div>
                    </div>
                    {/* </Swiper> */}
                </div>
            </div>

        </Section >
    );
};

export default Testimonials;
