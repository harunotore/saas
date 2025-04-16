import { ReactNode } from "react";
import Navbar from "./components/Navbar";

export default function LayoutPage({ children }: { children: ReactNode }) {
    return (
        <div className="bg-accent/5 min-h-screen">
            <Navbar />
            <div className="container py-6">
                {children}
            </div>
        </div>
    )
}

