"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    CheckCircle,
    MessageSquare,
    Building,
    Globe,
} from "lucide-react";

export default function Contact() {
    const [heroRef, heroInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [formRef, formInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [infoRef, infoInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                service: "",
                message: "",
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Office Address",
            content: "123 Tech Street, Gulberg III, Lahore, Pakistan",
            link: "https://maps.google.com/?q=Lahore,Pakistan",
        },
        {
            icon: Phone,
            title: "Phone Number",
            content: "+92 300 1234567",
            link: "tel:+923001234567",
        },
        {
            icon: Mail,
            title: "Email Address",
            content: "contact@matsoftware.io",
            link: "mailto:contact@matsoftware.io",
        },
        {
            icon: Clock,
            title: "Business Hours",
            content: "Mon - Fri: 9:00 AM - 6:00 PM (PKT)",
            link: null,
        },
    ];

    const services = [
        "Web Development",
        "Mobile Development",
        "Cloud Solutions",
        "IT Consulting",
        "Custom Software",
        "Other",
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Get In <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                            Ready to start your project? Let's discuss how we
                            can help transform your business with innovative
                            software solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            ref={formRef}
                            initial={{ opacity: 0, x: -50 }}
                            animate={formInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Send Us a{" "}
                                <span className="gradient-text">Message</span>
                            </h2>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                                >
                                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-green-600">
                                        Thank you for contacting us. We'll get
                                        back to you within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="company"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                                placeholder="Enter your company name"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="service"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                        >
                                            <option value="">
                                                Select a service
                                            </option>
                                            {services.map((service) => (
                                                <option
                                                    key={service}
                                                    value={service}
                                                >
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Project Details *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                                            placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Sending Message...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            ref={infoRef}
                            initial={{ opacity: 0, x: 50 }}
                            animate={infoInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Contact{" "}
                                <span className="gradient-text">
                                    Information
                                </span>
                            </h2>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={
                                            infoInView
                                                ? { opacity: 1, y: 0 }
                                                : {}
                                        }
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                        }}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg flex-shrink-0">
                                            <info.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                {info.title}
                                            </h3>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target={
                                                        info.link.startsWith(
                                                            "http"
                                                        )
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    rel={
                                                        info.link.startsWith(
                                                            "http"
                                                        )
                                                            ? "noopener noreferrer"
                                                            : undefined
                                                    }
                                                    className="text-gray-600 hover:text-primary transition-colors"
                                                >
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-gray-600">
                                                    {info.content}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Office Map Placeholder */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Our Office Location
                                </h3>
                                <div className="bg-gray-100 rounded-lg p-8 text-center">
                                    <Building className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-600 mb-4">
                                        Interactive map will be displayed here
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=Lahore,Pakistan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                                    >
                                        <Globe className="w-4 h-4" />
                                        <span>View on Google Maps</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Frequently Asked{" "}
                            <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find answers to common questions about our services
                            and process.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                What is your typical project timeline?
                            </h3>
                            <p className="text-gray-600">
                                Project timelines vary based on complexity.
                                Small projects typically take 2-4 weeks, while
                                larger enterprise solutions can take 3-6 months.
                                We'll provide a detailed timeline during our
                                initial consultation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Do you provide ongoing support?
                            </h3>
                            <p className="text-gray-600">
                                Yes, we offer comprehensive support and
                                maintenance packages. This includes bug fixes,
                                updates, security patches, and technical support
                                to ensure your solution runs smoothly.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                What technologies do you use?
                            </h3>
                            <p className="text-gray-600">
                                We use modern, industry-standard technologies
                                including React, Next.js, Node.js, Python, React
                                Native, Flutter, and various cloud platforms
                                like AWS, Azure, and Google Cloud.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                How do you handle project communication?
                            </h3>
                            <p className="text-gray-600">
                                We maintain regular communication through
                                scheduled meetings, progress reports, and
                                project management tools. You'll have a
                                dedicated project manager as your main point of
                                contact.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Let's discuss your requirements and create a custom
                            solution that perfectly fits your business needs.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                document.getElementById("name")?.focus()
                            }
                            className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                        >
                            Start Your Project
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
