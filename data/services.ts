export type Service = {
  id: number;
  category: "Chef" | "Training" | "Massage";
  title: string;
  chefOrTrainer?: string;
  price: number;
  image: string;
  description?: string; // optional
};

export const mockServices: Service[] = [
  {
    id: 1,
    category: "Chef",
    title: "Italian Cooking Class",
    chefOrTrainer: "Chef Mario",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    description: "Learn to cook authentic Italian dishes with Chef Mario.",
  },
  {
    id: 2,
    category: "Chef",
    title: "Sushi Workshop",
    chefOrTrainer: "Chef Sato",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Chef",
    title: "Baking Pastries",
    chefOrTrainer: "Chef Anna",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Training",
    title: "Yoga Class",
    chefOrTrainer: "Instructor Lina",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1594737625785-9fdd9c3df2aa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Training",
    title: "Boxing Basics",
    chefOrTrainer: "Coach Tom",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "Training",
    title: "Pilates Training",
    chefOrTrainer: "Instructor Jane",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    category: "Massage",
    title: "Swedish Massage",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    category: "Massage",
    title: "Hot Stone Massage",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1588776814546-ec9e270e43c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    category: "Massage",
    title: "Deep Tissue Massage",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
  },
];
