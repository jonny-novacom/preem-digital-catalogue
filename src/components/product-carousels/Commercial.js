import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";

export default function CommercialCarousel() {
  function NextArrow(props) {
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

  function PrevArrow(props) {
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const { commercialproductcarousel } = useStaticQuery(graphql`
    query {
      commercialproductcarousel: allSanityProduct(
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
          sae
          slug {
            current
          }
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

  const thecommercialproductcarousel = commercialproductcarousel.nodes;
  return (
    <div className="px-10">
      <Slider {...settings}>
        {thecommercialproductcarousel.map((commercialproductcarousel, i) => (
          <div className="bg-white p-1" key={i}>
            <div className="bg-gray-50 p-4">
              <Link to={`/products/${commercialproductcarousel.slug.current}`}>
                <GatsbyImage
                  image={
                    commercialproductcarousel.mainImage.asset.gatsbyImageData
                  }
                  alt={commercialproductcarousel.produkt}
                  className="block mx-auto"
                  imgStyle={{ objectFit: "contain" }}
                />
                <h3 className="text-center text-preemGreen text-lg font-bold font-gothamNarrow mt-2 h-14 leading-snug">
                  {commercialproductcarousel.produkt}{" "}
                  {commercialproductcarousel.sae}
                </h3>
              </Link>
              <span className="text-center text-gray-400 text-sm font-gothamNarrow mt-2 mb-4 block leading-snug h-20 font-normal">
                {commercialproductcarousel.shortDescription}
              </span>
              <Link to={`/products/${commercialproductcarousel.slug.current}`}>
                <span className="bg-preemYellow w-6 h-6 rounded-full block mx-auto mt-2">
                  <GoChevronRight
                    className="text-preemGreen text-xl text-center block mx-auto my-auto"
                    style={{ paddingTop: "3px", paddingLeft: "2px" }}
                  />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}