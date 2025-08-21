import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import projectsData from "@/data/projects.json";

const ProjectSection = () => {
  return (
    <>
      <section id="projects" className="py-16 bg-[#272727] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projectsData.map((project, index) => (
                <Card
                  key={index}
                  className="bg-[#272727] border-white/20 text-white hover:bg-white/15 hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge
                        variant={
                          project.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center text-sm text-white">
                      <Calendar className="mr-1 h-4 w-4" />
                      {project.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-white/30 text-white"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-white/30 text-white"
                        >
                          +{project.tech.length - 4} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-black hover:bg-gray-200 hover:text-black"
                        asChild
                      >
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      {project.link && (
                        <Button
                          size="sm"
                          className="bg-white text-black hover:bg-gray-200"
                          asChild
                        >
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* GitHub Link Section */}
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-4">Want to see more of my work?</p>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group border-white/30 text-black hover:bg-white hover:text-black"
              >
                <Link
                  href="https://github.com/bimodwien"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  View All Projects on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
