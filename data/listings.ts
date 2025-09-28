export type Listing = {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
};

export const mockListings: Listing[] = [
  {
    id: 1,
    title: "Cozy Beachfront Villa",
    location: "Lagos, Nigeria",
    price: 120,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Luxury Apartment in Downtown",
    location: "Abuja, Nigeria",
    price: 95,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
    {
    id: 3,
    title: "Modern Studio Near the Beach",
    location: "Cape Town, South Africa",
    price: 140,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Rustic Cabin in the Woods",
    location: "Nairobi, Kenya",
    price: 75,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Penthouse with City View",
    location: "London, UK",
    price: 220,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Elegant Loft in City Center",
    location: "Paris, France",
    price: 185,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Charming Countryside Cottage",
    location: "Ibadan, Nigeria",
    price: 65,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Lakefront A-Frame Cabin",
    location: "Toronto, Canada",
    price: 170,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Seaside Bungalow Retreat",
    location: "Zanzibar, Tanzania",
    price: 150,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Minimalist City Apartment",
    location: "Berlin, Germany",
    price: 110,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Tropical Treehouse Escape",
    location: "Accra, Ghana",
    price: 135,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "Urban Chic Loft",
    location: "New York, USA",
    price: 250,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    title: "Desert Glamping Dome",
    location: "Dubai, UAE",
    price: 200,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    title: "Historic Stone House",
    location: "Rome, Italy",
    price: 180,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    title: "Beach Hut Paradise",
    location: "Mombasa, Kenya",
    price: 90,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    title: "Mountain Chalet",
    location: "Zermatt, Switzerland",
    price: 260,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    title: "Colorful Bohemian Flat",
    location: "Lisbon, Portugal",
    price: 130,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    title: "Scandinavian Minimal Home",
    location: "Stockholm, Sweden",
    price: 160,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 19,
    title: "Coastal Retreat",
    location: "Cape Verde",
    price: 145,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    title: "Elegant Ryokan",
    location: "Kyoto, Japan",
    price: 210,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 21,
    title: "Luxury Safari Lodge",
    location: "Serengeti, Tanzania",
    price: 300,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 22,
    title: "Snowy Ski Cabin",
    location: "Aspen, USA",
    price: 280,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 23,
    title: "Sunny Desert Adobe",
    location: "Santa Fe, USA",
    price: 160,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 24,
    title: "Beachfront Glass House",
    location: "Sydney, Australia",
    price: 310,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 25,
    title: "Rustic Barn Stay",
    location: "Texas, USA",
    price: 95,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80",
  },
];
