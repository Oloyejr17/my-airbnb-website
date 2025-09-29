import { mockListings, Listing } from "@/data/listings";
import ListingDetails from "@/components/listings/ListingDetails";
import BackButton from "@/components/ui/BackButton";
import RandomBgWrapper from "@/components/RandomBgWrapper";

interface Props {
  params: { id: string };
}

export default function ListingPage({ params }: Props) {
  const listingId = parseInt(params.id, 10);
  const listing = mockListings.find((l) => l.id === listingId) as Listing;

  if (!listing) {
    return <div className="p-8 text-center">Listing not found</div>;
  }

  return (
    <RandomBgWrapper>
      <div className="max-w-5xl mx-auto py-8 px-4">
        <div className="mb-6">
          <BackButton />
        </div>
        <ListingDetails listing={listing} />
      </div>
    </RandomBgWrapper>
  );
}
