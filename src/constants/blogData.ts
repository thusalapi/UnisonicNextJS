export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Minimalist Furniture Design",
    excerpt:
      "Discover how less can be more in furniture design and create a serene living space.",
    content: `Minimalist furniture design is about creating functional, beautiful pieces with clean lines and simple forms. This approach to design emphasizes the essentials, removing unnecessary ornamentation to highlight the beauty of the materials and craftsmanship.
  
  Key principles of minimalist furniture design include:
  1. Simplicity in form and function
  2. High-quality materials
  3. Neutral color palettes
  4. Emphasis on negative space
  5. Multifunctional pieces
  
  By incorporating minimalist furniture into your home, you can create a calm, uncluttered environment that promotes relaxation and focus. Remember, in minimalist design, every piece should serve a purpose and contribute to the overall aesthetic of the space.`,
    author: "Emma Thompson",
    date: "2024-09-15",
    imageUrl: "/api/placeholder/800/400",
  },
  {
    id: 2,
    title: "Sustainable Materials in Modern Furniture",
    excerpt:
      "Learn about eco-friendly materials revolutionizing the furniture industry.",
    content: `As environmental concerns grow, the furniture industry is increasingly turning to sustainable materials. These eco-friendly options not only reduce environmental impact but often bring unique aesthetics and durability to furniture design.
  
  Popular sustainable materials in modern furniture include:
  1. Reclaimed wood: Gives new life to old timber
  2. Bamboo: Fast-growing and highly renewable
  3. Recycled metals and plastics: Reduces waste and energy consumption
  4. Cork: Sustainable and biodegradable
  5. Organic fabrics: Such as organic cotton, hemp, and wool
  
  When choosing furniture, look for certifications like FSC (Forest Stewardship Council) for wood products or GOTS (Global Organic Textile Standard) for fabrics. By opting for sustainable furniture, you're not only creating a beautiful home but also contributing to a healthier planet.`,
    author: "Alex Green",
    date: "2024-09-18",
    imageUrl: "/api/placeholder/800/400",
  },
  {
    id: 3,
    title: "Ergonomics in Office Furniture: Your Health Matters",
    excerpt:
      "Explore how well-designed office furniture can improve your health and productivity.",
    content: `Ergonomic office furniture is designed to support the human body, reducing strain and promoting good posture. With many people spending long hours at desks, investing in ergonomic furniture is crucial for maintaining health and productivity.
  
  Key elements of ergonomic office furniture include:
  1. Adjustable chairs with lumbar support
  2. Height-adjustable desks
  3. Monitor arms for proper screen positioning
  4. Ergonomic keyboards and mice
  5. Footrests for improved leg circulation
  
  When setting up your workspace, remember to adjust your furniture to your body. Your feet should be flat on the floor, knees at a 90-degree angle, and your computer screen at eye level. Regular movement is also crucial, so consider a sit-stand desk to alternate between sitting and standing throughout the day.
  
  By prioritizing ergonomics in your office furniture choices, you're investing in your long-term health and well-being.`,
    author: "Dr. Sarah Johnson",
    date: "2024-09-20",
    imageUrl: "/api/placeholder/800/400",
  },
];
