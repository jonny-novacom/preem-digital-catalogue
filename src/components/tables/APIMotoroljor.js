import React from "react";

export default function APIMotoroljor() {
  return (
    <>
      <div>
        <h3 className="text-center text-preemYellow text-2xl font-medium font-gothamNarrow">
          API motoroljor
        </h3>
        <p className="text-left text-gray-500 text-md font-gothamNarrow font-normal mt-2 mb-0">
          American Petroleum Institute. Specifikationer för motoroljor.
        </p>
        <table className="table-auto w-full shadow-none font-gothamNarrow font-medium overflow-x-scroll">
          <tbody>
            <tr>
              <td colSpan={3}></td>
            </tr>
            <tr className="bg-white">
              <td colSpan={3} className="text-left">
                Bensinmotorer
              </td>
            </tr>
            <tr className="border-b-8 border-black bg-white">
              <td className="font-medium text-left pl-4">Kategori</td>
              <td className="px-6">Status</td>
              <td className="text-left">Beskrivning</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">API SP</td>
              <td>Aktuell</td>
              <td className="text-left">
                Introducerades i maj 2020 och är utformad för att ge skydd mot
                förtändning (LSPI), skydd mot kedjeslitage, ge bättre
                högtemperaturskydd mot beläggningar på kolvar och turboladdare
                samt strängare kontroll av slam och lackbildning. API SP med
                ”Resource Conserving” matchar ILSAC GF-6A genom att kombinera
                API SP-prestanda med förbättrad bränsleekonomi, skydd för
                avgasreningssystem och skydd för motorer som körs på bränslen
                innehållande etanol upp till E85.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SN</td>
              <td>Aktuell</td>
              <td className="text-left">För 2020 och äldre motorer</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SM</td>
              <td>Aktuell</td>
              <td className="text-left">För 2010 och äldre motorer</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SL</td>
              <td>Aktuell</td>
              <td className="text-left">För 2004 och äldre motorer</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SJ</td>
              <td>Aktuell</td>
              <td className="text-left">För 2001 och äldre motorer</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SH</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1996.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SG</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1993.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SF</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1988.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SE</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1979.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SD</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1971.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SC</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1967.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SB</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1951.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">SA</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: innehåller ej additiv. Olämplig för motorer tillverkade
                efter 1930.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="my-6"></div>
        <table className="table-auto w-full shadow-none font-gothamNarrow font-medium">
          <tbody>
            <tr>
              <td colSpan={3}></td>
            </tr>
            <tr className="bg-white">
              <td colSpan={3} className="text-left">
                Dieselmotorer
              </td>
            </tr>
            <tr className="border-b-8 border-black bg-white">
              <td className="font-medium text-left pl-4">Kategori</td>
              <td className="px-6">Status</td>
              <td className="text-left">Beskrivning</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">FA-4</td>
              <td>Aktuell</td>
              <td className="text-left">
                Motoroljor med viskositet XW-30, speciellt formulerad för att
                möta 2017 års modeller av tunga 4-T-fordon tillverkade för att
                möta de nya emissionskraven av växthusgaser. Oljorna är
                formulerade för dieselbränsle med svavelhalt {"<"}15 ppm. Kan ej
                ersättas med och är ej bakåtkompatibel med API CK-4, CJ-4, CI-4,
                CI-4 PLUS, CI-4, och CH-4 oljor. HTHS-viskositet mellan
                2.9cP-3.2cP för att bidra till minskning av växthusgaser. Dessa
                oljor bidrar effektivt till bibehållen funktion och livslängd av
                avgasreningsutrustning. Oljorna är framtagna för att bidra till
                förbättrat skydd mot oxidation, viskositetsminskning pga av
                skjuvning, motorslitage, avlagringar på kolvringar, sotrelaterad
                viskositetsökning samt skydda katalysator och partikelfilter mot
                igensättning.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CK-4</td>
              <td>Aktuell</td>
              <td className="text-left">
                Oljor för snabbgående 4-takts dieselmotorer konstruerade för att
                möta avgas- emissionskraven 2017 on-highway och Tier 4 Nonroad
                samt även tidigare modeller av dieselmotorer. Oljorna är
                formulerade för dieselbränsle med en svavelhalt {"<"}500ppm. Men
                användning av dessa oljor i kombination med dieselbränsle
                innehållande mer än 15 ppm svavel kan skada
                avgasrenings-utrustningens livslängd och/eller påverka
                oljebytesintervallen.API CK-4 överträffar API CJ-4, CI-4+, CI-4,
                CH-4, CG-4 samt CF-4 och kan användas för motorer som kräver
                dessa specifikationer. Vid svavelhalter {">"}15 ppm, kontrollera
                manualen för bytesintervall.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CJ-4</td>
              <td>Aktuell</td>
              <td className="text-left">
                Olja för snabbgående 4-takts dieselmotorer konstruerade för att
                möta avgas-emissionskrav 2010 on-highway och Tier 4 Nonroad samt
                även tidigare modeller av dieselmotorer. Oljorna är formulerade
                för dieselbränsle med en svavelhalt {"<"}500 ppm. CJ-4 oljorna
                bevarar effektiviteten på partikelfilter och andra avancerade
                avgasbehandlingssystem. Optimalt skydd mot
                katalysatorförgiftning, partikelfilterblockering, motorslitage,
                beläggningar på kolvar, låg- och högtemperaturstabilitet,
                sothantering, oxidation, skumning och nedskjuvning. API CJ-4
                överträffar API CI-4+, CI-4, CH-4, CG-4 samt CF-4 och kan
                användas för motorer som har krav på de specifikationerna. Vid
                svavelhalter {">"}15 ppm, kontrollera manualen för
                bytesintervall.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CI-4</td>
              <td>Aktuell</td>
              <td className="text-left">
                Introducerad 2002. Olja för snabbgående 4-takts dieselmotorer
                konstruerade för att möta 2004 års avgasemissionskrav. CI-4 är
                formulerad för motorer med EGR. Svavelhalt bränsle {"<"}0,5%.
                Kan ersätta oljor som har CD, CE, CF-4 och CH-4. Vissa
                CI-4-oljor möter även CI-4+.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CH-4</td>
              <td>Aktuell</td>
              <td className="text-left">
                Svavelhalt bränsle {"<"}0,5%. Olja för snabbgående 4-takts
                dieselmotorer konstruerade för att möta 1998 års
                avgasemissionskrav. Svavelhalt bränsle {"<"}0,5%. Kan ersätta
                CD-, CE-, CF-4- och CG-4-oljor.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CG-4</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1995. Olja för snabbgående 4-takts dieselmotorer
                konstruerade för att möta 1994 års avgasemissionskrav.
                Svavelhalt bränsle {"<"}0,5%. Kan ersätta CD-, CE-, och
                CF-4-oljor.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CF-4</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1990. För snabbgående 4-takts dieselmotorer med
                eller utan turbo. Kan ersätta CD- och CE-oljor.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CF-2</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1994. För 2-takts dieselmotorer. Kan ersätta CD-II
                olja.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CF</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1994. För off-road, indirekt insprutning och andra
                motorer. Även svavel {">"}0,5%. Kan ersätta CD.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CE</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1985. För snabbgående 4-takts dieselmotorer med
                eller utan turbo. Kan ersätta CC- och CD-oljor.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CD-II</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1995. För 2-takts motorer.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CD</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1955. För vissa motorer med och utan turbo.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CC</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för dieselmotorer tillverkade efter 1990.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CB</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för dieselmotorer tillverkade efter 1961.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium text-left pl-4">CA</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för dieselmotorer tillverkade efter 1959.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
