import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

export default function PackagingPage() {
  return (
    <>
      <div className="max-w-screen-md mx-auto">
        <div className="mt-40 px-4 mb-12">
          <h1 className="font-gothamNarrow font-bold text-center text-3xl mb-4 text-preemGreen block">
            Emballage smörjmedel och kemtekniska produkter
          </h1>
          <h3 className="text-center text-preemYellow text-2xl font-medium font-gothamNarrow mb-4">
            Smörjolja
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 border-t-8 border-black">
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">Bulkleverans med tankbil</p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 000
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-1.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Bulkleverans med tankbil"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-52"
                />
              </div>
            </div>

            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
                  Container (IBC/Cipax) 1 000 liter
                  <br />{" "}
                  <span className="font-normal ">
                    Töms genom spjällventil med 2 tumsanslutning.
                  </span>
                </p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 110
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-2.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Container (IBC/Cipax) 1 000 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-36"
                />
              </div>
            </div>

            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
                  Helfat olja
                  <br />{" "}
                  <span className="font-normal ">
                    Plåtfat med sprund, stort sprund 2 tum, litet sprund ¾ tum.
                    Standardinnehåll 208 liter. Avvikelse kan förekomma.
                  </span>
                </p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 200
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-3.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Helfat olja"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-52"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
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
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 440
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-60"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
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
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 441
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-60"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
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
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 625
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-60"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
                  Dunk 4 liter
                  <br />{" "}
                  <span className="font-normal ">
                    4 x 4 per kartong, 160 per pall.
                  </span>
                </p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 735
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-60"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
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
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 720
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-60"
                />
              </div>
            </div>
          </div>
          <h3 className="text-center text-preemYellow text-2xl font-medium font-gothamNarrow mb-4 mt-12">
            Smörjfett
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 border-t-8 border-black">
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
                  Fluid bag 850 kg
                  <span className="font-normal ">
                    <br />
                    <a href="https://www.fluid-bag.com" target="_blank">
                      www.fluid-bag.com
                    </a>
                    <br />
                    Biogrease Heavy EP 2.
                    <br /> Speciell tömningsutrustning krävs.
                  </span>
                </p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 110
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-1.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Bulkleverans med tankbil"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-52"
                />
              </div>
            </div>

            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
                  Helfat 180 kg
                  <br />{" "}
                  <span className="font-normal ">
                    Ringlåsfat, hela locket lyfts bort.
                  </span>
                </p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 225{" "}
                  <span className="font-normal ">(med påse),</span> 226{" "}
                  <span className="font-normal "> (utan påse).</span>
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/texaco-barrel.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Helfat 180 kg"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-44"
                />
              </div>
            </div>

            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
                  ¼-fat 50 kg
                  <br />{" "}
                  <span className="font-normal ">
                    Ringlåsfat, hela locket lyfts bort.
                    <br /> 6 fat per pall.
                  </span>
                </p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 670
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/texaco-barrel.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="¼-fat 50 kg"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-44"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
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
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 650
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-60"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
                  Plåtburk 0,5 kg
                  <br />{" "}
                  <span className="font-normal ">Copper Grease 9143.</span>
                </p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 680
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-60"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
                  Patron 0,4 kg
                  <br />{" "}
                  <span className="font-normal ">
                    Standard plastpatron.
                    <br /> 12 per kartong, 84 kartonger per pall (1008 st/pall).
                  </span>
                </p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 850
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-60"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
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
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 855
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-60"
                />
              </div>
            </div>
          </div>
          <h3 className="text-center text-preemYellow text-2xl font-medium font-gothamNarrow mb-4 mt-12">
            Kemtekniskt emballage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 border-t-8 border-black">
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
                  Container (IBC/Cipax) 1 000 liter
                  <span className="font-normal ">
                    <br />
                    Töms genom spjällventil med 2 tumsanslutning.
                  </span>
                </p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 110
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-1.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Bulkleverans med tankbil"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-52"
                />
              </div>
            </div>

            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
                  Helfat kem 200 liter
                  <br />{" "}
                  <span className="font-normal ">
                    Standardinnehåll 200 liter. <br />
                    Avvikelse kan förkomma.
                  </span>
                </p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 200
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-2.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Container (IBC/Cipax) 1 000 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-36"
                />
              </div>
            </div>

            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
                  Dunk 20 liter
                  <br />{" "}
                  <span className="font-normal ">
                    32 dunkar per pall, 12 per lager.
                  </span>
                </p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 440
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-3.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Helfat olja"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-52"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">Dunk 4 liter, kem</p>
              </div>
              <div>
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 735
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/packaging-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Dunk 20 liter"
                  layout={"constrained"}
                  className="block mx-auto h-auto w-60"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
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
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 710
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/brake-fluid-dot-4.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Brake Fluid DOT 4."
                  layout={"constrained"}
                  className="block mx-auto h-auto w-44"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
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
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 930
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/techron-d-concentrate.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Techron D."
                  layout={"constrained"}
                  className="block mx-auto h-auto w-40"
                />
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-between p-4 bg-gray-50 md:col-span-3 border-b-2 border-white">
              <div>
                <p className="font-medium mb-0">
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
                <p className="font-medium mb-0">
                  <span className="font-normal ">Emballagekod:</span> 930
                </p>
              </div>
            </div>
            <div className="md:h-52 grid grid-cols-1 gap-4 content-center p-4 bg-gray-200 md:col-span-2 border-b-2 border-white">
              <div>
                <StaticImage
                  src="../images/packaging/techron-concentrate-plus.png"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Techron Plus (Gasoline)."
                  layout={"constrained"}
                  className="block mx-auto h-auto w-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
