"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
    Code,
    Smartphone,
    Cloud,
    Users,
    Database,
    Shield,
    Zap,
    CheckCircle,
    ArrowRight,
    Clock,
    DollarSign,
    Star,
    Layers,
    Globe,
    Smartphone as Mobile,
    Monitor,
    Server,
} from "lucide-react";

export default function Services() {
    const services = [
        {
            id: "web",
            icon: Code,
            title: "Web Development",
            description:
                "Custom web applications built with modern technologies and best practices.",
            features: [
                "React/Next.js Applications",
                "Node.js/Express Backends",
                "Database Design & Optimization",
                "RESTful API Development",
                "Progressive Web Apps (PWA)",
                "E-commerce Solutions",
                "Content Management Systems",
                "Real-time Applications",
            ],
            technologies: [
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "Redis",
                "Socket.io",
            ],
            process: [
                "Requirements Analysis",
                "UI/UX Design",
                "Frontend Development",
                "Backend Development",
                "Database Integration",
                "Testing & QA",
                "Deployment",
                "Maintenance & Support",
            ],
        },
        {
            id: "mobile",
            icon: Smartphone,
            title: "Mobile Development",
            description:
                "Native and cross-platform mobile applications for iOS and Android platforms.",
            features: [
                "React Native Applications",
                "Flutter Development",
                "Native iOS Development",
                "Native Android Development",
                "App Store Optimization",
                "Push Notifications",
                "Offline Capabilities",
                "Cross-platform Solutions",
            ],
            technologies: [
                "React Native",
                "Flutter",
                "Swift",
                "Kotlin",
                "Firebase",
                "Redux",
                "TypeScript",
            ],
            process: [
                "Platform Strategy",
                "UI/UX Design",
                "Development",
                "Testing",
                "App Store Submission",
                "Launch & Marketing",
                "Updates & Maintenance",
            ],
        },
        {
            id: "cloud",
            icon: Cloud,
            title: "Cloud Solutions",
            description:
                "Scalable cloud infrastructure and DevOps solutions for modern businesses.",
            features: [
                "AWS/Azure/GCP Setup",
                "Docker & Kubernetes",
                "CI/CD Pipelines",
                "Monitoring & Logging",
                "Auto-scaling",
                "Security Implementation",
                "Backup & Recovery",
                "Cost Optimization",
            ],
            technologies: [
                "AWS",
                "Azure",
                "GCP",
                "Docker",
                "Kubernetes",
                "Jenkins",
                "Terraform",
                "Prometheus",
            ],
            process: [
                "Infrastructure Assessment",
                "Architecture Design",
                "Implementation",
                "Security Hardening",
                "Monitoring Setup",
                "Documentation",
                "Training & Handover",
            ],
        },
        {
            id: "consulting",
            icon: Users,
            title: "IT Consulting",
            description:
                "Strategic technology consulting to optimize your business processes and digital transformation.",
            features: [
                "Technology Assessment",
                "Digital Transformation",
                "Process Optimization",
                "Team Training",
                "Project Management",
                "Quality Assurance",
                "Performance Optimization",
                "Security Audits",
            ],
            technologies: [
                "Agile/Scrum",
                "DevOps",
                "Security Best Practices",
                "Performance Tools",
                "Analytics",
            ],
            process: [
                "Business Analysis",
                "Technology Review",
                "Strategy Development",
                "Implementation Planning",
                "Execution Support",
                "Monitoring & Optimization",
            ],
        },
    ];

    const processSteps = [
        {
            number: "01",
            title: "Discovery & Planning",
            description:
                "We start by understanding your business needs, goals, and requirements to create a comprehensive project plan.",
            icon: Users,
        },
        {
            number: "02",
            title: "Design & Architecture",
            description:
                "Our team creates detailed designs and technical architecture that aligns with your business objectives.",
            icon: Layers,
        },
        {
            number: "03",
            title: "Development",
            description:
                "We build your solution using modern technologies and best practices, with regular updates and feedback.",
            icon: Code,
        },
        {
            number: "04",
            title: "Testing & QA",
            description:
                "Rigorous testing ensures your solution is bug-free, secure, and performs optimally.",
            icon: Shield,
        },
        {
            number: "05",
            title: "Deployment",
            description:
                "We deploy your solution to production with zero downtime and comprehensive monitoring.",
            icon: Globe,
        },
        {
            number: "06",
            title: "Support & Maintenance",
            description:
                "Ongoing support, updates, and maintenance to keep your solution running smoothly.",
            icon: Zap,
        },
    ];

    const pricingPlans = [
        {
            name: "Starter",
            price: "$2,000",
            duration: "per project",
            description: "Perfect for small businesses and startups",
            features: [
                "Basic Web Application",
                "Responsive Design",
                "Basic SEO",
                "1 Month Support",
                "Basic Analytics",
                "Mobile Friendly",
            ],
            popular: false,
        },
        {
            name: "Professional",
            price: "$5,000",
            duration: "per project",
            description: "Ideal for growing businesses",
            features: [
                "Advanced Web Application",
                "Custom Features",
                "Database Integration",
                "API Development",
                "3 Months Support",
                "Advanced Analytics",
                "Performance Optimization",
                "Security Implementation",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            duration: "per project",
            description: "For large-scale projects and enterprises",
            features: [
                "Custom Enterprise Solution",
                "Scalable Architecture",
                "Advanced Security",
                "24/7 Support",
                "Custom Integrations",
                "Performance Monitoring",
                "Disaster Recovery",
                "Team Training",
            ],
            popular: false,
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Our <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                            Comprehensive software solutions tailored to meet
                            your business needs and drive digital
                            transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            What We <span className="gradient-text">Offer</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From web development to cloud solutions, we provide
                            end-to-end software services that help businesses
                            thrive in the digital age.
                        </p>
                    </motion.div>

                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${
                                    index % 2 === 1
                                        ? "lg:grid-flow-col-dense"
                                        : ""
                                }`}
                            >
                                <div
                                    className={
                                        index % 2 === 1 ? "lg:col-start-2" : ""
                                    }
                                >
                                    <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 mb-6">
                                        {service.description}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                            Key Features
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {service.features.map((feature) => (
                                                <div
                                                    key={feature}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <CheckCircle className="w-5 h-5 text-primary" />
                                                    <span className="text-gray-700">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map(
                                                (tech) => (
                                                    <span
                                                        key={tech}
                                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={
                                        index % 2 === 1 ? "lg:col-start-1" : ""
                                    }
                                >
                                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6">
                                            Development Process
                                        </h4>
                                        <div className="space-y-4">
                                            {service.process.map(
                                                (step, stepIndex) => (
                                                    <div
                                                        key={step}
                                                        className="flex items-start space-x-4"
                                                    >
                                                        <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                            {stepIndex + 1}
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-700 font-medium">
                                                                {step}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Our <span className="gradient-text">Process</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We follow a proven methodology that ensures
                            successful project delivery and client satisfaction.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-primary mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Pricing <span className="gradient-text">Plans</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transparent pricing plans designed to meet different
                            business needs and budgets.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -10 }}
                                className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                                    plan.popular
                                        ? "border-primary"
                                        : "border-gray-100"
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {plan.name}
                                    </h3>
                                    <div className="text-4xl font-bold text-primary mb-2">
                                        {plan.price}
                                    </div>
                                    <div className="text-gray-600 mb-4">
                                        {plan.duration}
                                    </div>
                                    <p className="text-gray-600">
                                        {plan.description}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center space-x-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                            <span className="text-gray-700">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                                            plan.popular
                                                ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg"
                                                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                        }`}
                                    >
                                        Get Started
                                    </motion.button>
                                </Link>
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
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Let's discuss your requirements and create a custom
                            solution that perfectly fits your business needs.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Free Consultation
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
