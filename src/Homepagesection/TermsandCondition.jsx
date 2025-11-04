
import Navbar from "../MainComponent/Navbar.jsx";
const TermsAndConditions = () => {
  return (
    <>  
<Navbar/>
    <div className="terms-and-conditions px-6 py-12 max-w-4xl mx-auto text-black bg-white">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-4 text-black ">
        <strong>Effective Date:</strong> 05 April 2025
      </p>

      <p className="mb-6 text-black ">
        Welcome to <strong>Adybuzz – Empowering Digital Growth</strong>. By accessing or using our website{" "}
        <a
          href="https://adybuzz.com"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://adybuzz.com
        </a>
        , you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
              <p className=" text-black ">
          By using this website, you confirm that you accept these Terms and Conditions and agree to comply with them.
          If you do not agree, please do not use our website or services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Our Services</h2>
              <p className=" text-black ">Adybuzz offers digital solutions including (but not limited to):</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Website Development & Design</li>
          <li>Social Media Marketing</li>
          <li>Branding & Design</li>
          <li>SEO Services</li>
          <li>Video Editing</li>

        </ul>
        <p className="mt-2 text-black">
          We reserve the right to change or discontinue any service without prior notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property Rights</h2>
              <p className=" text-black ">
          All content available on this website—such as text, graphics, logos, images, videos, and software—is the
          intellectual property of <strong>Adybuzz</strong> unless otherwise stated. You may not reproduce, duplicate,
          copy, sell, or exploit any portion without express written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. User Responsibilities</h2>
              <p className=" text-black ">You agree to use our website and services only for lawful purposes. You must not:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Attempt to gain unauthorized access to our website</li>
          <li>Use our services in a way that violates laws or regulations</li>
          <li>Spread malware, viruses, or harmful software</li>
          <li>
            Use content from the website for resale or commercial gain without permission
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Payment & Refunds</h2>
              <p className=" text-black ">
          All payments for services must be made in full, as agreed in our service proposal or contract. Refunds, if
          applicable, will be considered only in specific cases as per the project agreement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
              <p className=" text-black ">
          Adybuzz shall not be held liable for any indirect, incidental, special, or consequential damages arising out
          of the use or inability to use our website or services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
              <p className=" text-black ">
          Our website may contain links to external websites or services. We are not responsible for the content or
          privacy practices of those third-party websites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Termination</h2>
              <p className=" text-black ">
          We reserve the right to terminate your access to our website or services at any time without notice if we
          believe you have violated these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Modifications</h2>
              <p className=" text-black ">
          We may update or modify these Terms at any time. Any changes will be effective immediately upon posting. Your
          continued use of the site signifies your acceptance of the revised Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Governing Law</h2>
              <p className=" text-black ">These Terms and Conditions are governed by the laws of India.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
              <p className=" text-black ">If you have any questions regarding these Terms and Conditions, please contact us:</p>
        <ul className="list-none mt-2 space-y-1">
          <li><strong>Adybuzz – Empowering Digital Growth</strong></li>
          <li>
            📧 Email:{" "}
            <a href="mailto:adybuzz5@gmail.com" className="text-blue-600 underline">
              adybuzz5@gmail.com
            </a>
          </li>
          <li>
            🌐 Website:{" "}
            <a href="https://adybuzz.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              https://adybuzz.com
            </a>
          </li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default TermsAndConditions;
