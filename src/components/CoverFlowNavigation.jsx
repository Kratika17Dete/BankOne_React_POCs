import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Navigation,
  Mousewheel,
} from "swiper/modules";

import {
  cardOutline,
  personOutline,
  swapHorizontalOutline,
  gridOutline,
  helpCircleOutline,
  shieldOutline,
} from "ionicons/icons";

import { IonIcon } from "@ionic/react";

export default function CoverFlowNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Dashboard",
      subtitle: "Account Overview",
      icon: gridOutline,
    },
    {
      title: "Support",
      subtitle: "Service Requests & Messages",
      icon: helpCircleOutline,
    },
    {
      title: "My Account",
      subtitle: "All Accounts, Deposits & Loans",
      icon: personOutline,
    },
    {
      title: "Transfers & Payments",
      subtitle:
        "Recent Transfers, Saved Beneficiaries, Bill Payments & Templates",
      icon: swapHorizontalOutline,
    },
    {
      title: "My Cards",
      subtitle: "All Cards",
      icon: cardOutline,
    },
    {
      title: "My Profile",
      subtitle:
        "Personal Details, Preferences & Security Settings",
      icon: shieldOutline,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f6f6f7]">

      {/* ================= DESKTOP ================= */}

      <div className="hidden lg:flex h-screen items-center justify-center">

        <div className="w-full max-w-[1200px]">

          <Swiper
            modules={[
              EffectCoverflow,
              Navigation,
              Mousewheel,
            ]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            speed={600}
            grabCursor={true}
            mousewheel={true}
            navigation={true}
            onSlideChange={(swiper) =>
              setActiveIndex(swiper.realIndex)
            }
            coverflowEffect={{
              rotate: 0,
              stretch: -20,
              depth: 250,
              modifier: 2.5,
              scale: 0.82,
              slideShadows: false,
            }}
            className="h-[500px]"
          >
            {items.map((item, index) => (
              <SwiperSlide
                key={index}
                className="!w-[240px]"
              >
                <div
                  className="
                    relative
                    h-[340px]
                    bg-white
                    rounded-[24px]
                    shadow-xl
                    border
                    border-gray-100
                    p-5
                    overflow-hidden
                  "
                >
                  <IonIcon
                    icon={item.icon}
                    className="
                      text-[#f26b62]
                      text-xl
                    "
                  />

                  <h3 className="mt-6 text-xl font-semibold text-[#2c2c2c]">
                    {item.title}
                  </h3>

                  <p className="mt-24 text-xs leading-5 text-gray-500">
                    {item.subtitle}
                  </p>

                  <div
                    className="
                      absolute
                      left-5
                      right-5
                      bottom-5
                      h-[2px]
                      bg-gradient-to-r
                      from-[#f6c4ba]
                      to-[#f26b62]
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Indicators */}

          <div className="flex justify-center mt-8 gap-2">
            {items.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  activeIndex === index
                    ? "bg-[#f26b62]"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* ================= MOBILE ================= */}

      <div className="lg:hidden h-screen py-6">

        <Swiper
          direction="vertical"
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={16}
          loop={true}
          speed={500}
          mousewheel={true}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex)
          }
          modules={[Mousewheel]}
          className="h-full px-4"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>

              <div
                className={`
                  bg-white
                  rounded-[24px]
                  p-5
                  shadow-md
                  border
                  transition-all
                  duration-300
                  ${
                    activeIndex === index
                      ? "scale-100"
                      : "scale-95 opacity-80"
                  }
                `}
              >
                <IonIcon
                  icon={item.icon}
                  className="
                    text-[#f26b62]
                    text-lg
                  "
                />

                <h3 className="mt-4 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-5 text-gray-500">
                  {item.subtitle}
                </p>

                <div
                  className="
                    mt-5
                    h-[2px]
                    bg-gradient-to-r
                    from-[#f6c4ba]
                    to-[#f26b62]
                  "
                />
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </div>
  );
}