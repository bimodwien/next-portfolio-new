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
      <section className="py-16 bg-[#252525] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Work Experience
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {workExperienceData.map((job, index) => (
                <Card
                  key={index}
                  className="bg-[#252525] border-white/20 text-white hover:bg-white/15 transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{job.position}</CardTitle>
                    <CardDescription className="text-lg font-medium text-white">
                      {job.company}
                    </CardDescription>
                    <p className="text-sm text-white flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {job.period}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
