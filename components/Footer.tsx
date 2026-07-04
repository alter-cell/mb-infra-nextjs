import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0D11] text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-4 gap-14">
          {/* Company */}

          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo/mb-logo.png"
                alt="MB Infra"
                width={52}
                height={52}
              />

              <div>
                <h3 className="font-bold text-2xl">MB INFRA</h3>

                <p className="text-[#C89B3C] text-xs tracking-[3px] uppercase">
                  Building Trust
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-8 mt-8">
              Premium construction, luxury real estate and smart investment
              opportunities across Uttarakhand.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="font-semibold text-xl mb-6">Quick Links</h4>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-[#C89B3C] cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-[#C89B3C] cursor-pointer transition">
                About
              </li>

              <li className="hover:text-[#C89B3C] cursor-pointer transition">
                Services
              </li>

              <li className="hover:text-[#C89B3C] cursor-pointer transition">
                Projects
              </li>

              <li className="hover:text-[#C89B3C] cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-semibold text-xl mb-6">Contact</h4>

            <div className="space-y-6 text-gray-400">
              <div className="flex gap-3">
                <MapPin size={20} className="text-[#C89B3C] mt-1" />

                <span>
                  Dehradun,
                  <br />
                  Uttarakhand
                </span>
              </div>

              <div className="flex gap-3">
                <Phone size={20} className="text-[#C89B3C]" />

                <span>+91 9557427877</span>
              </div>

              <div className="flex gap-3">
                <Mail size={20} className="text-[#C89B3C]" />

                <span>mbinfraa426@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}

          <div>
            <h4 className="font-semibold text-xl mb-6">
              Stay Updated
            </h4>

            <p className="text-gray-400 leading-7 mb-6">
              Get the latest property launches, investment opportunities and
              construction insights.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#171A20] px-5 py-4 rounded-l-xl outline-none"
              />

              <button className="bg-[#C89B3C] px-5 rounded-r-xl hover:bg-[#d6aa4a] transition">
                <ArrowRight className="text-black" />
              </button>
            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#171A20] flex items-center justify-center hover:bg-[#C89B3C] hover:text-black transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#171A20] flex items-center justify-center hover:bg-[#C89B3C] hover:text-black transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#171A20] flex items-center justify-center hover:bg-[#C89B3C] hover:text-black transition"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 MB Infra Pvt. Ltd. All Rights Reserved.</p>

          <div className="flex gap-8 mt-4 lg:mt-0">
            <span className="hover:text-[#C89B3C] cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-[#C89B3C] cursor-pointer">
              Terms & Conditions
            </span>

            <span className="hover:text-[#C89B3C] cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
