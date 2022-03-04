import { Link } from "gatsby";
import React from "react";

import logo from "../images/preem-logo.png";
import consumer from "../images/icons/consumer.svg";
import commercial from "../images/icons/commercial.svg";
import marine from "../images/icons/marine.svg";
import industrial from "../images/icons/industrial.svg";
import packaging from "../images/icons/packaging.svg";
import glossary from "../images/icons/glossary.svg";
import transOil from "../images/icons/trans-oil.svg";
import techInfo from "../images/icons/tech-info.svg";
import standards from "../images/icons/standards.svg";
import allProducts from "../images/icons/all-products.svg";
import chemicals from "../images/icons/chemicals.svg";

import { useGlobalContext } from "../utils/context";

import { IoSearchOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import Slide from "../utils/slide";

export default function Nav() {
  const { navBarIsToggled, setNavBar, closeNavBar } = useGlobalContext();

  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-lg mx-auto bg-white">
          <nav className="fixed top-0 z-50 flex flex-row items-baseline justify-between w-screen max-w-screen-lg px-12 py-4 font-sans text-center bg-white">
            <div className="mb-2">
              <button
                onClick={setNavBar}
                className="items-center block h-16 pt-8 hover:text-black hover:border-black no-print"
              >
                <span>
                  {!navBarIsToggled ? (
                    <HiOutlineMenu className="inline-block -mt-12 text-4xl text-preemMediumGray" />
                  ) : (
                    <CgClose className="inline-block -mt-12 text-4xl text-preemDarkGray" />
                  )}
                </span>
              </button>
            </div>

            <div className="">
              <Link to="/">
                <img src={logo} alt="Preem" className="w-20" />
              </Link>
            </div>

            <div className="mb-2">
              <Link to="/search">
                <IoSearchOutline className="block -mt-12 text-4xl text-preemMediumGray no-print" />
              </Link>
            </div>
          </nav>

          <div className="fixed z-50 block w-screen top-28">
            <Slide direction={-1} distance={1000} isActive={navBarIsToggled}>
              <div className="w-full h-screen p-8 bg-white md:w-2/3">
                <ul>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/all-products" onClick={closeNavBar}>
                      <div className="flex">
                        <div className="flex-none">
                          <span className="inline-block w-20 pr-8">
                            <img
                              src={allProducts}
                              alt="All products"
                              className="block w-20 mx-auto max-h-10"
                            />
                          </span>
                        </div>
                        <div className="flex-auto">
                          <span className="inline h-10 font-bold align-middle">
                            All products
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/consumer" onClick={closeNavBar}>
                      <div className="flex">
                        <div className="flex-none">
                          <span className="inline-block w-20 pr-8">
                            <img
                              src={consumer}
                              alt="Motoroljor Personbilar och lätta transportfordon"
                              className="block w-20 mx-auto max-h-10"
                            />
                          </span>
                        </div>
                        <div className="flex-auto">
                          <span className="inline mt-2 font-bold align-top">
                            Motoroljor Personbilar och lätta transportfordon
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/commercial" onClick={closeNavBar}>
                      <div className="flex">
                        <div className="flex-none">
                          <span className="inline-block w-20 pr-8">
                            <img
                              src={commercial}
                              alt="Motoroljor Tunga fordon"
                              className="block w-20 mx-auto max-h-10"
                            />
                          </span>
                        </div>
                        <div className="flex-auto">
                          <span className="inline h-10 mt-2 font-bold align-middle">
                            Motoroljor Tunga fordon
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/marine" onClick={closeNavBar}>
                      <div className="flex">
                        <div className="flex-none">
                          <span className="inline-block w-20 pr-8">
                            <img
                              src={marine}
                              alt="Marinmotoroljor"
                              className="block w-20 mx-auto max-h-10"
                            />
                          </span>
                        </div>
                        <div className="flex-auto">
                          <span className="inline h-10 mt-2 font-bold align-middle">
                            Marinmotoroljor
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/industrial" onClick={closeNavBar}>
                      <div className="flex">
                        <div className="flex-none">
                          <span className="inline-block w-20 pr-8">
                            <img
                              src={industrial}
                              alt="Industri"
                              className="block w-20 mx-auto max-h-10"
                            />
                          </span>
                        </div>
                        <div className="flex-auto">
                          <span className="inline h-10 mt-2 font-bold align-middle">
                            Industri
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/transmission-oils" onClick={closeNavBar}>
                      <div className="flex">
                        <div className="flex-none">
                          <span className="inline-block w-20 pr-8">
                            <img
                              src={transOil}
                              alt="Transmissionsoljor"
                              className="block w-20 mx-auto max-h-10"
                            />
                          </span>
                        </div>
                        <div className="flex-auto">
                          <span className="inline h-10 mt-2 font-bold align-middle">
                            Transmissionsoljor
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/chemicals" onClick={closeNavBar}>
                      <div className="flex">
                        <div className="flex-none">
                          <span className="inline-block w-20 pr-8">
                            <img
                              src={chemicals}
                              alt=" Kemprodukter och Bromsvätska"
                              className="block w-20 mx-auto max-h-10"
                            />
                          </span>
                        </div>
                        <div className="flex-auto">
                          <span className="inline h-10 mt-2 font-bold align-middle">
                            Kemprodukter och Bromsvätska
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen ">
                    <Link to="/standards" onClick={closeNavBar}>
                      <div className="flex">
                        <div className="flex-none">
                          <span className="inline-block w-20 pr-8">
                            <img
                              src={standards}
                              alt="Industri- och OEM-standarder Fordon"
                              className="block w-20 mx-auto max-h-10"
                            />
                          </span>
                        </div>
                        <div className="flex-auto">
                          <span className="inline h-10 mt-2 font-bold align-middle">
                            Industri- och OEM-standarder Fordon
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen ">
                    <Link to="/technical-information" onClick={closeNavBar}>
                      <div className="flex">
                        <div className="flex-none">
                          <span className="inline-block w-20 pr-8">
                            <img
                              src={techInfo}
                              alt="Technical Information"
                              className="block w-20 mx-auto max-h-10"
                            />
                          </span>
                        </div>
                        <div className="flex-auto">
                          <span className="inline h-10 mt-2 font-bold align-middle">
                            Technical information
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/packaging" onClick={closeNavBar}>
                      <div className="flex">
                        <div className="flex-none">
                          <span className="inline-block w-20 pr-8">
                            <img
                              src={packaging}
                              alt="Packaging"
                              className="block w-20 mx-auto max-h-10"
                            />
                          </span>
                        </div>
                        <div className="flex-auto">
                          <span className="inline h-10 mt-2 font-bold align-middle">
                            Packaging
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl align-middle font-gothamNarrow text-preemGreen">
                    <Link to="/glossary" onClick={closeNavBar}>
                      <div className="flex">
                        <div className="flex-none">
                          <span className="inline-block w-20 pr-8">
                            <img
                              src={glossary}
                              alt="Glossary"
                              className="block w-20 mx-auto max-h-10"
                            />
                          </span>
                        </div>
                        <div className="flex-auto">
                          <span className="inline h-10 mt-2 font-bold align-middle">
                            Glossary
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
}
