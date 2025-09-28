export type Experience = {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  category: "Food" | "Photography" | "Dance" | "Adventure" | "Culture";
  image: string;
};

export const mockExperiences: Experience[] = [
  {
    id: 1,
    title: "Street Food Tour with a Local",
    location: "Bangkok, Thailand",
    price: 25,
    rating: 4.9,
    reviews: 220,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Sushi Making Class",
    location: "Tokyo, Japan",
    price: 45,
    rating: 4.8,
    reviews: 120,
    category: "Food",
    image:
       "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Photography Walk in Paris",
    location: "Paris, France",
    price: 30,
    rating: 4.7,
    reviews: 150,
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Learn Salsa with Locals",
    location: "Havana, Cuba",
    price: 20,
    rating: 4.9,
    reviews: 95,
    category: "Dance",
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Tango Nights",
    location: "Buenos Aires, Argentina",
    price: 35,
    rating: 4.8,
    reviews: 180,
    category: "Dance",
    image:
       "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
   },  
  {
    id: 6,
    title: "Hike the Inca Trail",
    location: "Cusco, Peru",
    price: 120,
    rating: 5.0,
    reviews: 310,
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Camel Ride in the Desert",
    location: "Marrakech, Morocco",
    price: 55,
    rating: 4.6,
    reviews: 80,
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Wine Tasting in Tuscany",
    location: "Florence, Italy",
    price: 70,
    rating: 4.9,
    reviews: 140,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Temple Tour with Local Guide",
    location: "Kyoto, Japan",
    price: 40,
    rating: 4.8,
    reviews: 210,
    category: "Culture",
    image:
          "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
  
  
  },
 {
    id: 10,
    title: "Cooking Paella at Home",
    location: "Valencia, Spain",
    price: 28,
    rating: 4.7,
    reviews: 95,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Flamenco Dance Show",
    location: "Seville, Spain",
    price: 50,
    rating: 4.8,
    reviews: 130,
    category: "Dance",
    image:
    "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "Hot Air Balloon Ride",
    location: "Cappadocia, Turkey",
    price: 150,
    rating: 5.0,
    reviews: 260,
    category: "Adventure",
    image:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  }

];
