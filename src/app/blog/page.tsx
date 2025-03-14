import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Hand Block Printing in Indian Fashion",
    excerpt: "Discover the intricate craft of hand block printing and how this traditional technique continues to influence modern Indian fashion designs.",
    date: "March 8, 2024",
    image: "https://images.unsplash.com/photo-1610189083459-41a1056bb749?w=800&auto=format&fit=crop",
    category: "Fashion Techniques",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Styling Your Anarkali for Different Occasions",
    excerpt: "From casual gatherings to formal events, learn how to style your Anarkali in versatile ways that suit every occasion.",
    date: "February 25, 2024",
    image: "https://web-assets.same.dev/4117429575/1078101320.png",
    category: "Style Tips",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "The Evolution of Punjabi Suits in Modern Fashion",
    excerpt: "Explore how the traditional Punjabi suit has transformed and adapted to contemporary fashion trends while retaining its cultural essence.",
    date: "February 12, 2024",
    image: "https://web-assets.same.dev/1564794122/4203062691.png",
    category: "Fashion History",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Sustainable Practices in Indian Fashion",
    excerpt: "Learn about the growing movement toward sustainable and ethical practices in Indian fashion and how artisans are leading the way.",
    date: "January 30, 2024",
    image: "https://web-assets.same.dev/3846276091/3213301.png",
    category: "Sustainability",
    readTime: "7 min read"
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 bg-cream">
        <div className="container-custom py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-5xl font-serif mb-4">Our Blog</h1>
            <div className="h-0.5 w-20 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground">
              Insights, style tips, and stories from the world of fashion and craftsmanship
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[300px] lg:h-auto">
                  <Image
                    src="https://web-assets.same.dev/447170732/390526116.jpeg"
                    alt="Traditional Meets Modern: The Future of Indian Fashion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm text-primary font-medium mb-2">FEATURED ARTICLE</div>
                  <h2 className="text-2xl md:text-3xl font-serif mb-4">Traditional Meets Modern: The Future of Indian Fashion</h2>
                  <p className="text-muted-foreground mb-6">
                    In an evolving fashion landscape, the fusion of traditional Indian craftsmanship with contemporary design aesthetics is creating a new paradigm that honors heritage while embracing innovation. This article explores how designers are navigating this delicate balance.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <span>March 14, 2024</span>
                    <span className="mx-2">•</span>
                    <span>8 min read</span>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                    <Link href="/blog/featured">
                      Read Article
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover-lift">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-serif mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button asChild variant="ghost" className="text-primary p-0 h-auto hover:bg-transparent hover:text-primary/80">
                      <Link href={`/blog/${post.id}`} className="flex items-center gap-1">
                        Read More
                        <ArrowRight size={14} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" disabled className="h-10 w-10 p-0">
                1
              </Button>
              <Button variant="ghost" className="h-10 w-10 p-0">
                2
              </Button>
              <Button variant="ghost" className="h-10 w-10 p-0">
                3
              </Button>
              <Button variant="ghost" className="h-10 w-10 p-0">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
