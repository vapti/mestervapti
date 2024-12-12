import Card from "@/app/components/Card";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Priser',
  description: 'SDM Chiptuning',
}

export default function Priser() {
  const cards = [
    {
      title: "Kloning af Styrebokse",
      note: "",
      price: 2500,
      color: "bg-red-200",
    },
    {
      title: "Normal Chiptuning (Motoroptimering)",
      note: "",
      price: 3000,
      color: "bg-gray-200",
    },
    {
      title: "Øko Chiptuning (Motoroptimering)",
      note: "",
      price: 3000,
      color: "bg-green-200",
    },
    {
      title: "Power Chiptuning (Motoroptimering)",
      note: "",
      price: 3000,
      color: "bg-yellow-200",
    },
  ];
  return (
    <div className="bg-neutral-900 py-20 w-full">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="text-white text-4xl font-bold">Priser</div>
        <hr className="opacity-10 py-2" />
        <div className="rounded overflow-hidden shadow-lg flex md:flex-row flex-col gap-5">
          <p className="text-white text-center font-bold">*ALT DER UDFØRES ER PÅ EGET ANSVAR*</p>
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              note={card.note}
              price={card.price}
              color={card.color}
            />
          ))}

          {/* <div className="flex flex-initial py-3">
          <div className="bg-gray-200 px-6 py-4 rounded">
            <div className="text-black font-bold text-xl mb-2">Adblue, EGR ventil, DPF, DTC, Popbang osv. </div>
            <p className="text-black text-base">
              2500,-
            </p>
          </div>
          </div> */}
        </div>

        <div className="text-white flex flex-col items-center">

        <div className="py-2 text-2xl font-bold pt-20 text-center">
            Tøv ikke med og kontakte os...
          </div>

          <button className="bg-white hover:opacity-30 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <a href="/kontaktos">Kontakt os idag!</a>
          </button>

        </div>
      </div>
    </div>
  );
}
