import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <>
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
            <p className="text-lg mb-8 text-blue-100">
              I&apos;m always interested in new opportunities and exciting
              projects. Feel free to reach out if you&apos;d like to work
              together!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="mailto:bimodwien2@gmail.com" className="block group">
                <Card className="bg-white/10 border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 mx-auto mb-4 text-blue-200 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                    <p className="text-sm mb-2 transition-colors duration-300 group-hover:text-blue-100">
                      Email
                    </p>
                    <p className="font-medium text-xs break-all transition-colors duration-300 group-hover:text-white">
                      bimodwien2@gmail.com
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://wa.me/6281282525002"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="bg-white/10 border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 mx-auto mb-4 text-blue-200 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                    <p className="text-sm mb-2 transition-colors duration-300 group-hover:text-blue-100">
                      WhatsApp
                    </p>
                    <p className="font-medium text-sm transition-colors duration-300 group-hover:text-white">
                      +62 812-8252-5002
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://linkedin.com/in/bimodwien"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="bg-white/10 border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Linkedin className="h-8 w-8 mx-auto mb-4 text-blue-200 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                    <p className="text-sm mb-2 transition-colors duration-300 group-hover:text-blue-100">
                      LinkedIn
                    </p>
                    <p className="font-medium text-sm break-all transition-colors duration-300 group-hover:text-white">
                      /in/bimodwien
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://github.com/bimodwien"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="bg-white/10 border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Github className="h-8 w-8 mx-auto mb-4 text-blue-200 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                    <p className="text-sm mb-2 transition-colors duration-300 group-hover:text-blue-100">
                      GitHub
                    </p>
                    <p className="font-medium text-sm transition-colors duration-300 group-hover:text-white">
                      /bimodwien
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
