import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#787878] text-black py-10 px-6 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
                <div className="flex flex-col items-start">
                    <img
                        src="/footerlogo.png"
                        alt="Ecogenica Logo"
                        className="w-40 lg:w-48"
                    />
                </div>
                <div className="flex-1 mx-20">
                    <h3 className="text-lg font-semibold mb-2">ECOGENICA UK</h3>
                    <p>Unit 4 Orton House Farm<br />
                        Norton Lane<br />
                        Little Orton, Atherstone<br />
                        Leicestershire<br />
                        CV9 3NR<br />
                        United Kingdom
                    </p>
                    <p className="mt-4 font-bold">Copyright Ecogenica<sup>®</sup> 2024</p>
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">NAVIGATION</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Our Products</a></li>
                        <li><a href="#" className="hover:underline">About Ecogenica</a></li>
                        <li><a href="#" className="hover:underline">Contact Ecogenica</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                    <p className="mt-4">Contact: +44 808 273 5159</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
