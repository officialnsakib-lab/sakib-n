"use client";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { ExternalLink, Github } from "lucide-react";

// ... (projects array আগের মতোই থাকবে)

export default function Projects() {
  const theme = useTheme();
const projects = [
  {
    title: "EcoShop - WooCommerce Store",
    tech: ["WordPress", "Elementor", "WooCommerce"],
    description: "A fully functional organic product store with custom checkout and payment integration.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Agency Portfolio Landing",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    description: "A high-conversion landing page for a creative agency with smooth scrolling and modern UI.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "NewsPort - Dynamic Magazine",
    tech: ["WordPress", "Gutenberg", "Custom CSS"],
    description: "A fast-loading news portal optimized for Google News and AdSense revenue.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Personal Brand Site",
    tech: ["WordPress", "Astra", "SEO Press"],
    description: "A lightweight personal portfolio optimized for a 100/100 PageSpeed score.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Travel Blog Dashboard",
    tech: ["JavaScript", "HTML/CSS", "Bootstrap"],
    description: "Interactive travel blog interface with map integration and image galleries.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Real Estate Listings",
    tech: ["WordPress", "Advanced Custom Fields", "JetEngine"],
    description: "Dynamic property listing site with custom search filters and map views.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Corporate Identity Site",
    tech: ["Elementor Pro", "WordPress", "Lottie"],
    description: "Premium corporate website featuring custom animations and lead generation forms.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Task Manager Lite",
    tech: ["JavaScript", "LocalStorage", "Tailwind"],
    description: "A simple yet powerful CRUD application to manage daily tasks and productivity.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#"
  }
];

  return (
    <section id="projects" className="py-20 md:py-32">
      {/* ফোনে দুই পাশে প্যাডিং নিশ্চিত করতে px-6 যোগ করা হয়েছে */}
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
            SELECTED <span style={{ color: theme.color }}>WORKS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-[#0d0d0d] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl"
            >
              {/* Image Box - ফোনে হাইট একটু কমানো হয়েছে (h-56) */}
              <div className="h-56 md:h-64 w-full overflow-hidden bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Content Box - ফোনে প্যাডিং p-6 এবং ডেক্সটপে p-8 */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] md:text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400 uppercase font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-gray-500">
                    <Github size={18} className="hover:text-white transition-colors cursor-pointer" />
                    <ExternalLink size={18} className="hover:text-white transition-colors cursor-pointer" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:italic transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Theme Color Line */}
                <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full"
                    style={{ backgroundColor: theme.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}