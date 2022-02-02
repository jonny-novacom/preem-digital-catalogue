import React from "react";

export default function ACEAMotoroljor() {
  return (
    <>
      <div>
        <h3 className="text-center text-preemYellow text-2xl font-medium font-gothamNarrow">
          ACEA motoroljor 2016
        </h3>
        <p className="text-left text-gray-500 text-md font-gothamNarrow font-normal mt-2">
          Bensin- och dieselmotorer i person- och lätta transportbilar.
        </p>
        <table className="table-auto w-full shadow-none font-gothamNarrow font-medium">
          <tbody>
            <tr className="border-b-8 border-black">
              <td className="text-left">Beteckning</td>
              <td>Viskositet cP high temp & high shear 150°C</td>
              <td>Sulfataska %</td>
              <td>SA = Sulfateradaska</td>
              <td>Bränslebesparing mot 15W-40%</td>
              <td>Beskrivning</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">
                A1/B1-12
                <br />
                <span className="font-normal">
                  (utgående: uppdateras ej efter ACEA 2012)
                </span>
              </td>
              <td>≥2,9 och ≤3,5; xW-20: min 2,6</td>
              <td>≤1,3</td>
              <td>High</td>
              <td>≥2,5</td>
              <td className="text-left">
                Viskositetsstabil olja för förlängda bytesintervaller. För
                motorer konstruerade för tunna lågfriktionsoljor. Olämplig för
                vissa motortyper.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">A3/B3</td>
              <td>≥3,5</td>
              <td>≥0,9 och ≤1,5</td>
              <td>High</td>
              <td>—</td>
              <td className="text-left">
                Viskositetsstabil olja för högprestanda motorer och för vissa
                motorer med förlängd bytesintervall eller hård belastning.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">A3/B4</td>
              <td>≥3,5</td>
              <td>≥1,0 och ≤1,6</td>
              <td>High</td>
              <td>—</td>
              <td className="text-left">
                Viskositetsstabil olja för högprestanda motorer och för vissa
                motorer med förlängd bytesintervall eller hård belastning. För
                direkt-insprutade dieselmotorer.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">A5/B5</td>
              <td>≥2,9 och ≤3,5</td>
              <td>≤1,6</td>
              <td>High</td>
              <td>≥2,5</td>
              <td className="text-left">
                Viskositetsstabil olja för förlängda bytesintervaller. För
                högprestanda- motorer konstruerade för tunna lågfriktionsoljor.
                Olämplig för vissa motortyper.
              </td>
            </tr>
            <tr>
              <td colSpan={6} className="font-medium text-left pl-4">
                Oljor för motorer med trevägskatalysator och
                dieselpartikelfilter
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">C1</td>
              <td>≥2,9</td>
              <td>≤0,5</td>
              <td>Low</td>
              <td>≥3,0</td>
              <td className="text-left">
                Viskositetsstabil olja för hög-prestanda motorer konstruerade
                för tunna lågfriktionsoljor. Lägst SAPS, olämplig för vissa
                motortyper.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">C2</td>
              <td>≥2,9</td>
              <td>≤0,8</td>
              <td>Mid</td>
              <td>≥2,5</td>
              <td className="text-left">
                Viskositetsstabil olja för hög-prestanda motorer konstruerade
                för tunna lågfriktionsoljor. Olämplig för vissa motortyper.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">C3</td>
              <td>≥3,5</td>
              <td>≤0,8</td>
              <td>Mid</td>
              <td>≥1,0 (för xW-30)</td>
              <td className="text-left">
                Viskositetsstabil olja för hög-prestandamotorer. Olämplig för
                vissa motortyper.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">C4</td>
              <td>≥3,5</td>
              <td>≤0,5</td>
              <td>Low</td>
              <td>≥1,0 (för xW-30)</td>
              <td className="text-left">
                Viskositetsstabil olja för hög-prestandamotorer som kräver Low
                SAPS. Olämplig för vissa motortyper.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">
                C5
                <br />
                <span className="font-normal">(Ny i ACEA 2016)</span>
              </td>
              <td>≥2,6 och {"<"}2,9</td>
              <td>≤0,8</td>
              <td>Mid</td>
              <td>≥3,0</td>
              <td className="text-left">
                Viskositetsstabil olja för hög-prestanda motorer konstruerade
                för tunna lågfriktionsoljor. Lägsta HTHS, dvs höga krav på
                bränslebesparing. Olämplig för vissa motortyper. Bygger på A1/B1
                och C3, viskositet 0/5W-20.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
