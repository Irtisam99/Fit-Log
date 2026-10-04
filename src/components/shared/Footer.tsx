import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-[#1A1D24] bg-[#090A0D] mt-[64px]">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row lg:px-0">
                
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt="FitLog logo"
                        width={22}
                        height={22}
                    />

                    <span className="text-sm font-extrabold tracking-wide text-white">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-center text-xs text-[#8A92A0] sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;