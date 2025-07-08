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
      <section id="projects" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projectsData.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
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
                    <CardDescription className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {project.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 4} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
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
                        <Button size="sm" asChild>
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
              <p className="text-muted-foreground mb-4">
                Want to see more of my work?
              </p>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group bg-transparent"
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
