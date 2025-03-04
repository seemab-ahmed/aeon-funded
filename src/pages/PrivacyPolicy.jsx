import React from 'react';

const PrivacyPolicy = ({ mode }) => {
  return (
    <section className="py-[120px] max-xl:py-20">
      <div className="container max-w-[1240px]">
        {/* Main Title */}
        <h2
          className={`text-[50px] leading-none font-semibold tracking-[-0.5px] max-lg:text-4xl mb-10 ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Privacy Policy of Aeon Analytics FZ-LLC
        </h2>

        {/* Effective Date */}
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Effective Date: 03/02/2025
        </p>

        {/* Introduction */}
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Welcome to Aeon Analytics FZ-LLC (“we,” “us,” or the “Company”), accessible at [insert URL]
          (the “Platform”). We are committed to protecting your privacy and ensuring the security of your
          personal information. This Privacy Policy outlines how we collect, use, store, and safeguard
          your data when you interact with our Platform and services (collectively, the “Services”). By
          using the Platform, you agree to the practices described herein. We encourage you to read this
          policy carefully and contact us with any questions.
        </p>

        {/* 1. Information We Collect */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          1. Information We Collect
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          We gather various types of information to provide and improve our Services, tailored to your
          experience as a trader or visitor. The data we collect includes:
        </p>
        <ul
          className={`list-disc ml-6 text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          <li>
            <strong>Personal Information:</strong> When you register for an account, purchase an evaluation program, or contact us, we may collect details such as your name, email address, phone number, mailing address, date of birth, and payment information.
          </li>
          <li>
            <strong>Account Credentials:</strong> Upon enrollment, you’ll receive login details, which we store securely to facilitate your access to the Platform.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect information about your interactions with the Platform, including IP addresses, device type, browser details, pages visited, and timestamps of your activities.
          </li>
          <li>
            <strong>Trading Activity:</strong> For evaluation purposes, we monitor and record your simulated trading actions, such as trade volume, strategies employed, and performance metrics.
          </li>
          <li>
            <strong>Communications:</strong> Any correspondence you send us via email, live chat, or social media, including inquiries or support requests, may be retained.
          </li>
          <li>
            <strong>Submitted Content:</strong> If you provide media (e.g., images, videos) for promotional use, we collect and store that content as outlined in our Terms and Conditions.
          </li>
        </ul>

        {/* 2. How We Collect Information */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          2. How We Collect Information
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          We obtain data through several methods:
        </p>
        <ul
          className={`list-disc ml-6 text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          <li>
            <strong>Directly from You:</strong> When you submit information during registration, account setup, or communication with us.
          </li>
          <li>
            <strong>Automatically:</strong> Through cookies, web beacons, and similar technologies that track your Platform usage and ensure security (e.g., IP region consistency checks).
          </li>
          <li>
            <strong>From Third Parties:</strong> We may receive data from payment processors, analytics providers, or partners who assist in delivering our Services.
          </li>
        </ul>

        {/* 3. How We Use Your Information */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          3. How We Use Your Information
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          We process your data to fulfill our mission of identifying skilled traders and providing a seamless Platform experience. Specific purposes include:
        </p>
        <ul
          className={`list-disc ml-6 text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          <li>
            <strong>Service Delivery:</strong> To administer your account, provide evaluation tools, and process transactions.
          </li>
          <li>
            <strong>Performance Evaluation:</strong> To assess your trading activities and determine eligibility for rewards or further opportunities.
          </li>
          <li>
            <strong>Security and Compliance:</strong> To verify your identity, monitor IP consistency, prevent fraud, and ensure adherence to our Terms.
          </li>
          <li>
            <strong>Communication:</strong> To respond to your inquiries, send updates about your account, and notify you of policy changes or Platform enhancements.
          </li>
          <li>
            <strong>Improvement:</strong> To analyze usage trends and refine our Services based on aggregate data.
          </li>
          <li>
            <strong>Marketing:</strong> With your consent, to share promotional content or feature your submitted media in campaigns across various channels.
          </li>
        </ul>

        {/* 4. How We Share Your Information */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          4. How We Share Your Information
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          We do not sell your personal data. However, we may share it under specific circumstances:
        </p>
        <ul
          className={`list-disc ml-6 text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          <li>
            <strong>Service Providers:</strong> With trusted third parties (e.g., payment processors, IT support, or analytics firms) who assist in operating the Platform, bound by confidentiality obligations.
          </li>
          <li>
            <strong>Affiliates and Partners:</strong> To facilitate Services or promotional efforts, such as displaying your media content under the license you grant us.
          </li>
          <li>
            <strong>Legal Obligations:</strong> When required by law, court order, or regulatory authority to disclose information.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the succeeding entity.
          </li>
          <li>
            <strong>Protection:</strong> To safeguard our rights, property, or safety, or that of our users, including sharing with brokers to review trading compliance.
          </li>
        </ul>

        {/* 5. Data Security */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          5. Data Security
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          We implement robust measures to protect your information from unauthorized access, loss, or alteration. These include encryption, secure servers, and restricted access protocols. However, no system is entirely immune to breaches, and we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials and notifying us immediately of any suspected unauthorized access.
        </p>

        {/* 6. Your Choices and Rights */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          6. Your Choices and Rights
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          You have control over your data:
        </p>
        <ul
          className={`list-disc ml-6 text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          <li>
            <strong>Account Management:</strong> You may update your personal details by contacting us or through your account settings (where available).
          </li>
          <li>
            <strong>Communications:</strong> Opt out of promotional emails by following the unsubscribe instructions in those messages; essential account-related notices will still be sent.
          </li>
          <li>
            <strong>Access and Correction:</strong> You may request access to or corrections of your personal data by reaching out to us at support@aeonfunded.com.
          </li>
          <li>
            <strong>Deletion:</strong> You can request the removal of your data, though we may retain certain information as required by law or for legitimate business purposes (e.g., record-keeping).
          </li>
        </ul>

        {/* 7. Data Retention */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          7. Data Retention
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          We retain your information only as long as necessary to fulfill the purposes outlined in this policy:
        </p>
        <ul
          className={`list-disc ml-6 text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          <li>
            Personal and account data is kept while your account is active and for a reasonable period thereafter (30 days post-suspension for inactive accounts).
          </li>
          <li>
            Trading records are stored to evaluate performance and ensure compliance, retained for up to 2 years after your last activity.
          </li>
          <li>
            Communications and submitted content may be kept indefinitely unless you request otherwise, subject to legal requirements.
          </li>
        </ul>

        {/* 8. International Data Transfers */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          8. International Data Transfers
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Aeon Analytics FZ-LLC operates from Dubai, UAE, and your data may be processed or stored in locations outside your region. We ensure appropriate safeguards are in place for such transfers, aligning with applicable privacy standards.
        </p>

        {/* 9. Cookies and Tracking Technologies */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          9. Cookies and Tracking Technologies
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          We use cookies and similar tools to enhance functionality, monitor usage, and maintain security (e.g., IP region verification). You can manage cookie preferences via your browser settings, though disabling them may limit Platform features.
        </p>

        {/* 10. Children’s Privacy */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          10. Children’s Privacy
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Our Services are not intended for individuals under eighteen (18). We do not knowingly collect data from those under thirteen (13). If we discover such data has been provided, we will promptly delete it.
        </p>

        {/* 11. Third-Party Links */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          11. Third-Party Links
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          The Platform may link to external sites not governed by this policy. We are not responsible for their privacy practices and recommend reviewing their policies separately.
        </p>

        {/* 12. Changes to This Policy */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          12. Changes to This Policy
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Revised versions will be posted on the Platform with an updated effective date. Your continued use of the Services after such changes signifies your acceptance.
        </p>

        {/* 13. Special Provisions for Europe (GDPR Compliance) */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          13. Special Provisions for Europe (GDPR Compliance)
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          If you are located in the European Economic Area (EEA), the General Data Protection Regulation (GDPR) grants you additional rights and imposes specific obligations on us as a data controller. This section applies solely to EEA residents:
        </p>
        <ul
          className={`list-disc ml-6 text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          <li>
            <strong>Legal Basis for Processing:</strong> We process your personal data based on:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Contractual Necessity:</strong> To fulfill our obligations under the Terms and Conditions (e.g., providing evaluation services and managing your account).
              </li>
              <li>
                <strong>Consent:</strong> For optional uses like marketing communications or media usage, which you may withdraw at any time by contacting us.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> For security, fraud prevention, and service improvement, provided these interests do not override your rights.
              </li>
              <li>
                <strong>Legal Obligations:</strong> When required by applicable laws.
              </li>
            </ul>
          </li>
          <li>
            <strong>Your GDPR Rights:</strong> In addition to the rights in Section 6, you have:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Right to Data Portability:</strong> To receive your data in a structured, machine-readable format for transfer to another controller.
              </li>
              <li>
                <strong>Right to Object:</strong> To oppose processing based on legitimate interests, including direct marketing.
              </li>
              <li>
                <strong>Right to Erasure (“Right to be Forgotten”):</strong> To request deletion of your data, subject to legal exceptions.
              </li>
            </ul>
          </li>
          <li>
            <strong>Exercising Your Rights:</strong> Submit requests to our Data Protection Officer (DPO) at dpo@aeonfunded.com. We will respond within one month, extendable by two months for complex requests, and will not charge a fee unless requests are excessive or unfounded.
          </li>
          <li>
            <strong>Data Transfers Outside the EEA:</strong> When transferring your data outside the EEA (e.g., to our servers in UAE), we rely on Standard Contractual Clauses or other approved mechanisms to ensure equivalent protection, as mandated by GDPR.
          </li>
          <li>
            <strong>Data Protection Officer (DPO):</strong> For GDPR-related inquiries or complaints, contact our DPO at dpo@aeonfunded.com. The DPO oversees our compliance and serves as your point of contact.
          </li>
          <li>
            <strong>Supervisory Authority:</strong> You have the right to lodge a complaint with your local data protection authority in the EEA if you believe we have not handled your data appropriately. Contact details for authorities are available at <a href="https://www.edpb.europa.eu/edpb_en" target="_blank" rel="noopener noreferrer">https://www.edpb.europa.eu/edpb_en</a>.
          </li>
          <li>
            <strong>Automated Decision-Making:</strong> We do not use automated decision-making or profiling that produces legal effects or significantly affects you, except for trading activity monitoring to enforce our Terms, where human oversight is maintained.
          </li>
        </ul>

        {/* 14. Contact Us */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          14. Contact Us
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] mb-10 ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          For questions, requests, or concerns about this Privacy Policy or your data, please contact us at:
          <br /><br />
          Aeon Analytics FZ-LLC
          <br />
          Email: support@aeonfunded.com
          <br />
          Address: The Meydan Road, Al Sheba, PO Box 95195, Dubai, United Arab Emirates
          <br /><br />
          For GDPR inquiries: Data Protection Officer dpo@aeonfunded.com
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;