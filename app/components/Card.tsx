interface CardProps {
  title: string;
  note: string;
  price: number;
  color: string;
}

export default function Card({ title, note, price, color }: CardProps) {
  return (
    <div className="flex flex-initial py-3">
      <div className={color + " px-6 py-4 rounded"}>
        <div className="text-black font-bold text-xl mb-2 rounded">
          {title} {note}
        </div>
        <p className="text-black text-base">Pris: {price} ,-</p>
      </div>
    </div>
  );
}
