import React from "react";
import skillsData from "@/data/skills.json";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiDocker,
  SiNginx,
  SiCloudflare,
  SiGithubactions,
  SiUbuntu,
  SiTurborepo,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { IconType } from "react-icons";

// All imports are above; remove any duplicate imports below this line.

const skillIconMap: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  "React.js": SiReact,
  Tailwind: SiTailwindcss,
  Redux: SiRedux,
  "shadcn/ui": SiShadcnui,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Prisma: SiPrisma,
  MySQL: SiMysql,
  Docker: SiDocker,
  Nginx: SiNginx,
  "Cloudflare Tunnel": SiCloudflare,
  "Github Actions": SiGithubactions,
  "Ubuntu Server": SiUbuntu,
  Turborepo: SiTurborepo,
  Git: SiGit,
  // "VSCode": SiVisualstudiocode, // Not imported, comment out or remove
  Postman: SiPostman,
  Cloudflare: SiCloudflare,
};

const skillColorMap: Record<string, string> = {
  "Next.js": "#000000",
  "React.js": "#61DAFB",
  Tailwind: "#38BDF8",
  Redux: "#764ABC",
  "shadcn/ui": "#000000",
  "Node.js": "#339933",
  "Express.js": "#000000",
  Prisma: "#2D3748",
  MySQL: "#4479A1",
  Docker: "#2496ED",
  Nginx: "#009639",
  "Cloudflare Tunnel": "#F38020",
  "Github Actions": "#2088FF",
  "Ubuntu Server": "#E95420",
  Turborepo: "#000000",
  Git: "#F05032",
  Postman: "#FF6C37",
  Cloudflare: "#F38020",
};

const allSkills: string[] = [
  ...skillsData.frontend,
  ...skillsData.backend,
  ...skillsData.devops,
  ...skillsData.workflow_tools,
];

const SkillSection = () => {
  return (
    <section className="py-16 bg-[#232323] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Skills, Tools, and Technologies
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
            {allSkills.map((skill) => {
              const Icon = skillIconMap[skill] || FaServer;
              const color = skillColorMap[skill] || "#CCCCCC";
              return (
                <div key={skill} className="flex flex-col items-center group">
                  <span
                    className="rounded-2xl bg-[#232323] flex items-center justify-center mb-4 shadow-xl transition-all duration-300 group-hover:bg-white/20 group-focus:bg-white/20"
                    style={{ width: 112, height: 112 }}
                  >
                    <Icon
                      className="w-20 h-20 transition-all duration-300"
                      color={color}
                    />
                  </span>
                  <span className="text-sm text-gray-100 text-center mt-1 font-semibold transition-all duration-300 group-hover:text-blue-100 group-focus:text-blue-100">
                    {skill}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
