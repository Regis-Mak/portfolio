import { ArrowRight, ExternalLink, Github } from "lucide-react";

const roles = [
    {
      id: 1,
      title: "Omnivision IT Operations Intern",
      description: "",
      image: "/role_logos/omnivision.png",
      demoUrl: "https://www.ovt.com/",
    },
    {
      id: 2,
      title: "UCSC ITS Student Manager",
      description: "Managing a team of student consultants at UCSC ITS",
      image: "/role_logos/ucsc.png",
      demoUrl: "https://its.ucsc.edu/about",
    },
    {
      id: 3, 
      title: "UCSC ITS Technician",
      description: "Responsible for maintaining lab operations and ensuring continuous service uptime",
      image: "/role_logos/ucsc.png",
      demoUrl: "https://its.ucsc.edu/about",
    },
  ];

export const RolesSection = () => {
    return (
    <section id="roles" className="py-4 px-4 pb-8 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Recent<span className="text-primary"> Roles</span> 
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
                
                <div className="h-48 overflow-hidden">
                    <img 
                    src={role.image} 
                    alt={role.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="flex flex-col flex-1 p-6">


                    <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{role.description}</p>

                    {(role.demoUrl || role.githubUrl) && (
                    <div className="mt-auto pt-4 flex justify-between items-end">
                        <div className="flex space-x-3">
                        {role.demoUrl && (
                            <a 
                            href={role.demoUrl} 
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                            <ExternalLink size={20}/>
                            </a>
                        )}

                        </div>
                    </div>
                    )}
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
    );
};