import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
      id: 1,
      title: "UCSC Labs DEFCON",
      description: "Currently Under Development",
      image: "/projects/project2.png",
      tags: ["React Native", "Python", "Expo Go", "AWS"],
      demoUrl: "www.regismak.com/coming-soon",
      githubUrl: "www.regismak.com/coming-soon",
    },
    
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "The very site you're on! A space to showcase my work, achievements, and ongoing updates as I grow.",
      image: "/projects/project1.png",
      tags: ["React", "TailwindCSS", "Javascript", "Vercel"],
      demoUrl: "https://www.regismak.com",
      githubUrl: "https://github.com/Regis-Mak/portfolio",
    },

    {
      id: 3,
      title: "Waypoint - Frontend",
      description: "A collaborative navigation app developed for CSE115A, enabling real-time, synchronized routing for groups of vehicles. Utilzed Agile and SCRUM methodologies throughout development.",
      image: "/projects/project3.png",
      tags: ["React Native", "CSS", "Javascript", "Expo Go"],
      demoUrl: "https://docs.google.com/presentation/d/1LPSNbFKDQxp8KCcibZfpMlPbQtiR8CMxaDo5hvtzZSE/edit?usp=sharing",
      githubUrl: "https://github.com/khanna-parth/MapsProject?tab=readme-ov-file",
    },
  ];

export const ProjectsSection = () => {
    return (
    <section id="projects" className="py-4 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured<span className="text-primary"> Projects</span>
            </h2>

            {/* <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some recent projects.
            </p> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        

                            <h3 className="font-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                    href={project.demoUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                    href={project.githubUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/Regis-Mak"
                >
                    Check Out My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
    );
};