import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

export default function MultipleItems() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsChevronRight
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#006341",
          height: "1.5rem",
          width: "1.5rem",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsChevronLeft
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#006341",
          height: "1.5rem",
          width: "1.5rem",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { productcarousel } = useStaticQuery(graphql`
    query {
      productcarousel: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          featured: { eq: true }
          productCategory: {
            elemMatch: { title: { eq: "Engine oils heavy vehicles" } }
          }
        }
      ) {
        nodes {
          produkt
          id
          shortDescription
          mainImage {
            asset {
              url
              id
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          productCategory {
            title
          }
        }
      }
    }
  `);

  const theproductcarousel = productcarousel.nodes;
  return (
    <div className="px-10">
      <Slider {...settings}>
        {theproductcarousel.map((productcarousel, i) => (
          <div className="bg-white p-2" key={i}>
            <div className="bg-gray-200 p-4">
              <GatsbyImage
                image={productcarousel.mainImage.asset.gatsbyImageData}
                alt={productcarousel.title}
                // alt={carousel.base.split("-").join(" ").split(".")[0]}
                className="block mx-auto"
                imgStyle={{ objectFit: "contain" }}
              />
              <h3 className="text-center text-preemGreen text-md font-bold font-gothamNarrow mt-4">
                {productcarousel.produkt}
              </h3>
              <span className="text-center text-gray-400 text-sm font-medium font-gothamNarrow mt-2 mb-4 block leading-snug h-20">
                {productcarousel.shortDescription}
              </span>
              <span className="bg-preemYellow w-5 h-5 rounded-full block mx-auto">
                <AiOutlineRight className="text-preemGreen inline-block -mt-2 ml-1 text-sm" />
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
