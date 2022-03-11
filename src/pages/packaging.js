import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

export default function PackagingPage() {
  return (
    <>
      <SearchEngineOptimisation
        title="Emballage smörjmedel och kemtekniska produkter"
        image=""
        description=""
      />
      <div className="max-w-screen-md mx-auto">
        <div className="px-4 mt-40 mb-12">
          <h1 className="block mb-4 text-3xl font-bold text-center font-gothamNarrow text-preemGreen">
            Emballage smörjmedel och kemtekniska produkter
          </h1>
          <h3 className="mb-4 text-2xl font-medium text-center text-preemYellow font-gothamNarrow">
            Smörjolja
          </h3>
          <div className="grid grid-cols-1 border-t-8 border-black md:grid-cols-5">
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">Bulkleverans med tankbil</p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 000
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-1.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Bulkleverans med tankbil"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-52"
                />
              </div>
            </div>

            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Container (IBC/Cipax) 1 000 liter
                  <br />{" "}
                  <span className="font-normal ">
                    Töms genom spjällventil med 2 tumsanslutning.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 110
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-2.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Container (IBC/Cipax) 1 000 liter"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-36"
                />
              </div>
            </div>

            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Helfat olja
                  <br />{" "}
                  <span className="font-normal ">
                    Plåtfat med sprund, stort sprund 2 tum, litet sprund ¾ tum.
                    Standardinnehåll 208 liter. Avvikelse kan förekomma.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 200
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-3.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Helfat olja"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-52"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Dunk 20 liter
                  <br />{" "}
                  <span className="font-normal ">
                    Plastdunk. Kapsyl 60 mm.
                    <br />
                    Alt 1: 24 dunkar på en pall, 12 per lager.
                    <br />
                    Alt 2: 32 dunkar på en pall, 16 per lager.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 440
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-60"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Dunk 20 liter med hällpip
                  <br />{" "}
                  <span className="font-normal ">
                    Plastdunk med hällpip.
                    <br />
                    Hydraulic Oil HDZ 32 & 46, 1000 THF och Delo 400 MGX SAE
                    15W-40.
                    <br />
                    24 dunkar på en pall, 12 per lager.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 441
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-8.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter med hällpip"
                  layout={"constrained"}
                  className="block w-56 h-auto mx-auto"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Dunk 5 liter
                  <br />{" "}
                  <span className="font-normal ">
                    Alt 1: 3-pack, 90 per pall.
                    <br />
                    Alt 2: 4-pack, 144 per pall.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 625
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-9.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 5 liter"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-60"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Dunk 4 liter
                  <br />{" "}
                  <span className="font-normal ">
                    4 x 4 per kartong, 160 per pall.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 735
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-6.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 4 liter"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-60"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Flaska 1 liter
                  <br />{" "}
                  <span className="font-normal ">
                    Alt 1: 12 per lager, 480 per pall.
                    <br />
                    Alt 2: 12 per lager, 780 per pall.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 720
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-7.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Flaska 1 liter"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-60"
                />
              </div>
            </div>
          </div>
          <h3 className="mt-12 mb-4 text-2xl font-medium text-center text-preemYellow font-gothamNarrow">
            Smörjfett
          </h3>
          <div className="grid grid-cols-1 border-t-8 border-black md:grid-cols-5">
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Fluid bag 850 kg
                  <span className="font-normal ">
                    <br />
                    <a
                      href="https://www.fluid-bag.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.fluid-bag.com
                    </a>
                    <br />
                    Biogrease Heavy EP 2.
                    <br /> Speciell tömningsutrustning krävs.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 110
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-10.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Fluid bag 850 kg"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-36"
                />
              </div>
            </div>

            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Helfat 180 kg
                  <br />{" "}
                  <span className="font-normal ">
                    Ringlåsfat, hela locket lyfts bort.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 225{" "}
                  <span className="font-normal ">(med påse),</span> 226{" "}
                  <span className="font-normal "> (utan påse).</span>
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/texaco-barrel.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Helfat 180 kg"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-44"
                />
              </div>
            </div>

            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  ¼-fat 50 kg
                  <br />{" "}
                  <span className="font-normal ">
                    Ringlåsfat, hela locket lyfts bort.
                    <br /> 6 fat per pall.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 670
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/texaco-barrel.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="¼-fat 50 kg"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-44"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Hink 18 kg
                  <br />{" "}
                  <span className="font-normal ">
                    Konisk plåt- eller plasthink med snabblock.
                    <br />
                    Hela locket avlägsnas.
                    <br />
                    22 hinkar per pall, 11 per lager.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 650
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/18kg.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Hink 18 kg"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-28"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Plåtburk 0,5 kg
                  <br />{" "}
                  <span className="font-normal ">Copper Grease 9143.</span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 680
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/grease.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Plåtburk 0,5 kg"
                  layout={"constrained"}
                  className="block w-24 h-auto mx-auto"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Patron 0,4 kg
                  <br />{" "}
                  <span className="font-normal ">
                    Standard plastpatron.
                    <br /> 12 per kartong, 84 kartonger per pall (1008 st/pall).
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 850
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/patron-0-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Patron 0,4 kg"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-52"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  MLS-patron 0,4 kg
                  <br />{" "}
                  <span className="font-normal ">
                    Skruvpatron för MLS fettspruta.
                    <br /> Novatex Heavy EP 2 och Delo Starplex EP 2.
                    <br /> 12 per kartong, 84 kartonger per pall (1008 st/pall).
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 855
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/novatex.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="MLS-patron 0,4 kg"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-52"
                />
              </div>
            </div>
          </div>
          <h3 className="mt-12 mb-4 text-2xl font-medium text-center text-preemYellow font-gothamNarrow">
            Kemtekniskt emballage
          </h3>
          <div className="grid grid-cols-1 border-t-8 border-black md:grid-cols-5">
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Container (IBC/Cipax) 1 000 liter
                  <span className="font-normal ">
                    <br />
                    Töms genom spjällventil med 2 tumsanslutning.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 110
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-2.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Container (IBC/Cipax) 1 000 liter"
                  layout={"constrained"}
                  className="block w-40 h-auto mx-auto"
                />
              </div>
            </div>

            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Helfat kem 200 liter
                  <br />{" "}
                  <span className="font-normal ">
                    Standardinnehåll 200 liter. <br />
                    Avvikelse kan förkomma.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 200
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/200-litre.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Helfat kem 200 liter"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-60"
                />
              </div>
            </div>

            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Dunk 20 liter
                  <br />{" "}
                  <span className="font-normal ">
                    32 dunkar per pall, 12 per lager.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 440
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/20-litre.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-44"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">Dunk 4 liter, kem</p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 735
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/4-litre.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 4 liter, kem"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-60"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Flaska 0,25 liter
                  <br />{" "}
                  <span className="font-normal ">
                    Brake Fluid DOT 4.
                    <br />
                    24 per kartong, 2160 per pall.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 710
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/brake-fluid-dot-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Flaska 0,25 liter"
                  layout={"constrained"}
                  className="block h-auto mx-auto w-44"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Flaska 0,30 liter
                  <br />{" "}
                  <span className="font-normal ">
                    Techron D.
                    <br />
                    15 per kartong.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 930
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/techron-d-concentrate.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Flaska 0,30 liter"
                  layout={"constrained"}
                  className="block w-40 h-auto mx-auto"
                />
              </div>
            </div>
            <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
              <div>
                <p className="mb-0 font-medium">
                  Flaska 0,30 liter
                  <br />{" "}
                  <span className="font-normal ">
                    Techron Plus (Gasoline).
                    <br />
                    15 per kartong.
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0 font-medium">
                  <span className="font-normal ">Emballagekod:</span> 930
                </p>
              </div>
            </div>
            <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
              <div>
                <StaticImage
                  src="../images/packaging/techron-concentrate-plus.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Flaska 0,30 liter"
                  layout={"constrained"}
                  className="block w-40 h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
