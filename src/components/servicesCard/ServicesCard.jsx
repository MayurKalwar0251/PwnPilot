import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "../../assets/blue-team.png";

const ServicesCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rows: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
        }}
        onClick={onClick}
      ></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          fontSize: "40px",
        }}
        onClick={onClick}
      ></div>
    );
  }

  const truncateReview = (review) => {
    const words = review.split(" ");
    return words.length > 20 ? words.slice(0, 20).join(" ") + "..." : review;
  };

  return (
    <div className="bg-[#14161b] pb-20">
      <div className="w-3/4 m-auto py-20">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white h-auto text-black rounded-xl"
              >
                <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-base text-center font-semibold">
                    {d.name}
                  </p>
                  <p className="text-center text-sm">
                    {truncateReview(d.review)}
                  </p>
                  <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: "Network Penetration Testing",
    img: Img,
    review:
      "Identify and mitigate vulnerabilities within your network infrastructure to defend against potential cyber threats and unauthorized access.",
  },
  {
    name: "Web Application Security Testing",
    img: Img,
    review:
      "Uncover and fix security flaws in web applications to protect against attacks like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).",
  },
  {
    img: Img,
    name: "Mobile Application Penetration Testing",
    review:
      "Evaluate the security of mobile applications on various platforms to ensure data integrity, privacy, and protection against unauthorized access.",
  },
  {
    img: Img,
    name: "API Security Testing",
    review:
      "Ensure your APIs are secure by identifying vulnerabilities that could expose sensitive data or allow unauthorized operations.",
  },
  {
    img: Img,
    name: "Wireless Penetration Testing",
    review:
      "Assess the security of your wireless networks to identify weaknesses in encryption, authentication, and configuration settings.",
  },
  {
    img: Img,
    name: "OT And IoT Penetration Testing",
    review:
      "Evaluate the security of operational technology and Internet of Things devices to ensure they are resilient against cyber attacks and breaches.",
  },
  {
    img: Img,
    name: "Cloud Penetration Testing",
    review:
      "Examine the security of your cloud infrastructure to identify vulnerabilities and ensure compliance with industry best practices for cloud security.",
  },
];

export default ServicesCard;
