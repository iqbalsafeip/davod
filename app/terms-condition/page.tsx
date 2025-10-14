import React from "react";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Terms and Conditions
        </h1>

        <p className="text-gray-600 mb-6">
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Kommiai application operated by the Kommiai Team.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing and using Kommiai, you agree to be bound by these terms. If you do not agree with any part of the terms, you must discontinue use of the platform immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">2. Use of the Platform</h2>
          <p className="text-gray-700">
            Kommiai provides AI-powered tools and agents designed to enhance productivity and learning. You agree to use the services for lawful purposes and not to misuse or exploit the platform in any unauthorized way.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-2">3. Intellectual Property</h2>
          <p className="text-gray-700">
            All content, branding, code, and assets related to Kommiai are the property of the Kommiai Team. You may not reproduce, distribute, or modify any part of the service without prior written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">4. Limitation of Liability</h2>
          <p className="text-gray-700">
            The Kommiai Team shall not be held responsible for any direct or indirect damages resulting from the use or inability to use the platform. The platform is provided "as is" without warranties of any kind.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">5. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify or replace these Terms at any time. Users will be notified of significant changes. Continued use of the platform implies acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">6. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, please contact us at: <br />
            <span className="font-medium">support@Kommiai.xyz</span>
          </p>
        </section>

        <div className="text-center text-gray-400 text-sm border-t border-gray-200 pt-6">
          © {new Date().getFullYear()} Kommiai Team. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
