import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/shared/header/topbar";
import AuthContextProvider from "@/helpers/context/AuthContext";
import BottomBar from "@/components/shared/bottombar";
import SideBar from "@/components/shared/sidebar";
import { Toaster } from "react-hot-toast";
import GoogleTagManage from "@/components/ui/googleTagManage";
// import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    name: "google-site-verification",
    content: "PU4nfwAVdJydAS9wNWWC49A3jXjM5wUP1hYxciG43hQ",
    title: "Bumrungrad Hospital for International Patient",
    description:
        "Bumrungrad Hospital for International Patients - Provides comprehensive care in various specialties, including cardiology, oncology, orthopedics, neurosurgery, pediatrics, women's health, and cosmetic surgery.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            {/* <Head> */}
                <meta
                    name='google-site-verification'
                    content='PU4nfwAVdJydAS9wNWWC49A3jXjM5wUP1hYxciG43hQ'
                />
            {/* </Head> */}
            <GoogleTagManage />
            <body className={inter.className}>
                <AuthContextProvider>
                    <Topbar />
                    <Toaster position='top-center' reverseOrder={false} />
                    <main>{children}</main>
                    <div className='fixed right-2 top-1/2 z-50'>
                        <SideBar />
                    </div>
                    <BottomBar />
                </AuthContextProvider>
            </body>
        </html>
    );
}
