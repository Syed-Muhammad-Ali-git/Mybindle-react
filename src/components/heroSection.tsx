//  Note: hero section component 1st
//  Top banner of the landing page with logo, main message and hero illustration

import { useState } from "react";
import logo from "../assets/images/Group 2.png";
import logoText from "../assets/images/Frame.png";
import mobileImage from "../assets/images/Group 1.png";
import mobileCard1 from "../assets/images/card (1).png";
import mobileCard2 from "../assets/images/card.png";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-gradient min-h-[640px] pb-16">
      {/* Header section images: logo + brand text */}

      <header className="sticky top-0 z-50 flex flex-nowrap items-center justify-between px-4 py-3 md:px-8 lg:px-16 section-container bg-[rgba(255,83,73,0.85)] backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <img src={logo} alt="mybindle logo" className="h-8 md:h-10 lg:h-12" />
          <img src={logoText} alt="my bindle" className="h-8 md:h-10 lg:h-12" />
        </div>
        <nav className="nav-desktop">
          <ul className="flex items-center gap-6 text-(--color-on-primary) font-medium">
            <li><a href="#features" className="hover:opacity-90">Features</a></li>
            <li><a href="#clicks" className="hover:opacity-90">Connect</a></li>
            <li><a href="#install" className="hover:opacity-90">Install</a></li>
            <li><a href="#donate" className="hover:opacity-90">Donate</a></li>
            <li><a href="#testimonials" className="hover:opacity-90">Testimonials</a></li>
            <li><a href="#download" className="hover:opacity-90">Download</a></li>
          </ul>
        </nav>
        <MobileNav />
      </header>

      {/* Hero section: left text content + right phone illustration */}

      <section
        className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-16 section-container mt-12"
      >
        {/* Left side: main tagline and description */}

        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div
            className="text-[#FAFAFA] font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight mb-5"
          >
            <h1>Stay Connected</h1>
            <h1>Stay Social</h1>
            <h1>Stay You!</h1>
          </div>

          <p className="text-(--color-on-primary) font-semibold text-lg leading-7 mt-6">
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences. Whether you're looking to reconnect
            with old friends, build new relationships, or share what matters
            most to you – MyBindle is your home on the internet.
          </p>
          <a href="#features"
            className="mt-5 px-6 rounded-full w-44 h-12 flex items-center justify-center text-lg btn-primary"
          >
            Get Started
          </a>
        </div>
        {/* Right side: stacked phone and card illustrations */}

        <div className="w-full md:w-1/2 relative mt-8 md:mt-0 hidden md:block">
          {/* Main mobile image */}

          <div className="absolute left-4 md:left-8 lg:left-16 top-[-100px] md:top-[-150px] lg:top-[-200px] shadow">
            <img
              src={mobileImage}
              alt="mobile image"
              className="w-48 md:w-64 lg:w-80"
            />
          </div>

          {/* Top-left floating card over the phone */}
          <div className="absolute -top-12 md:-top-20 lg:-top-24 -left-5 md:-left-7 lg:-left-10">
            <img
              src={mobileCard2}
              alt="seamless connections"
              className="w-24 md:w-32 lg:w-40"
            />
          </div>

          {/* Bottom-right floating card over the phone */}
          <div className="absolute md:bottom-[-260px] lg:bottom-[-310px] -right-5 md:right-[90px] lg:right-[180px]">
            <img
              src={mobileCard1}
              alt="discover & explore"
              className="w-24 md:w-32 lg:w-40"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-mobile relative ml-auto">
      <button
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="rounded-full p-2 text-(--color-on-primary) bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.25)] transition-colors"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 rounded-2xl bg-(--color-primary-cta-light) shadow-lg ring-1 ring-white/20 text-white">
          <ul className="flex flex-col px-4 py-3 gap-2">
            <li><a href="#features" onClick={() => setOpen(false)} className="py-2">Features</a></li>
            <li><a href="#clicks" onClick={() => setOpen(false)} className="py-2">Connect</a></li>
            <li><a href="#install" onClick={() => setOpen(false)} className="py-2">Install</a></li>
            <li><a href="#donate" onClick={() => setOpen(false)} className="py-2">Donate</a></li>
            <li><a href="#testimonials" onClick={() => setOpen(false)} className="py-2">Testimonials</a></li>
            <li><a href="#download" onClick={() => setOpen(false)} className="py-2">Download</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};
