"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 text-[#dedede] backdrop-blur-md transition-all duration-300 bg-transparent`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#home" className="text-3xl sm:text-4xl font-bold">
            BDP.
          </a>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#home" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#skills" onClick={toggleMenu}>
              Skills
            </MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMenu}>
              Projects
            </MobileNavLink>
            <MobileNavLink href="#work" onClick={toggleMenu}>
              Work
            </MobileNavLink>
            <MobileNavLink href="#education" onClick={toggleMenu}>
              Education
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="text-lg font-bold hover:text-gray-300 transition-colors duration-200"
  >
    {children}
  </a>
);

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink = ({ href, onClick, children }: MobileNavLinkProps) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
