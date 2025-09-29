import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Oloye",
      email: "oloyejr17@gmail.com",
      password: "dummy-password", // required by schema
      image: "https://lh3.googleusercontent.com/a/ACg8ocInlkCUY1OlgPVSIim0BLvY8Q-oorfmhXD_3qYYSmKCBAGFbg=s96-c",
    },
  });
  console.log("✅ User seeded");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
