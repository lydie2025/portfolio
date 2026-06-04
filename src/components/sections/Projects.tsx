import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import rheamatecImg from '../../assets/Rheamatec.png';
import annuaire from '../../assets/annuaire.png';
import cogep from '../../assets/cogep.png';
import global from '../../assets/global.png';

// Définition de l'interface pour TypeScript
interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  image: string;
  link: string; 
}

const Projects = () => {
  const projectData: Project[] = [
    {
      id: 1,
      title: "RHEAMAR TECH",
      description: "Development of a robust web infrastructure for a multi-sector technology partner. The architecture is optimized for complex web and mobile application integration as well as web design, ensuring scalability aligned with the company's growth.",
      techs: ["React.js", "Tailwind CSS", "UI/UX", "Node Js"],
      image: rheamatecImg, 
      link: "https://RheamarTech.com"
    },
    {
      id: 2,
      title: "Annuaire medicale",
      description: "Development of the Cameroon Medical Directory, a pioneering platform for centralized health data. This interactive portal leverages web technologies to map the national medical ecosystem, consolidating detailed profiles and contact information for healthcare providers across the country.",
      techs: ["React.js", "Node.js", "Chakra", "material-ui","Nodemeller", "Tailwind"],
      image: annuaire,
      link: "https://annuaire-frontend.vercel.app/"
    },
    {
      id: 3,
      title: "Cogep ltd",
      description: "Design of a professional platform dedicated to organizational consulting and wealth management. A solution designed to optimize the presentation of complex services (tax, legal) and strengthen the relationship between the firm and its clients.",
      techs: ["React.js", "material-ui", "emailjs", "Tailwind CSS"],
      image: cogep,
      link: "https://site-cogepltd.vercel.app/"
    },
    {
      id: 4,
      title: "global group",
      description: "Implementation of a user-centric automotive services platform for GLOBAL CAR CONSULTING. A solution designed to simplify complex processes through personalized support and an intuitive interface.",
      techs: ["React.js","material-ui", "Tailwind CSS"],
      image: global, 
      link: "https://global-car-consulting.vercel.app"
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center gap-12">
      <h3 className="mb-4 text-sm font-black tracking-tighter uppercase italic text-zinc-900">
            SELECTED WORKS
      </h3>
      <p className="text-zinc-600">
          I specialize in, A glimpse into the applications 
          I've built, focusing on clean code and seamless user experiences.
      </p>

      {projectData.map((project) => (
        <div key={project.id} className="max-w-2xl w-full font-sans mb-12">
          
          {/* Card : Images et Badges */}
          <Card className="relative overflow-hidden border-zinc-200 bg-zinc-50 group rounded-2xl shadow-sm">
            <CardContent className="p-0">
              <div className="relative aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary" 
                      className="bg-white/80 hover:bg-white text-zinc-900 border border-zinc-200 backdrop-blur-md px-4 py-1.5 rounded-full text-[12px] font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Texte : Modifiée pour corriger le bug graphique */}
          <div className="mt-8 flex justify-between items-start gap-4">
            
            {/* ÉTAPE 1 : Ajout de 'flex-1' ici pour protéger le texte */}
            <div className="space-y-4 flex-1"> 
              <h2 className="text-3xl font-black tracking-tighter uppercase italic text-zinc-900">
                {project.title}
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* ÉTAPE 2 : Remplacement du <button> par un lien <a> propre avec la classe 'block' */}
            <a 
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0 p-4 rounded-full border border-zinc-200 hover:bg-zinc-100 transition-all group block"
              aria-label={`Visiter le site ${project.title}`}
            >
              <ExternalLink className="w-6 h-6 text-zinc-500 group-hover:text-zinc-900" />
            </a>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;