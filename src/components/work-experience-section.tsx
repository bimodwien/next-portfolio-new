import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";
import workExperienceData from "@/data/work-experience.json";

const WorkExperienceSection = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Work Experience
            </h2>
            <div className="space-y-8">
              {workExperienceData.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{job.position}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      {job.company}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {job.period}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperienceSection;
