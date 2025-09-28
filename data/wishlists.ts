export type Wishlist = {
  id: number;
  title: string;
  items: {
    id: number;
    title: string;
    location: string;
    image: string;
  }[];
};

export const mockWishlists: Wishlist[] = [
  {
    id: 1,
    title: "Beach Villas 🌊",
    items: [
      {
        id: 101,
        title: "Luxury Villa with Ocean View",
        location: "Bali, Indonesia",
        image: "/images/villa1.jpg",
      },
      {
        id: 102,
        title: "Seaside Escape",
        location: "Malibu, USA",
        image: "/images/villa2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Paris Trip 🇫🇷",
    items: [
      {
        id: 201,
        title: "Eiffel Tower View Apartment",
        location: "Paris, France",
        image: "/images/paris1.jpg",
      },
      {
        id: 202,
        title: "Charming Studio near Louvre",
        location: "Paris, France",
        image: "/images/paris2.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Mountain Cabins 🏔️",
    items: [
      {
        id: 301,
        title: "Cozy Cabin with Fireplace",
        location: "Aspen, USA",
        image: "/images/cabin1.jpg",
      },
      {
        id: 302,
        title: "Scenic Cabin in the Alps",
        location: "Zermatt, Switzerland",
        image: "/images/cabin2.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Desert Getaways 🏜️",
    items: [
      {
        id: 401,
        title: "Luxury Tent under the Stars",
        location: "Dubai, UAE",
        image: "/images/desert1.jpg",
      },
      {
        id: 402,
        title: "Starlit Desert Camp",
        location: "Sahara, Morocco",
        image: "/images/desert2.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "City Escapes 🏙️",
    items: [
      {
        id: 501,
        title: "Penthouse with Skyline View",
        location: "New York, USA",
        image: "/images/nyc1.jpg",
      },
      {
        id: 502,
        title: "Modern Loft Downtown",
        location: "Tokyo, Japan",
        image: "/images/tokyo1.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Tropical Retreats 🌴",
    items: [
      {
        id: 601,
        title: "Private Island Bungalow",
        location: "Maldives",
        image: "/images/maldives1.jpg",
      },
      {
        id: 602,
        title: "Treehouse by the Beach",
        location: "Phuket, Thailand",
        image: "/images/thailand1.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "Cultural Journeys 🎭",
    items: [
      {
        id: 701,
        title: "Riad in the Medina",
        location: "Marrakech, Morocco",
        image: "/images/morocco1.jpg",
      },
      {
        id: 702,
        title: "Traditional Ryokan Stay",
        location: "Kyoto, Japan",
        image: "/images/kyoto1.jpg",
      },
    ],
  },
];
