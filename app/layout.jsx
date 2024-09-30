import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/shared/header/topbar";
import AuthContextProvider from "@/helpers/context/AuthContext";
import BottomBar from "@/components/shared/bottombar";
import SideBar from "@/components/shared/sidebar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bumrungrad Hospital for International Patient",
  description: "Bumrungrad Hospital for International Patients - Provides comprehensive care in various specialties, including cardiology, oncology, orthopedics, neurosurgery, pediatrics, women's health, and cosmetic surgery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <AuthContextProvider>
       <Topbar />
       <Toaster position="top-center" reverseOrder={false} />
        <main>
        {children}
        </main>
        <div className="fixed right-2 top-1/2 z-50">

        <SideBar />
        </div>
        <BottomBar />
       </AuthContextProvider>
      </body>

    </html>
  );
}
