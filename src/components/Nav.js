import { Link } from "gatsby";
import React from "react";

import logo from "../images/preem-logo.png";
import consumer from "../images/icons/consumer.svg";
import commercial from "../images/icons/commercial.svg";
import marine from "../images/icons/marine.svg";
import industrial from "../images/icons/industrial.svg";
import packaging from "../images/icons/packaging.svg";
import glossary from "../images/icons/glossary.svg";
import powerGen from "../images/icons/power-gen.svg";
import techInfo from "../images/icons/tech-info.svg";
import standards from "../images/icons/standards.svg";

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
                      <span className="inline-block w-20 pr-8">
                        {/* <img
                          src={consumer}
                          alt="Motoroljor Personbilar och lätta transportfordon"
                          className="block w-20 mx-auto max-h-10"
                        /> */}
                      </span>
                      <span className="inline-block font-bold align-top">
                        All products
                      </span>
                    </Link>
                  </li>

                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/consumer" onClick={closeNavBar}>
                      <span className="inline-block w-20 pr-8">
                        <img
                          src={consumer}
                          alt="Motoroljor Personbilar och lätta transportfordon"
                          className="block w-20 mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block font-bold align-top">
                        Motoroljor Personbilar och lätta transportfordon
                      </span>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/commercial" onClick={closeNavBar}>
                      <span className="inline-block w-20 pr-8">
                        <img
                          src={commercial}
                          alt="Motoroljor Tunga fordon"
                          className="block w-20 mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block mt-2 font-bold align-top">
                        Motoroljor Tunga fordon
                      </span>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/marine" onClick={closeNavBar}>
                      <span className="inline-block w-20 pr-8">
                        <img
                          src={marine}
                          alt="Marinmotoroljor"
                          className="block w-20 mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block mt-2 font-bold align-top">
                        Marinmotoroljor
                      </span>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/industrial" onClick={closeNavBar}>
                      <span className="inline-block w-20 pr-8">
                        <img
                          src={industrial}
                          alt="Industri"
                          className="block w-20 mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block mt-2 font-bold align-top">
                        Industri
                      </span>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/transmission-oils" onClick={closeNavBar}>
                      <span className="inline-block w-20 pr-8">
                        {/* <img
                          src={industrial}
                          alt="Transmissionsoljor"
                          className="block w-20 mx-auto max-h-10"
                        /> */}
                      </span>
                      <span className="inline-block mt-2 font-bold align-top">
                        Transmissionsoljor
                      </span>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/chemicals" onClick={closeNavBar}>
                      <span className="inline-block w-20 pr-8">
                        <img
                          src={powerGen}
                          alt=" Kemprodukter och Bromsvätska"
                          className="block w-20 mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block mt-2 font-bold align-top">
                        Kemprodukter och Bromsvätska
                      </span>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen ">
                    <Link to="/standards" onClick={closeNavBar}>
                      <span className="inline-block w-20 pr-8">
                        <img
                          src={standards}
                          alt="Industri- och OEM-standarder Fordon"
                          className="block w-20 mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block mt-2 font-bold align-top">
                        Industri- och OEM-standarder Fordon
                      </span>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen ">
                    <Link to="/technical-information" onClick={closeNavBar}>
                      <span className="inline-block w-20 pr-8">
                        <img
                          src={techInfo}
                          alt="Technical Information"
                          className="block w-20 mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block mt-2 font-bold align-top">
                        Technical information
                      </span>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl font-gothamNarrow text-preemGreen">
                    <Link to="/packaging" onClick={closeNavBar}>
                      <span className="inline-block w-20 pr-8">
                        <img
                          src={packaging}
                          alt="Packaging"
                          className="block w-20 mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block mt-2 font-bold align-top">
                        Packaging
                      </span>
                    </Link>
                  </li>
                  <li className="h-16 py-2 text-xl align-middle font-gothamNarrow text-preemGreen">
                    <Link to="/glossary" onClick={closeNavBar}>
                      <span className="inline-block w-20 pr-8">
                        <img
                          src={glossary}
                          alt="Glossary"
                          className="block w-20 mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block mt-2 font-bold align-top">
                        Glossary
                      </span>
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
