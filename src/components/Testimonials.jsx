
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
                            <div
                                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%]  md:max-w-[24rem]"
                                style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                            >
                                <div className="relative z-2 flex flex-col p-6 pointer-events-none md:min-h-[30rem]">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="size-28 object-cover overflow-hidden rounded-full">
                                            <img
                                                src={item.displayPicture}
                                                alt={item.name}
                                                className="w-full h-full object-cover "
                                            />
                                        </div>
                                        <h3 className="text-base">
                                            {item.name.split(",")[0]}
                                            <br />
                                            {item.name.split(",").slice(1).join(",")}
                                        </h3>
                                    </div>
                                    <p className="body-2 mb-6 text-n-3">{item.review}</p>
                                    <div className="flex items-center mt-auto absolute bottom-4 right-6 ">
                                        {/* <img src={item.iconUrl} width={48} height={48} alt={item.name} /> */}
                                        <p className="ml-auto font-code text-base font-bold text-n-1 uppercase tracking-wider">
                                            Rating: {item.rating} <span className="text-lg">
                                                ⭐
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                {item.light && <GradientLight />}
                                <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
                                        {/* {item.displayPicture && (
                                            <img
                                                src={item.displayPicture}
                                                width={384}
                                                height={366}
                                                alt={item.name}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        )} */}
                                    </div>
                                </div>
                                <ClipPath />
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
                        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
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
                            <Gradient />
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
