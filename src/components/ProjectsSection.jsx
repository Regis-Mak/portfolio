
const projects = [
    {
      id: 1,
      title: "SaaS Landing Page",
      description: "A beautiful landing page app using React and Tailwind.",
      image: "/projects/project1.png",
      tags: ["React", "TailwindCSS", "Supabase"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Orbit Analytics Dashboard",
      description:
        "Interactive analytics dashboard with data visualization and filtering capabilities.",
      image: "/projects/project2.png",
      tags: ["TypeScript", "D3.js", "Next.js"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description:
        "Full-featured e-commerce platform with user authentication and payment processing.",
      image: "/projects/project3.png",
      tags: ["React", "Node.js", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

export const ProjectsSection = () => {
    return (
    <section id="projects" className="py-4 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured<span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some recent projects.
                Some are completed, others are being developed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};