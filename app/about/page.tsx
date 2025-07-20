"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
    Users,
    Target,
    Eye,
    Award,
    CheckCircle,
    MapPin,
    Phone,
    Mail,
    Linkedin,
    Github,
    Twitter,
} from "lucide-react";

export default function About() {
    const [heroRef, heroInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [missionRef, missionInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [teamRef, teamInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [valuesRef, valuesInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const team = [
        {
            name: "Ahmed Hassan",
            role: "CEO & Founder",
            image: "/api/placeholder/300/300",
            bio: "Experienced entrepreneur with 10+ years in software development and business strategy.",
            linkedin: "https://linkedin.com/in/ahmedhassan",
            github: "https://github.com/ahmedhassan",
            twitter: "https://twitter.com/ahmedhassan",
        },
        {
            name: "Sarah Khan",
            role: "CTO",
            image: "/api/placeholder/300/300",
            bio: "Technology leader with expertise in cloud architecture and scalable systems.",
            linkedin: "https://linkedin.com/in/sarahkhan",
            github: "https://github.com/sarahkhan",
            twitter: "https://twitter.com/sarahkhan",
        },
        {
            name: "Muhammad Ali",
            role: "Lead Developer",
            image: "/api/placeholder/300/300",
            bio: "Full-stack developer specializing in React, Node.js, and mobile development.",
            linkedin: "https://linkedin.com/in/muhammadali",
            github: "https://github.com/muhammadali",
            twitter: "https://twitter.com/muhammadali",
        },
        {
            name: "Fatima Ahmed",
            role: "UI/UX Designer",
            image: "/api/placeholder/300/300",
            bio: "Creative designer focused on user experience and modern interface design.",
            linkedin: "https://linkedin.com/in/fatimaahmed",
            github: "https://github.com/fatimaahmed",
            twitter: "https://twitter.com/fatimaahmed",
        },
    ];

    const values = [
        {
            icon: Target,
            title: "Innovation",
            description:
                "We constantly push boundaries to create cutting-edge solutions that drive business growth.",
        },
        {
            icon: Users,
            title: "Collaboration",
            description:
                "We believe in the power of teamwork and close collaboration with our clients.",
        },
        {
            icon: Award,
            title: "Excellence",
            description:
                "We maintain the highest standards of quality in every project we undertake.",
        },
        {
            icon: Eye,
            title: "Transparency",
            description:
                "We believe in open communication and keeping our clients informed at every step.",
        },
    ];

    const milestones = [
        {
            year: "2019",
            title: "Company Founded",
            description: "MAT Software established in Lahore, Pakistan",
        },
        {
            year: "2020",
            title: "First 50 Projects",
            description:
                "Successfully delivered 50+ projects to satisfied clients",
        },
        {
            year: "2021",
            title: "Team Expansion",
            description: "Grew team to 20+ skilled professionals",
        },
        {
            year: "2022",
            title: "International Clients",
            description: "Started serving clients from around the world",
        },
        {
            year: "2023",
            title: "150+ Projects",
            description: "Milestone of 150+ successful project deliveries",
        },
        {
            year: "2024",
            title: "Future Ready",
            description: "Expanding services and embracing new technologies",
        },
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
                            About{" "}
                            <span className="gradient-text">MAT Software</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                            We are a passionate team of innovators, developers,
                            and consultants dedicated to transforming businesses
                            through cutting-edge software solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section ref={missionRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={missionInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">
                                Our{" "}
                                <span className="gradient-text">Mission</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                To empower businesses with innovative software
                                solutions that drive growth, efficiency, and
                                digital transformation. We believe that
                                technology should be an enabler, not a barrier.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Based in Lahore, Pakistan, we've been at the
                                forefront of software innovation for over 5
                                years, serving clients locally and
                                internationally with the same dedication and
                                quality standards.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                    <span className="text-gray-700">
                                        150+ successful projects delivered
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                    <span className="text-gray-700">
                                        50+ satisfied clients worldwide
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                    <span className="text-gray-700">
                                        5+ years of industry experience
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={missionInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-2xl"
                        >
                            <div className="bg-white p-8 rounded-xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Our Vision
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    To become the leading software services
                                    company in Pakistan, known for innovation,
                                    quality, and client success. We envision a
                                    future where every business has access to
                                    world-class software solutions.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <Target className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                Innovation Leadership
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                Pioneering new technologies and
                                                approaches
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Users className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                Client Success
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                Ensuring every project exceeds
                                                expectations
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Award className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                Quality Excellence
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                Maintaining the highest
                                                standards in everything we do
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section ref={valuesRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            These core values guide everything we do and shape
                            our relationships with clients, partners, and each
                            other.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={
                                    valuesInView ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Our <span className="gradient-text">Journey</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From humble beginnings to becoming a trusted
                            software partner for businesses worldwide.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? -50 : 50,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    className={`flex items-center ${
                                        index % 2 === 0
                                            ? "flex-row"
                                            : "flex-row-reverse"
                                    }`}
                                >
                                    <div
                                        className={`w-1/2 ${
                                            index % 2 === 0
                                                ? "pr-8 text-right"
                                                : "pl-8 text-left"
                                        }`}
                                    >
                                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                            <div className="text-2xl font-bold text-primary mb-2">
                                                {milestone.year}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                                    </div>
                                    <div className="w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section ref={teamRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={teamInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Meet Our <span className="gradient-text">Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our talented team of professionals brings together
                            diverse expertise and a shared passion for creating
                            exceptional software solutions.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 50 }}
                                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">
                                        {member.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-semibold mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm mb-4">
                                    {member.bio}
                                </p>
                                <div className="flex justify-center space-x-3">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Work With Us?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Let's discuss how we can help transform your
                            business with innovative software solutions.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get In Touch
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
