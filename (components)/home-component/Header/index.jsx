"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        // Check scroll position on mount
        setIsScrolled(window.scrollY > 50);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white py-1 text-black" : "bg-transparent py-4 "}`}>
            <nav className="opacity-90 px-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img
                        src="/ecogenic-logo.png"
                        alt="Ecogenica Logo"
                        className="h-20 w-auto"
                    />
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <X className="text-white" /> : <Menu className="text-black" />}
                    </button>
                </div>
                <div className={`flex-col lg:flex lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 text-white font-bold text-sm absolute lg:static top-20 left-0 right-0 bg-black lg:bg-transparent px-8 py-4 lg:p-0 transition-all duration-300 ease-in-out ${isMenuOpen ? "flex" : "hidden"}`}>
                    <a href="/" className={`text-normal ${isScrolled ? "text-black" : "text-white"}`}>HOME</a>
                    <a href="/product" className={`text-normal ${isScrolled ? "text-black" : "text-white"}`}>OUR PRODUCTS</a>
                    <a href="/about" className={`text-normal ${isScrolled ? "text-black" : "text-white"}`}>ABOUT</a>
                    <a href="/contactus" className={`text-normal ${isScrolled ? "text-black" : "text-white"}`}>CONTACT</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
