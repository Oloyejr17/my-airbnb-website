import { GetawayItem } from "@/types/getaway";

interface ItemCardProps {
  item: GetawayItem;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="flex-shrink-0 w-60 cursor-pointer snap-start hover:underline">
      <h3 className="font-semibold truncate">{item.title}</h3>
      <p className="text-sm text-gray-500 mt-1 truncate">{item.description}</p>
    </div>
  );
}
