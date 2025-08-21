import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import educationData from "@/data/education.json";

const EducationSection = () => {
  return (
    <>
      <section className="py-16 bg-[#202020] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {educationData.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-[#202020] border-white/20 text-white hover:bg-white/15 transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <GraduationCap className="mr-2 h-5 w-5 text-gray-300" />
                      {edu.year}
                    </CardTitle>
                    <CardDescription className="font-medium text-gray-300">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-200">{edu.degree}</p>
                    {edu.gpa && (
                      <p className="text-sm text-gray-400 mt-1">
                        GPA: {edu.gpa}
                      </p>
                    )}
                    <Badge
                      variant="outline"
                      className="mt-2 border-white/30 text-white"
                    >
                      {edu.status}
                    </Badge>
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

export default EducationSection;
