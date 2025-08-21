import React from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-[#202020] text-white min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl bg-white/10 backdrop-blur-sm">
                    <Image
                      src="/new-prof-pic.jpg"
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
                  Fullstack Developer with experience in building end-to-end web
                  applications using Next.js, React, Express.js, and Prisma ORM.
                  Skilled in managing monorepo with Turborepo, deploying
                  applications with Docker, Nginx, and Cloudflare Tunnel, and
                  implementing CI/CD pipelines using GitHub Actions. Focused on
                  delivering clean, functional, and production-ready
                  applications.
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
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                    asChild
                  >
                    <a href="/Bimo_Dwien_Prabowo_2025.pdf" download>
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                        />
                      </svg>
                      Download CV
                    </a>
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
