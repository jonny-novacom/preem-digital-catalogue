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

import { MdMenu, MdClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Slide from "../utils/slide";

export default function Nav() {
  const { navBarIsToggled, setNavBar, closeNavBar } = useGlobalContext();

  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-lg mx-auto bg-white">
          <nav className="font-sans flex text-center flex-row justify-between py-4 px-12 bg-white items-baseline fixed top-0 z-50 w-screen max-w-screen-lg">
            <div className="mb-2">
              <button
                onClick={setNavBar}
                className="items-center block hover:text-black hover:border-black"
              >
                <span>
                  {!navBarIsToggled ? (
                    <MdMenu className="text-4xl -mt-12 block text-preemMediumGray" />
                  ) : (
                    <MdClose className="text-4xl -mt-12 block text-preemDarkGray" />
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
                <IoSearchOutline className="text-4xl -mt-12 block text-preemMediumGray" />
              </Link>
            </div>
          </nav>

          <div className="fixed z-40 block top-28 w-screen">
            <Slide direction={-1} distance={1000} isActive={navBarIsToggled}>
              <div className="w-full md:w-2/3 h-screen bg-white p-8">
                <ul>
                  <li className="font-gothamNarrow text-xl text-preemGreen py-2 h-16">
                    <Link to="/consumer" onClick={closeNavBar}>
                      <span className="w-20 inline-block pr-8">
                        <img
                          src={consumer}
                          alt="Consumer"
                          className="w-20 block mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block align-top font-bold">
                        Consumer
                      </span>
                    </Link>
                  </li>
                  <li className="font-gothamNarrow text-xl text-preemGreen py-2  h-16">
                    <Link to="/commercial" onClick={closeNavBar}>
                      <span className="w-20 inline-block pr-8">
                        <img
                          src={commercial}
                          alt="Commercial"
                          className="w-20 block mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block align-top mt-2 font-bold">
                        Commercial
                      </span>
                    </Link>
                  </li>
                  <li className="font-gothamNarrow text-xl text-preemGreen py-2 h-16">
                    <Link to="/power-generation" onClick={closeNavBar}>
                      <span className="w-20 inline-block pr-8">
                        <img
                          src={powerGen}
                          alt="Power Generation"
                          className="w-20 block mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block align-top mt-2 font-bold">
                        Power generation
                      </span>
                    </Link>
                  </li>
                  <li className="font-gothamNarrow text-xl text-preemGreen py-2 h-16">
                    <Link to="/marine" onClick={closeNavBar}>
                      <span className="w-20 inline-block pr-8">
                        <img
                          src={marine}
                          alt="Marine"
                          className="w-20 block mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block align-top mt-2 font-bold">
                        Marine
                      </span>
                    </Link>
                  </li>
                  <li className="font-gothamNarrow text-xl text-preemGreen py-2 h-16">
                    <Link to="/industrial" onClick={closeNavBar}>
                      <span className="w-20 inline-block pr-8">
                        <img
                          src={industrial}
                          alt="Industrial"
                          className="w-20 block mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block align-top mt-2 font-bold">
                        Industrial
                      </span>
                    </Link>
                  </li>
                  <li className="font-gothamNarrow text-xl text-preemGreen py-2 h-16 ">
                    <Link to="/standards" onClick={closeNavBar}>
                      <span className="w-20 inline-block pr-8">
                        <img
                          src={standards}
                          alt="Industry/OEM Standards"
                          className="w-20 block mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block align-top mt-2 font-bold">
                        Industry/OEM Standards
                      </span>
                    </Link>
                  </li>
                  <li className="font-gothamNarrow text-xl text-preemGreen py-2 h-16 ">
                    <Link to="/technical-information" onClick={closeNavBar}>
                      <span className="w-20 inline-block pr-8">
                        <img
                          src={techInfo}
                          alt="Technical Information"
                          className="w-20 block mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block align-top mt-2 font-bold">
                        Technical information
                      </span>
                    </Link>
                  </li>
                  <li className="font-gothamNarrow text-xl text-preemGreen py-2 h-16">
                    <Link to="/packaging" onClick={closeNavBar}>
                      <span className="w-20 inline-block pr-8">
                        <img
                          src={packaging}
                          alt="Packaging"
                          className="w-20 block mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block align-top mt-2 font-bold">
                        Packaging
                      </span>
                    </Link>
                  </li>
                  <li className="font-gothamNarrow text-xl text-preemGreen py-2 align-middle  h-16">
                    <Link to="/glossary" onClick={closeNavBar}>
                      <span className="w-20 inline-block pr-8">
                        <img
                          src={glossary}
                          alt="Glossary"
                          className="w-20 block mx-auto max-h-10"
                        />
                      </span>
                      <span className="inline-block align-top mt-2 font-bold">
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
