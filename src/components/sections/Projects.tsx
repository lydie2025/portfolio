import React from 'react';
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Importation de l'image
import Rheamatec from '../../assets/Rheamatec.png';

const Projects = () => {
  // On définit les données pour éviter de répéter le code HTML
  const projectData = [
    {
      id: 1,
      title: "RHEAMAR TECH",
      description: "Built a high-end corporate ecosystem for an IT agency specializing in Fullstack, Mobile, and DevOps solutions. Engineered with a focus on high performance, scalability, and intuitive user experiences.",
      techs: ["React.js", "Tailwind CSS", "UI/UX", "Node Js"]
    },
    {
      id: 2,
      title: "RHEAMAR TECH",
      description: "Built a high-end corporate ecosystem for an IT agency specializing in Fullstack, Mobile, and DevOps solutions. Engineered with a focus on high performance, scalability, and intuitive user experiences.",
      techs: ["React.js", "Node.js", "MongoDB", "ShadCn UI", "Tailwind"]
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8 flex flex-col items-center gap-12">
      {projectData.map((project) => (
        <div key={project.id} className="max-w-2xl w-full font-sans">
          {/* Conteneur de l'image avec bordure et effet de groupe */}
          <Card className="relative overflow-hidden border-zinc-800 bg-zinc-900/50 group rounded-2xl">
            <CardContent className="p-0">
              <div className="relative aspect-video w-full overflow-hidden">
                <img 
                  src={Rheamatec} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  // Si l'image ne charge pas, on affiche un fond de secours
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400/1a1a1a/ffffff?text=Image+Non+Trouvée"; }}
                />
                
                {/* Overlay des technologies */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary" 
                      className="bg-black/60 hover:bg-black/80 text-white border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[12px] font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Texte */}
          <div className="mt-8 flex justify-between items-start gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-black tracking-tighter uppercase italic text-white">
                {project.title}
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Bouton Lien Externe */}
            <button className="flex-shrink-0 p-4 rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all group">
              <ExternalLink className="w-6 h-6 text-zinc-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;