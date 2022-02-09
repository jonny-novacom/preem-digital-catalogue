import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";

import { GoChevronRight, GoChevronLeft } from "react-icons/go";

export default function IndustrialCarousel() {
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

  const { industrialproductcarousel } = useStaticQuery(graphql`
    query {
      industrialproductcarousel: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          featured: { eq: true }
          productCategory: {
            elemMatch: {
              title: {
                regex: "/(Transmission oils)|(Form oils)|(Hydraulic oils)|(Industrial Gear Oils)|(Compressor and Air Tool Oils)|(Refrigeration compressor oils)|(Turbine and circulation oils)|(Guide oils, saw chain oils)|(Process, white, transformed heat transfer oils)|(Metalworking, rust protection)|(Bearing greases)|(Synthetic greases)|(Sliding surfaces, chassis and teeth greases)|(Food grade NSF H1 greases)|(Coolants and washer fluid)|(Brake fluid)|(Cold degreasers and solvents)|(Fuel additive)|(Fuel for petrol engines)|(Fuel for diesel engines)|(Food grade (NSF H1) greases)/"
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
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          productCategory {
            title
          }
        }
      }
    }
  `);

  const theindustrialproductcarousel = industrialproductcarousel.nodes;
  return (
    <div className="px-10">
      <Slider {...settings}>
        {theindustrialproductcarousel.map((industrialproductcarousel, i) => (
          <div className="p-1 bg-white" key={i}>
            <div className="p-4 bg-gray-50">
              <Link to={`/products/${industrialproductcarousel.slug.current}`}>
                <GatsbyImage
                  image={
                    industrialproductcarousel.mainImage.asset.localFile
                      .childImageSharp.gatsbyImageData
                  }
                  alt={industrialproductcarousel.produkt}
                  className="block mx-auto"
                  imgStyle={{ objectFit: "contain" }}
                />
                <h3 className="mt-2 text-lg font-bold leading-snug text-center text-preemGreen font-gothamNarrow h-14">
                  {industrialproductcarousel.produkt}{" "}
                  {industrialproductcarousel.sae}
                </h3>
              </Link>
              <span className="block h-20 mt-2 mb-4 text-sm font-normal leading-snug text-center text-gray-400 font-gothamNarrow">
                {industrialproductcarousel.shortDescription}
              </span>
              <div className="block mx-auto text-center">
                <Link
                  to={`/products/${industrialproductcarousel.slug.current}`}
                >
                  <span className="inline-block px-10 py-2 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow">
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
