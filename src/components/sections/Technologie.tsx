import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaAngular, FaNodeJs, FaBrain } from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiMongodb, 
  SiLaravel, SiMysql, SiFirebase, 
  SiOpenai, 
  SiPostgresql,
  SiPrisma,
  SiHtml5,
  SiFlutter,
  SiDart,
  SiPhp
} from "react-icons/si";
import { GiChaingun } from "react-icons/gi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface TechData {
  [key: string]: TechItem[];
}

const technologies: TechData = {
  frontend: [
    { name: "React", icon: <FaReact size={32} />, color: "text-[#61DAFB]" },
    { name: "Angular", icon: <FaAngular size={32} />, color: "text-[#DD0031]" },
    { name: "TypeScript", icon: <SiTypescript size={32} />, color: "text-[#3178C6]" },
    { name: "JavaScript", icon: <SiJavascript size={32} />, color: "text-[#F7DF1E]" },
    { name: "HTML", icon: <SiHtml5 size={32} />, color: "text-[#E34F26]" },
    { name: "Flutter", icon: <SiFlutter size={32} />, color: "text-[#02569B]" }
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs size={32} />, color: "text-[#339933]" },
    { name: "Laravel", icon: <SiLaravel size={32} />, color: "text-[#FF2D20]" },
    { name: "Dart", icon: <SiDart size={32} />, color: "text-[#0175C2]" },
    { name: "PHP", icon: <SiPhp size={32} />, color: "text-[#777BB4]" }
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb size={32} />, color: "text-[#47A248]" },
    { name: "MySQL", icon: <SiMysql size={32} />, color: "text-[#4479A1]" },
    { name: "PostgreSQL", icon: <SiPostgresql size={32} />, color: "text-[#4169E1]" },
    { name: "Firebase", icon: <SiFirebase size={32} />, color: "text-[#FFCA28]" },
    { name: "Prisma", icon: <SiPrisma size={32} />, color: "text-[#2D3748]" }
  ],
  ia: [
    { name: "LLM", icon: <FaBrain size={32} />, color: "text-[#6B46C1]" },
    { name: "LangChain", icon: <GiChaingun size={32} />, color: "text-[#10B981]" },
    { name: "OpenAI", icon: <SiOpenai size={32} />, color: "text-[#FFFFFF]" },
  ]
};

const Technologie = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    /* Changement de fond ici : bg-[#0f172a] */
    <section ref={ref} className="w-full py-16 px-4 bg-[#0f172a]">
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          /* Texte en blanc/zinc-100 */
          className="text-4xl font-black tracking-tighter text-zinc-100"
        >
          Technologies I work with
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          /* Texte gris plus clair pour le contraste */
          className="text-zinc-400 text-lg max-w-2xl mx-auto"
        >
          Robust and scalable solutions built with modern technologies.
        </motion.p>
      </div>

      <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          {/* Adaptation des onglets pour fond sombre */}
          <TabsList className="bg-slate-800/50 border border-slate-700 p-1 h-auto flex-wrap justify-center gap-1">
            <TabsTrigger 
              value="frontend" 
              className="px-6 py-2.5 text-zinc-400 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger 
              value="backend" 
              className="px-6 py-2.5 text-zinc-400 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
            >
              Backend
            </TabsTrigger>
            <TabsTrigger 
              value="database" 
              className="px-6 py-2.5 text-zinc-400 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
            >
              Bases de données
            </TabsTrigger>
            <TabsTrigger 
              value="ia" 
              className="px-6 py-2.5 text-zinc-400 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
            >
              IA & ML
            </TabsTrigger>
          </TabsList>
        </div>

        {Object.entries(technologies).map(([key, items]) => (
          <TabsContent key={key} value={key} className="mt-0 outline-none">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {items.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* Card adaptée : Fond sombre légèrement plus clair que la section, bordure discrète */}
                  <Card className="bg-slate-800/40 border-slate-700/50 hover:border-slate-500 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/10">
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                      <div className={`${tech.color} transition-transform duration-300 group-hover:scale-110 drop-shadow-sm`}>
                        {tech.icon}
                      </div>
                      <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors">
                        {tech.name}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Technologie;