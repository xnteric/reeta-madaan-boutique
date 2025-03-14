// This is now a Server Component
import { Metadata } from "next";
import ClientProductDetailPage from "./ClientProductDetailPage";

// Combined products data (normally this would come from a database or API)
const allProducts = [
  {
    id: 1,
    name: "Anarkali Kurta Set",
    image: "https://images.unsplash.com/photo-1610189083459-41a1056bb749?w=800&auto=format&fit=crop",
    price: "₹12,999",
    category: "India Wear",
    isNew: true,
    description: "An elegant Anarkali kurta set featuring intricate embroidery and a flattering silhouette. Perfect for festive occasions and celebrations.",
    fabric: "Premium cotton silk blend",
    color: "Maroon",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Embroidered Punjabi Suit",
    image: "https://images.unsplash.com/photo-1610189083459-41a1056bb749?w=800&auto=format&fit=crop",
    price: "₹14,599",
    category: "India Wear",
    isNew: false,
    description: "A beautifully embroidered Punjabi suit with traditional craftsmanship. Features delicate handwork and a comfortable fit.",
    fabric: "Pure cotton with silk embroidery",
    color: "Teal Blue",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Hand Block Printed Kurta",
    image: "https://images.unsplash.com/photo-1610189083459-41a1056bb749?w=800&auto=format&fit=crop",
    price: "₹8,999",
    category: "India Wear",
    isNew: true,
    description: "A hand block printed kurta showcasing traditional artisanal techniques. Each piece is unique with slight variations in the print pattern.",
    fabric: "Organic cotton",
    color: "Indigo Blue",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    name: "Traditional Saree",
    image: "https://images.unsplash.com/photo-1610189083459-41a1056bb749?w=800&auto=format&fit=crop",
    price: "₹18,599",
    category: "India Wear",
    isNew: false,
    description: "A luxurious traditional saree with rich detailing and exquisite craftsmanship. Includes a matching blouse piece.",
    fabric: "Banarasi silk",
    color: "Deep Red with Gold Border",
    sizes: ["Free Size"],
  },
  {
    id: 5,
    name: "Silk Fusion Blouse",
    image: "https://images.unsplash.com/photo-1610189083459-41a1056bb749?w=800&auto=format&fit=crop",
    price: "₹4,999",
    category: "Western Wear",
    isNew: true,
    description: "A contemporary silk fusion blouse that bridges traditional and modern aesthetics. Versatile enough for both casual and formal occasions.",
    fabric: "Silk blend",
    color: "Emerald Green",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 6,
    name: "Contemporary Pants",
    image: "https://images.unsplash.com/photo-1610189083459-41a1056bb749?w=800&auto=format&fit=crop",
    price: "₹6,599",
    category: "Western Wear",
    isNew: false,
    description: "Modern, well-tailored pants with a comfortable fit and elegant detailing. Perfect for professional settings or evening events.",
    fabric: "Cotton blend with stretch",
    color: "Black",
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: 7,
    name: "Designer Top",
    image: "https://images.unsplash.com/photo-1610189083459-41a1056bb749?w=800&auto=format&fit=crop",
    price: "₹3,999",
    category: "Western Wear",
    isNew: true,
    description: "A stylish designer top with contemporary detailing and flattering cut. Easily dressed up or down for various occasions.",
    fabric: "Premium cotton with lace detailing",
    color: "Off-white",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Indo-Western Jacket",
    image: "https://images.unsplash.com/photo-1610189083459-41a1056bb749?w=800&auto=format&fit=crop",
    price: "₹9,599",
    category: "Western Wear",
    isNew: false,
    description: "A stunning indo-western jacket that combines traditional embroidery with modern styling. Perfect as a statement piece for special events.",
    fabric: "Silk with embroidery",
    color: "Navy Blue with Gold Embroidery",
    sizes: ["S", "M", "L", "XL"],
  },
];

// This function is required for static site generation with dynamic routes
// It tells Next.js which paths to pre-render at build time
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

// Generate metadata for the page
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = allProducts.find(p => p.id === Number(params.id));
  
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found",
    };
  }
  
  return {
    title: `${product.name} | Reeta Madaan Boutique`,
    description: product.description,
  };
}

// The main page component is now a Server Component that passes data to the Client Component
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = Number(params.id);
  const product = allProducts.find(p => p.id === productId);
  
  if (!product) {
    // This will be handled by the client component, but we'll return minimal content
    return <ClientProductDetailPage product={null} />;
  }
  
  return <ClientProductDetailPage product={product} />;
} 