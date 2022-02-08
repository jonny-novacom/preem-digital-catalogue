import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";

import { GoChevronRight, GoChevronLeft } from "react-icons/go";

export default function PowerGenCarousel() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GoChevronRight
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#333333",
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
      <GoChevronLeft
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#333333",
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

  const { powergenproductcarousel } = useStaticQuery(graphql`
    query {
      powergenproductcarousel: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          featured: { eq: true }
          productCategory: {
            elemMatch: {
              title: {
                regex: "/(Turbine and circulation oils)|(Stationary gas engines)/"
              }
            }
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

  const thepowergenproductcarousel = powergenproductcarousel.nodes;
  return (
    <div className="px-10">
      <Slider {...settings}>
        {thepowergenproductcarousel.map((powergenproductcarousel, i) => (
          <div className="bg-white p-1" key={i}>
            <div className="bg-gray-50 p-4">
              <Link to={`/products/${powergenproductcarousel.slug.current}`}>
                <GatsbyImage
                  image={
                    powergenproductcarousel.mainImage.asset.gatsbyImageData
                  }
                  alt={powergenproductcarousel.produkt}
                  className="block mx-auto"
                  imgStyle={{ objectFit: "contain" }}
                />
                <h3 className="text-center text-preemGreen text-lg font-bold font-gothamNarrow mt-2 h-12 leading-snug text-clip overflow-hidden">
                  {powergenproductcarousel.produkt}
                  <br />
                  {powergenproductcarousel.sae}
                </h3>
              </Link>
              <span className="text-center text-preemMediumGray text-sm font-gothamNarrow mt-2 mb-4 block leading-snug h-20 font-normal">
                {powergenproductcarousel.shortDescription}
              </span>
              <div className="block mx-auto text-center">
                <Link to={`/products/${powergenproductcarousel.slug.current}`}>
                  <span className="text-preemDarkGray py-2 px-10 hover:brightness-95 rounded-full font-gothamNarrow font-medium inline-block align-top bg-preemLightGray text-sm hover:text-preemGreen hover:bg-preemYellow transition-colors">
                    Find out more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
