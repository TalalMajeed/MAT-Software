"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Code,
    Smartphone,
    Cloud,
    Users,
    Shield,
    Zap,
    Star,
    CheckCircle,
    Play,
} from "lucide-react";

export default function Home() {
    const [heroRef, heroInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [aboutRef, aboutInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [servicesRef, servicesInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [reviewsRef, reviewsInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const services = [
        {
            icon: Code,
            title: "Web Development",
            description:
                "Custom web applications built with modern technologies and best practices.",
            features: [
                "React/Next.js",
                "Node.js/Express",
                "Database Design",
                "API Development",
            ],
        },
        {
            icon: Smartphone,
            title: "Mobile Development",
            description:
                "Native and cross-platform mobile applications for iOS and Android.",
            features: [
                "React Native",
                "Flutter",
                "Native iOS/Android",
                "App Store Deployment",
            ],
        },
        {
            icon: Cloud,
            title: "Cloud Solutions",
            description:
                "Scalable cloud infrastructure and DevOps solutions for your business.",
            features: [
                "AWS/Azure/GCP",
                "Docker/Kubernetes",
                "CI/CD Pipelines",
                "Monitoring",
            ],
        },
        {
            icon: Users,
            title: "IT Consulting",
            description:
                "Strategic technology consulting to optimize your business processes.",
            features: [
                "Technology Assessment",
                "Digital Transformation",
                "Process Optimization",
                "Training",
            ],
        },
    ];

    const reviews = [
        {
            name: "Ahmed Khan",
            company: "TechStart Pakistan",
            rating: 5,
            text: "MAT Software delivered an exceptional e-commerce platform that exceeded our expectations. Their team is professional and highly skilled.",
        },
        {
            name: "Sarah Ahmed",
            company: "Digital Solutions Ltd",
            rating: 5,
            text: "Working with MAT Software was a game-changer for our business. They transformed our legacy systems into modern, efficient solutions.",
        },
        {
            name: "Muhammad Ali",
            company: "InnovateCorp",
            rating: 5,
            text: "The mobile app developed by MAT Software has significantly improved our customer engagement. Highly recommended!",
        },
    ];

    const stats = [
        { number: "150+", label: "Projects Completed" },
        { number: "50+", label: "Happy Clients" },
        { number: "5+", label: "Years Experience" },
        { number: "24/7", label: "Support Available" },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233a73c1%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <Image
                            src="/assets/logo.svg"
                            alt="MAT Software"
                            width={120}
                            height={120}
                            className="mx-auto mb-8 animate-float"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                    >
                        <span className="gradient-text">Innovative</span>{" "}
                        Software
                        <br />
                        Solutions
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
                    >
                        Leading software services company in Lahore, Pakistan.
                        We transform ideas into powerful digital solutions that
                        drive business growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <span>Get Started</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <Play className="w-5 h-5" />
                            <span>Watch Demo</span>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section ref={aboutRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            About{" "}
                            <span className="gradient-text">MAT Software</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We are a passionate team of developers, designers,
                            and consultants dedicated to creating innovative
                            software solutions that help businesses thrive in
                            the digital age.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Transforming Ideas Into Reality
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                Based in Lahore, Pakistan, we've been at the
                                forefront of software innovation for over 5
                                years. Our mission is to empower businesses with
                                cutting-edge technology solutions that drive
                                growth and efficiency.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                    <span className="text-gray-700">
                                        Expert team with 5+ years experience
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                    <span className="text-gray-700">
                                        150+ successful projects delivered
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                    <span className="text-gray-700">
                                        24/7 support and maintenance
                                    </span>
                                </div>
                            </div>
                            <Link href="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-8 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
                                >
                                    Learn More About Us
                                </motion.button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-2xl">
                                <div className="bg-white p-6 rounded-xl">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                                        Why Choose MAT Software?
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <Zap className="w-5 h-5 text-primary mt-1" />
                                            <div>
                                                <h5 className="font-semibold text-gray-900">
                                                    Fast Delivery
                                                </h5>
                                                <p className="text-gray-600 text-sm">
                                                    Quick turnaround times
                                                    without compromising quality
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Shield className="w-5 h-5 text-primary mt-1" />
                                            <div>
                                                <h5 className="font-semibold text-gray-900">
                                                    Secure & Reliable
                                                </h5>
                                                <p className="text-gray-600 text-sm">
                                                    Enterprise-grade security
                                                    and reliability
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Users className="w-5 h-5 text-primary mt-1" />
                                            <div>
                                                <h5 className="font-semibold text-gray-900">
                                                    Expert Team
                                                </h5>
                                                <p className="text-gray-600 text-sm">
                                                    Skilled professionals with
                                                    industry expertise
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section ref={servicesRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="gradient-text">Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We offer comprehensive software solutions tailored
                            to meet your business needs and drive digital
                            transformation.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={
                                    servicesInView ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center space-x-2 text-sm text-gray-600"
                                        >
                                            <CheckCircle className="w-4 h-4 text-primary" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center mt-12"
                    >
                        <Link href="/services">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                            >
                                View All Services
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Reviews Section */}
            <section ref={reviewsRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            What Our{" "}
                            <span className="gradient-text">Clients Say</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Don't just take our word for it. Here's what our
                            satisfied clients have to say about working with MAT
                            Software.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={review.name}
                                initial={{ opacity: 0, y: 50 }}
                                animate={
                                    reviewsInView ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-yellow-400 fill-current"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">
                                    "{review.text}"
                                </p>
                                <div>
                                    <div className="font-semibold text-gray-900">
                                        {review.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {review.company}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
