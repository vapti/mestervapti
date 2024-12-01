import Card from "@/app/components/Card";

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
        <div className="text-4xl font-bold">Priser</div>
        <hr className="opacity-10 py-2" />
        <div className="rounded overflow-hidden shadow-lg flex md:flex-row flex-col gap-5">
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
      </div>
    </div>
  );
}
