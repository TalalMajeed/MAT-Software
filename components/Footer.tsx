"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Github,
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: "About Us", href: "/about" },
            { name: "Our Team", href: "/about#team" },
            { name: "Careers", href: "/careers" },
            { name: "Blog", href: "/blog" },
        ],
        services: [
            { name: "Web Development", href: "/services#web" },
            { name: "Mobile Apps", href: "/services#mobile" },
            { name: "Cloud Solutions", href: "/services#cloud" },
            { name: "Consulting", href: "/services#consulting" },
        ],
        products: [
            { name: "Enterprise Software", href: "/products#enterprise" },
            { name: "E-commerce Solutions", href: "/products#ecommerce" },
            { name: "CRM Systems", href: "/products#crm" },
            { name: "Analytics Tools", href: "/products#analytics" },
        ],
        support: [
            { name: "Help Center", href: "/support" },
            { name: "Documentation", href: "/docs" },
            { name: "API Reference", href: "/api" },
            { name: "Contact Support", href: "/contact" },
        ],
    };

    const socialLinks = [
        {
            name: "Facebook",
            icon: Facebook,
            href: "https://facebook.com/matsoftware",
        },
        {
            name: "Twitter",
            icon: Twitter,
            href: "https://twitter.com/matsoftware",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://linkedin.com/company/matsoftware",
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://instagram.com/matsoftware",
        },
        {
            name: "GitHub",
            icon: Github,
            href: "https://github.com/matsoftware",
        },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center space-x-2 mb-4">
                            <Image
                                src="/assets/logo.svg"
                                alt="MAT Software"
                                width={40}
                                height={40}
                                className="w-10 h-10"
                            />
                            <span className="text-xl font-bold gradient-text">
                                MAT Software
                            </span>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Leading software services company in Lahore,
                            Pakistan. We specialize in custom software
                            development, web applications, mobile apps, and
                            innovative digital solutions that drive business
                            growth.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>Lahore, Pakistan</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>+92 300 1234567</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>info@matsoftware.com</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Services
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Products Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Products
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-gray-800 mt-8 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                                >
                                    <social.icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>

                        <div className="text-gray-400 text-sm">
                            © {currentYear} MAT Software. All rights reserved.
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
