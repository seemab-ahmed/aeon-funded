import React from 'react';

const RefundPolicy = ({ mode }) => {
  return (
    <section className="py-[120px] max-xl:py-20">
      <div className="container max-w-[1240px]">
        {/* Main Title */}
        <h2
          className={`text-[50px] leading-none font-semibold tracking-[-0.5px] max-lg:text-4xl mb-10 ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Refund Policy of Aeon Funded L.L.C FZ
        </h2>

        {/* Effective Date */}
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Effective Date: 03/03/2025
        </p>

        {/* Introductory Paragraph */}
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          At Aeon Funded L.L.C FZ (“we,” “us,” or the “Company”), accessible at <a href='https://www.aeonfunded.com/' target='_blank' rel="noopener noreferrer" sclassName=' text-primary font-bold'> AeonFunded.com </a> {" "} (the “Platform”), we strive to deliver high-quality digital services through our simulated trading evaluation programs (the “Services”). This Refund Policy explains our approach to refunds and cancellations, reflecting the nature of our offerings as digital products. Please read this policy carefully before purchasing or engaging with our Services, as it forms part of our Terms and Conditions.
        </p>

        {/* Section 1: No Refunds for Digital Products */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          1. No Refunds for Digital Products
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Due to the nature of our Services as digital, non-tangible products delivered instantly upon purchase, all sales are final, and we do not offer refunds, returns, or exchanges under any circumstances. Once you complete a purchase—whether for an evaluation program, access to trading tools, or any other digital service—you receive immediate access to the product, including account credentials and the ability to begin using the Platform. This immediate delivery and irrevocable access preclude the possibility of reversing the transaction or issuing a refund.
        </p>

        {/* Section 2: Why We Do Not Offer Refunds */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          2. Why We Do Not Offer Refunds
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Our policy is based on the following principles:
        </p>
        <ul
          className={`list-disc ml-6 text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          <li>
            <strong>Instant Access:</strong> Upon payment, you gain instant access to our proprietary digital tools and resources, which cannot be returned or undone.
          </li>
          <li>
            <strong>Service Utilization:</strong> The value of our Services lies in their immediate availability and use, meaning the product is fully consumed at the point of delivery.
          </li>
          <li>
            <strong>Operational Integrity:</strong> As a digital platform, we allocate resources (e.g., server capacity, monitoring systems) to each user upon purchase, making refunds impractical and inconsistent with our business model.
          </li>
        </ul>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          This approach ensures fairness to all users and allows us to maintain the integrity and sustainability of our offerings.
        </p>

        {/* Section 3: Exceptions and Special Cases */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          3. Exceptions and Special Cases
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          We do not provide exceptions to this no-refund policy, including but not limited to:
        </p>
        <ul
          className={`list-disc ml-6 text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          <li>
            Changes in personal circumstances (e.g., financial hardship, time constraints, or dissatisfaction with the Service).
          </li>
          <li>
            Failure to meet evaluation criteria or achieve desired outcomes, as success depends on your individual performance and adherence to our Terms.
          </li>
          <li>
            Technical issues on your end (e.g., device incompatibility), though we encourage you to contact our support team for assistance in resolving such matters.
          </li>
          <li>
            Account suspension or termination due to violations of our Terms and Conditions (e.g., reckless trading practices or altering credentials).
          </li>
        </ul>
        <p
          className={`text-base leading-[1.71] mt-[10px] mb-10 ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          However, if you encounter a technical issue directly attributable to our Platform (e.g., a failure to deliver account credentials after payment), please contact us immediately at support@aeonfunded.com. While we cannot issue refunds, we will work diligently to rectify the issue and ensure you receive the purchased Service.
        </p>
      </div>
    </section>
  );
};

export default RefundPolicy;