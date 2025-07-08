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
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {educationData.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <GraduationCap className="mr-2 h-5 w-5 text-blue-600" />
                      {edu.year}
                    </CardTitle>
                    <CardDescription className="font-medium">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{edu.degree}</p>
                    {edu.gpa && (
                      <p className="text-sm text-muted-foreground mt-1">
                        GPA: {edu.gpa}
                      </p>
                    )}
                    <Badge variant="outline" className="mt-2">
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
