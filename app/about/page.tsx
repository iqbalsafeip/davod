import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 px-6 py-12">
      <div className="flex-grow">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-gray-800">
            About OnEXAGI
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            OnEXAGI is an AI Self Learning platform that transforms the way you interact with information.
            Powered by intelligent agents and advanced document understanding, OnEXAGI enables
            professionals, researchers, and teams to collaborate smarter, learn faster, and execute with precision.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">What is OnEXAGI?</h2>
            <p className="text-gray-700 leading-relaxed">
              OnEXAGI is more than just a tool—it's an evolving digital partner. Users can upload documents,
              ask questions, and receive intelligent, contextual answers. It's built to understand, reason,
              and adapt with every interaction.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Why OnEXAGI?</h2>
            <p className="text-gray-700 leading-relaxed">
              We believe documents shouldn’t be static. With EXAGI Agents, information becomes interactive.
              Whether you're analyzing data, summarizing reports, or coordinating workflows—OnEXAGI
              helps you do it faster and better, with AI that learns from you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm md:col-span-2">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower individuals and organizations to unlock the full potential of their knowledge through
              intelligent AI agents. OnEXAGI aims to create a self-learning environment where machines not only assist
              but grow alongside humans, adapting to their needs and accelerating decision-making processes.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-xl font-medium text-gray-500">Discover more at</h3>
          <a
            href="https://www.onexagi.xyz"
            className="text-2xl font-semibold text-blue-600 hover:text-blue-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.onexagi.xyz
          </a>
        </div>
      </div>

      <footer className="mt-16 text-center text-gray-400 text-sm border-t border-gray-200 pt-6">
        © {new Date().getFullYear()} EXAGI Team. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutPage;
