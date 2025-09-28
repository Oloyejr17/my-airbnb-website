import ItemCard from "./ItemCard";
import { GetawayItem } from "@/types/getaway";

interface ItemRowProps {
  items: GetawayItem[];
}

export default function ItemRow({ items }: ItemRowProps) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4">
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
}
