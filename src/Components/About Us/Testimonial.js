import React from "react";
import "./Testimonial.css";
import { SwiperSlide, Swiper } from "swiper/react";

const Testimonial = () => {
  const testimonial_array = [
    {
      id: 1,
      icon: "icon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utmalesuada ante quis elit consectetur, ut aliquam lacus bibendum.",
      client: "John Doe",
      company: "CEO, Company Inc",
    },
    {
      id: 2,
      icon: "icon",
      content:
        "Nullam consequat metus quis ultrices luctus. Sed suscipit purus quis elit pharetra, vel euismod orci dapibus.",
      client: "Jane Smith",
      company: "CTO, Company Inc.",
    },
    {
      id: 3,
      icon: "icon",
      content:
        "Fusce ultrices turpis eget purus vestibulum, at pharetra nisl suscipit. Duis eget nibh ut odio gravida molestie.",
      client: "Bob Johnson",
      company: "CFO, Company Inc",
    },
  ];
  return (
    <div className="testimonial-slider">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        className="mySwiper"
      >
        {testimonial_array.map((items) => (
          <SwiperSlide key={items.id}>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  {items.content}
                  {console.log(items.id)}
                </p>
                <h4>{items.client}</h4>
                <span>{items.company}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
