import * as React from "react";

export default function TechnicalInformationPage() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40 px-4">
          <h1 className="font-gothamNarrow font-bold text-center text-3xl mb-2 text-preemGreen block">
            Teknisk information
          </h1>
          <h3 className="text-center text-preemYellow text-2xl font-bold font-gothamNarrow">
            SAE viskositetsklasser för motoroljor
          </h3>
          <p className="text-left text-gray-500 text-md font-gothamNarrow font-normal mt-2">
            Society of Automobile Engineers är en amerikansk organisation för
            standardisering inom bilindustrin. Dynamisk viskositet 1 cP = 1
            mPa*s Kinematisk viskositet 1 cSt = 1 mm<sup>2</sup>s
          </p>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
