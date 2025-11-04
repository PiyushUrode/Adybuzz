import Navbar from "../MainComponent/Navbar";
import "../index.css";
const PrivacyPolicy = () => {
  return (
    <>  
    <Navbar/>
    <div className="privacy-policy px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Privacy Policy for Adybuzz – Empowering Digital Growth
      </h1>

      <p className="mb-4 text-black">
        <strong>Effective Date:</strong> 04-05-2025
      </p>

      <p className="mb-6 text-black ">
        At <strong>Adybuzz</strong>, accessible from{" "}
        <a href="https://adybuzz.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          https://adybuzz.com
        </a>, the <strong>privacy of our visitors</strong> is extremely important to us. This Privacy Policy outlines
        the types of information we collect and how we use it.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personal Identification Information</strong> – Name, email address, phone number, etc.
          </li>
          <li>
            <strong>Business Information</strong> – Company name, website URL, and service requirements.
          </li>
          <li>
            <strong>Technical Data</strong> – IP address, browser type, device details, and pages visited.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies</strong> – To enhance your experience and analyze website traffic.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To <strong>operate and maintain</strong> our website and services</li>
          <li>To <strong>improve customer service</strong> and personalize user experience</li>
          <li>To <strong>send emails</strong> about our services, promotions, or updates</li>
          <li>To <strong>respond to inquiries and provide support</strong></li>
          <li>For <strong>internal analysis, advertising, and marketing purposes</strong></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Cookies</h2>
        <p className="mb-2 text-black">
          Adybuzz uses cookies to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Understand and save users’ preferences</li>
          <li>Track advertisements</li>
          <li>Collect aggregate data about site traffic and interaction</li>
        </ul>
        <p className="mt-2 text-black">You can manage or disable cookies through your browser settings.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
        <p className="mb-2 text-black">
          We <strong>do not sell, trade, or rent</strong> personal information to others. We may share{" "}
          <strong>generic, aggregated demographic data</strong> with trusted partners for business purposes, as long as
          it is not linked to personal identification information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Third-party Links</h2>
        <p className="mb-2 text-black">
          Our website may contain links to other websites. We <strong>do not control or assume responsibility</strong>{" "}
          for their content or privacy practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Data Security</h2>
        <p className="mb-2 text-black">
          We implement <strong>industry-standard security measures</strong> to protect your data from unauthorized
          access, disclosure, alteration, or destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Your Rights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Access</strong> the personal data we hold about you</li>
          <li><strong>Request corrections or deletions</strong> of your data</li>
          <li><strong>Object to or restrict</strong> certain types of processing</li>
          <li><strong>Withdraw consent</strong> at any time</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Changes to This Policy</h2>
        <p className="mb-2 text-black">
          We may update this Privacy Policy from time to time. Please review this page regularly for any changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
        <p className="mb-2 text-black">
          If you have any questions about this Privacy Policy, feel free to contact us:
        </p>
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

export default PrivacyPolicy;
