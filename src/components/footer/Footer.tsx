import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 container">
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <span className=" text-xl font-bold tracking-wide text-gray-800 uppercase">Logo</span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Este é um e-commerce ficticio no modelo de Farmácia criado para o performance goals da{" "}
              <a href="https://brazil.generation.org/" target="_blank" className="text-blue-600 hover:underline">
                Generation Brasil
              </a>
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">Contatos</p>

          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a href="mailto:jorge_guedess@outlook.com" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              jorge_guedess@outlook.com
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
          <div className="flex items-center mt-1 space-x-3">
            <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <TwitterLogo className="size-6" />
            </Link>
            <Link to="https://github.com/jorgeguedess" target="_blank" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <GithubLogo className="size-6" />
            </Link>
            <Link to="https://www.linkedin.com/in/jorgeguedess/" target="_blank" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <LinkedinLogo className="size-6" />
            </Link>
            <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <InstagramLogo className="size-6" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">Siga-me nas redes sociais</p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row container">
        <p className="text-sm text-gray-600">© Copyright 2024 Jorge Guedes.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
              F.A.Q
            </a>
          </li>
          <li>
            <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
