import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Pratisol</h3>
          <p className="text-gray-400">Your trusted partner in agricultural procurement</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="/team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-400">
              <Phone className="h-5 w-5 mr-2" />
              +91 1234567890
            </li>
            <li className="flex items-center text-gray-400">
              <Mail className="h-5 w-5 mr-2" />
              info@pratisol.com
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-green-600 px-4 rounded-r-lg hover:bg-green-700 transition-colors">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Pratisol. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;