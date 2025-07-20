"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
    ShoppingCart,
    Users,
    BarChart3,
    Shield,
    Zap,
    CheckCircle,
    ArrowRight,
    Star,
    Download,
    Eye,
    Code,
    Database,
    Smartphone,
    Globe,
    Lock,
    TrendingUp,
} from "lucide-react";

export default function Products() {
    const [heroRef, heroInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [productsRef, productsInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [featuresRef, featuresInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const products = [
        {
            id: "enterprise",
            icon: Building,
            title: "Enterprise Management System",
            category: "Enterprise Software",
            description:
                "Comprehensive business management solution for large organizations.",
            features: [
                "Multi-department Management",
                "Advanced Reporting & Analytics",
                "Role-based Access Control",
                "Integration Capabilities",
                "Custom Workflows",
                "Real-time Dashboards",
                "Mobile Access",
                "API Integration",
            ],
            technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
            pricing: "Custom Pricing",
            demo: "/demo/enterprise",
            image: "/api/placeholder/600/400",
        },
        {
            id: "ecommerce",
            icon: ShoppingCart,
            title: "E-commerce Platform",
            category: "E-commerce Solutions",
            description:
                "Full-featured online store with advanced e-commerce capabilities.",
            features: [
                "Product Catalog Management",
                "Shopping Cart & Checkout",
                "Payment Gateway Integration",
                "Order Management",
                "Inventory Tracking",
                "Customer Management",
                "Analytics & Reports",
                "Mobile App Support",
            ],
            technologies: ["Next.js", "Stripe", "MongoDB", "Redis", "AWS"],
            pricing: "From $5,000",
            demo: "/demo/ecommerce",
            image: "/api/placeholder/600/400",
        },
        {
            id: "crm",
            icon: Users,
            title: "Customer Relationship Manager",
            category: "CRM Systems",
            description:
                "Powerful CRM solution to manage customer relationships and sales.",
            features: [
                "Contact Management",
                "Lead Tracking",
                "Sales Pipeline",
                "Email Marketing",
                "Task Management",
                "Reporting & Analytics",
                "Mobile App",
                "Third-party Integrations",
            ],
            technologies: ["React", "Express", "MongoDB", "SendGrid", "Twilio"],
            pricing: "From $3,000",
            demo: "/demo/crm",
            image: "/api/placeholder/600/400",
        },
        {
            id: "analytics",
            icon: BarChart3,
            title: "Business Analytics Dashboard",
            category: "Analytics Tools",
            description:
                "Advanced analytics and reporting platform for data-driven decisions.",
            features: [
                "Real-time Data Visualization",
                "Custom Reports",
                "Data Export",
                "Alerts & Notifications",
                "Multi-source Integration",
                "Predictive Analytics",
                "Mobile Dashboard",
                "API Access",
            ],
            technologies: ["React", "D3.js", "Python", "PostgreSQL", "Redis"],
            pricing: "From $4,000",
            demo: "/demo/analytics",
            image: "/api/placeholder/600/400",
        },
        {
            id: "security",
            icon: Shield,
            title: "Security Management System",
            category: "Security Solutions",
            description:
                "Comprehensive security and compliance management platform.",
            features: [
                "Access Control",
                "Audit Logging",
                "Compliance Reporting",
                "Threat Detection",
                "Incident Management",
                "Policy Management",
                "Real-time Monitoring",
                "Automated Alerts",
            ],
            technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
            pricing: "Custom Pricing",
            demo: "/demo/security",
            image: "/api/placeholder/600/400",
        },
        {
            id: "mobile-app",
            icon: Smartphone,
            title: "Cross-platform Mobile App",
            category: "Mobile Applications",
            description:
                "Native-like mobile application for iOS and Android platforms.",
            features: [
                "Cross-platform Development",
                "Offline Capabilities",
                "Push Notifications",
                "Biometric Authentication",
                "Real-time Sync",
                "Custom UI Components",
                "Performance Optimization",
                "App Store Deployment",
            ],
            technologies: [
                "React Native",
                "Firebase",
                "Redux",
                "TypeScript",
                "Expo",
            ],
            pricing: "From $6,000",
            demo: "/demo/mobile",
            image: "/api/placeholder/600/400",
        },
    ];

    const categories = [
        { name: "Enterprise Software", count: 2, icon: Building },
        { name: "E-commerce Solutions", count: 1, icon: ShoppingCart },
        { name: "CRM Systems", count: 1, icon: Users },
        { name: "Analytics Tools", count: 1, icon: BarChart3 },
        { name: "Security Solutions", count: 1, icon: Shield },
        { name: "Mobile Applications", count: 1, icon: Smartphone },
    ];

    const features = [
        {
            icon: Zap,
            title: "High Performance",
            description:
                "Optimized for speed and efficiency with modern technologies.",
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description:
                "Bank-level security with encryption and compliance standards.",
        },
        {
            icon: Globe,
            title: "Cloud Ready",
            description: "Built for cloud deployment with scalability in mind.",
        },
        {
            icon: Code,
            title: "Customizable",
            description:
                "Fully customizable to meet your specific business requirements.",
        },
        {
            icon: Database,
            title: "Data Integration",
            description:
                "Seamless integration with existing systems and databases.",
        },
        {
            icon: TrendingUp,
            title: "Scalable",
            description: "Designed to grow with your business needs.",
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
                            Our <span className="gradient-text">Products</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                            Ready-to-use software solutions designed to
                            streamline your business operations and drive
                            growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Product{" "}
                            <span className="gradient-text">Categories</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Explore our range of software solutions across
                            different categories
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-gray-600">
                                    {category.count} product
                                    {category.count !== 1 ? "s" : ""}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section ref={productsRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={productsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Featured{" "}
                            <span className="gradient-text">Products</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our flagship software solutions that have
                            helped businesses transform their operations.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={
                                    productsInView ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                    <product.icon className="w-16 h-16 text-white" />
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full">
                                            {product.category}
                                        </span>
                                        <span className="text-lg font-bold text-gray-900">
                                            {product.pricing}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {product.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">
                                            Key Features
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {product.features
                                                .slice(0, 6)
                                                .map((feature) => (
                                                    <div
                                                        key={feature}
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <CheckCircle className="w-4 h-4 text-primary" />
                                                        <span className="text-sm text-gray-700">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.technologies.map(
                                                (tech) => (
                                                    <span
                                                        key={tech}
                                                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex space-x-4">
                                        <Link href={product.demo}>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                                            >
                                                <Eye className="w-4 h-4" />
                                                <span>View Demo</span>
                                            </motion.button>
                                        </Link>
                                        <Link href="/contact">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center space-x-2 border border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                                <span>Get Quote</span>
                                            </motion.button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section ref={featuresRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Why Choose Our{" "}
                            <span className="gradient-text">Products</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built with modern technologies and best practices to
                            ensure reliability, security, and performance.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={
                                    featuresInView ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                            >
                                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
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
                            Need a Custom Solution?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            We can customize any of our products or build a
                            completely new solution tailored to your specific
                            requirements.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                            >
                                Discuss Your Requirements
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Add missing Building icon import
const Building = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
    </svg>
);
