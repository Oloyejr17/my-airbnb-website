/airbnb-clone
├── app
│   ├── layout.tsx                 # Root layout (Navbar, Footer)
│   ├── page.tsx                   # Homepage
│   ├── search
│   │   └── page.tsx               # Search results page
│   ├── listing
│   │   └── [id]
│   │       └── page.tsx           # Single listing detail
│   ├── auth
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── profile/page.tsx           # User profile page
│   └── dashboard/page.tsx         # Host dashboard
│
├── components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SearchBar.tsx              # Hero search bar
│   ├── CategoryBar.tsx            # Scrollable icons/categories
│   ├── ListingCard.tsx            # Card for listings (image + price + title)
│   ├── ListingGallery.tsx         # Gallery component for detail page
│   ├── BookingWidget.tsx          # Sticky booking section
│   ├── ReviewCard.tsx
│   └── UI/                        # Reusable UI components (Button, Modal, etc.)
│
├── lib
│   ├── fakerData.ts               # Fake listings generator (Faker + Picsum)
│   ├── prisma.ts                  # Prisma client (if using DB later)
│   ├── auth.ts                    # NextAuth setup
│   └── utils.ts                   # Helpers
│
├── prisma
│   ├── schema.prisma              # Database schema (if DB is used)
│   └── seed.ts                    # Seeder (if DB is used)
│
├── public
│   └── images/                    # Static assets (logos, icons)
│
├── styles
│   └── globals.css
│
├── tailwind.config.js
├── tsconfig.json
├── package.json
