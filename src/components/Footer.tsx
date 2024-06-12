import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="rounded-lg bg-white pt-1 shadow dark:bg-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between p-4 md:flex-row">
        <div className="mb-4 w-full text-center text-sm text-gray-500 dark:text-gray-400 md:mb-0 md:w-auto">
          {/* img */}
          <div className="flex items-center space-x-2">
            <Image
              src="/imgs/venturex.png"
              alt="VentureX"
              width={100}
              height={50}
            />
            <p className="text-center text-3xl font-semibold">VentureX</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center text-gray-500 dark:text-gray-400 md:space-x-12">
          <div className="mb-6 md:mb-0 p-4">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              VentureX
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 p-4">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Centro de Ayuda
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Atención al cliente
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 p-4">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Legal
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Política
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Licencia
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-gray-100 py-6 dark:bg-gray-700">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 md:flex-row">
          <span className="mb-4 text-sm text-gray-500 dark:text-gray-300 md:mb-0">
            © 2024{" "}
            <a href="https://beacons.ai/webcats" className="hover:underline fon">
              Webcats™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex space-x-6">
            <a
              title="facebook"
              href="https://www.facebook.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
             title="twitter"
              href="https://www.twitter.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              title="instagram"
              href="https://www.instagram.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              title="linkedin"
              href="https://www.linkedin.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
