import React from "react";
import { Button } from "./ui/button";
import { Mail, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl bg-white/10 backdrop-blur-sm">
                    <Image
                      src="/prof-pic.jpg"
                      alt="Bimo Dwien Prabowo - Software Developer"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                  </div>

                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
                </div>
              </div>

              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Bimo Dwien Prabowo
                </h1>
                <p className="text-xl md:text-2xl mb-6 text-blue-100">
                  Software Developer
                </p>
                <p className="text-lg mb-8 leading-relaxed">
                  Dedicated and passionate developer with expertise in web
                  application development, specializing in Next.js and React.js.
                  Experienced in backend management using Node.js with
                  Express.js, I can build a strong foundation in creating
                  efficient and scalable solutions.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="#contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Get In Touch
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                    asChild
                  >
                    <Link href="#projects">
                      <Code className="mr-2 h-5 w-5" />
                      View Projects
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
