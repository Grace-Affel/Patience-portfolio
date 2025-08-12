import React from "react";
import Slider from "react-slick";

import flyerImg from "../assets/flyer.jpg";
import video1 from "../assets/youtube.mp4";
import video2 from "../assets/facebook.mp4";
import video3 from "../assets/you.mp4";
import video4 from "../assets/tiktok.mp4";
import metricsImg from "../assets/metrics.PNG";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const DigitalMarketingWorks = () => {
  const videos = [
    { id: 1, src: video1, title: "Instagram Ad Campaign" },
    { id: 2, src: video2, title: "Facebook Promotion" },
    { id: 3, src: video3, title: "YouTube Short" },
    { id: 4, src: video4, title: "TikTok Engagement Video" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    swipeToSlide: true,
    pauseOnHover: true,
    appendDots: dots => (
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex", gap: "12px" }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          backgroundColor: "#42495D",
          opacity: 0.35,
          cursor: "pointer",
          transition: "opacity 0.3s",
        }}
        className="slick-dot-custom"
      />
    ),
  };

  return (
    <section
      className="bg-white flex items-center justify-center py-12 px-4"
    >
      <div
        className="max-w-5xl w-full py-12 px-6 rounded-3xl shadow-lg"
        style={{ background: "linear-gradient(135deg, #42495D 0%, #7996D0 100%)" }}
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-10 select-none">
          📱 Digital Marketing Works
        </h2>

        <Slider {...settings} className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-lg cursor-default mx-auto bg-white">
            <img
              src={metricsImg}
              alt="Campaign Metrics"
              className="object-contain w-full max-h-[500px] mx-auto rounded-3xl"
            />
            <div
              className="absolute bottom-6 left-6 px-6 py-4 rounded-lg shadow-md text-white max-w-[85%]"
              style={{
                background: "linear-gradient(90deg, #7996D0 0%, #42495D 100%)",
              }}
            >
              <h3 className="text-3xl font-bold mb-1 select-none">
                📊 Campaign Metrics
              </h3>
              <p className="text-lg select-none">
                Performance & engagement overview
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-lg bg-white cursor-default mx-auto">
            <img
              src={flyerImg}
              alt="Featured Marketing Work"
              className="object-contain w-full max-h-[500px] mx-auto rounded-3xl"
            />
            <div
              className="absolute bottom-6 left-6 px-6 py-3 rounded-lg shadow-md text-white max-w-[75%]"
              style={{
                background: "linear-gradient(90deg, #7996D0 0%, #42495D 100%)",
              }}
            >
              <h3 className="text-xl font-semibold select-none">
                Featured Campaign
              </h3>
              <p className="text-sm select-none">
                High-engagement ad design
              </p>
            </div>
          </div>

          {videos.map((video) => (
            <div
              key={video.id}
              className="relative overflow-hidden rounded-2xl shadow-md bg-white cursor-default mx-auto"
            >
              <video
                src={video.src}
                muted
                loop
                autoPlay
                playsInline
                className="object-contain w-full max-h-[500px] mx-auto rounded-2xl"
              />
              <div
                className="absolute bottom-4 left-4 px-4 py-2 rounded-md shadow-md text-white max-w-[80%]"
                style={{
                  background: "linear-gradient(90deg, #7996D0 0%, #42495D 100%)",
                }}
              >
                <p className="text-sm font-medium select-none">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        <style>{`
          .slick-arrow {
            background: #7996D0;
            border-radius: 50%;
            width: 38px;
            height: 38px;
            z-index: 10;
            opacity: 0.75;
            transition: opacity 0.3s ease;
          }
          .slick-arrow:hover {
            opacity: 1;
            background: #42495D;
          }
          .slick-prev {
            left: 8px;
          }
          .slick-next {
            right: 8px;
          }
          .slick-prev:before, .slick-next:before {
            color: white;
            font-size: 24px;
            font-weight: bold;
            line-height: 38px;
            opacity: 1;
          }
          .slick-dot-custom.slick-active {
            opacity: 1 !important;
            background-color: #42495D !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default DigitalMarketingWorks;
