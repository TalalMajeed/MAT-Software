import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MAT Software - Leading Software Services Company in Lahore, Pakistan",
    description:
        "MAT Software is a premier software services company based in Lahore, Pakistan. We specialize in custom software development, web applications, mobile apps, and digital solutions.",
    keywords:
        "software development, web applications, mobile apps, Lahore, Pakistan, IT services, custom software",
    authors: [{ name: "MAT Software" }],
    creator: "MAT Software",
    publisher: "MAT Software",
    robots: "index, follow",
    openGraph: {
        title: "MAT Software - Leading Software Services Company",
        description:
            "Premier software services company in Lahore, Pakistan specializing in custom software development and digital solutions.",
        url: "https://matsoftware.io",
        siteName: "MAT Software",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MAT Software - Leading Software Services Company",
        description: "Premier software services company in Lahore, Pakistan",
    },
    icons: {
        icon: "/assets/logo.svg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
