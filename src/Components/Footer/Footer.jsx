import React from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../assets/logo.png'
import { NavLink } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                
                <div>
                    <NavLink to="/"><img src={logo} alt="Logo" className="h-12 mb-4 bg-black" /></NavLink>
                    <h2 className="text-xl font-bold">LUXURY CAR RENTAL IN THE EMIRATES</h2>
                    <button className="mt-4 border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black">
                        GET BEST OFFER
                    </button>
                </div>

                
                <div>
                  <NavLink to="/cars"><h3 className="text-lg font-semibold mb-3">CARS</h3></NavLink>
                    <ul className="space-y-2">
                        <NavLink to="/about"><li>BLOG</li></NavLink>
                        <NavLink to="/service"><li>SERVICE</li></NavLink>
                        <NavLink to="/about"><li>ABOUT US</li></NavLink>
                        <NavLink to="/contact"><li>CONTACTS</li></NavLink>
                    </ul>
                </div>

               
                <div>
                    <h3 className="text-lg font-semibold mb-3">CONTACTS</h3>
                    <p>Elite 3 Sports City</p>
                    <p className="pt-[5px]"> Dubai 26W8 24J</p>
                    <p className="pt-[5px]">United Arab Emirates</p>
                    <p className="pt-[5px]">+998 99 0000441</p>
                    <p className="pt-[5px]">workingHours</p>
                </div>

                
                <div>
                <NavLink to="/about"><h3 className="text-lg font-semibold mb-3">About us</h3></NavLink>
                    <ul className="space-y-2">
                        <li>OUR TEAM</li>
                        <li>FAQ</li>
                        <li>FOLLOW US ON INSTAGRAM</li>
                        <li className="flex space-x-3 mt-2 gap-[30px]">
                          <InstagramIcon className="h-6"/>
                          <YouTubeIcon className="h-6"/>
                          <FacebookIcon className="h-6"/>
                        </li>
                    </ul>
                </div>
            </div>

            
            <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm">
                <p>&copy; 2024 Terra Car Rental United Arab Emirates.</p>
                <p className="text-gray-400 hover:text-white cursor-pointer">Terms and Conditions</p>
            </div>
        </footer>
    );
};

export default Footer;