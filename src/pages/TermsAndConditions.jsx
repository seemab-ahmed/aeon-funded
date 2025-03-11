import React from 'react';

const TermsAndConditions = ({ mode }) => {
  return (
    <section className="py-[120px] max-xl:py-20">
      <div className="container max-w-[1240px]">
        {/* Title */}
        <h2
          className={`text-[50px] leading-none font-semibold tracking-[-0.5px] max-lg:text-4xl mb-10 ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Terms and Conditions of Aeon Analytics FZ-LLC
        </h2>

        {/* Important Notice */}
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          <strong>Important Notice:</strong> Please review this Agreement thoroughly
          before proceeding. By accessing or utilizing the Platform or Services of Aeon
          Analytics FZ-LLC, or by otherwise agreeing to these terms, you confirm your
          understanding and commitment to be legally bound by this Agreement. This
          includes acknowledging that you may be relinquishing certain legal rights.
        </p>

        {/* Introduction */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Introduction
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Welcome to the digital ecosystem of Aeon Analytics FZ-LLC, accessible via <a href='https://www.aeonfunded.com/' target='_blank' rel="noopener noreferrer" className=' text-primary font-bold'> AeonFunded.com </a> {" "}
          (hereinafter referred to as the “Company”). The Company operates an array of online
          services, resources, and interactive features (collectively, the “Platform”), all of which
          are provided by Aeon Analytics FZ-LLC. Your interaction with the Platform is contingent
          upon your full acceptance of the rules, terms, and notices outlined herein (collectively,
          the “Terms” or “Agreement”). Engaging with the Platform indicates your consent to these
          Terms in their entirety.
        </p>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          We recommend retaining a copy of this document for your records, as it governs all services
          delivered through the Platform.
        </p>

        {/* Key Provisions */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Key Provisions
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          This Agreement includes a mandatory arbitration clause that restricts your ability to pursue
          lawsuits in court, participate in class actions, or have disputes resolved by a judge or
          jury. It also contains provisions that cap the Company’s liability toward you. The offerings
          on this Platform are not intended to serve as investment opportunities.
        </p>

        {/* Services Overview */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Services Overview
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Aeon Analytics FZ-LLC provides a range of programs and evaluation tools designed to allow
          traders to demonstrate their abilities through simulated trading environments. These
          programs involve achieving predefined objectives to successfully complete the evaluations.
          Success in these assessments hinges on discipline and steady effort—there’s no need to hasten
          the process, as meaningful progress takes time. Adaptability and consistency are vital to
          thriving in this environment.
        </p>

        {/* Account Credentials and Usage Rules */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Account Credentials and Usage Rules
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Upon enrolling in an evaluation program, you will receive login details immediately. Altering
          these credentials is strictly forbidden, and any attempt to do so will result in the suspension
          of your account. Aeon Analytics FZ-LLC seeks traders with genuine skill and a long-term vision,
          emphasizing the principle: “Your Strategies, Our Support.” The use of automated tools such as
          signal bots, trade management services, or position copiers is prohibited. Our systems
          continuously monitor trader activity, and any rule violation will lead to account suspension.
          Accounts inactive for 30 consecutive days will be automatically paused.
        </p>

        {/* Trader Rewards and IP Consistency */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Trader Rewards and IP Consistency
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Traders who successfully complete the evaluation will receive a reimbursement of their initial
          fees alongside their third performance reward. To ensure security and fairness, the IP address
          region used to enroll in the evaluation must match the region used during the assessment phase
          and subsequent trading stages. For ongoing account access, the IP region must remain consistent.
          Should our Risk Team detect a regional shift, we may request verification (e.g., travel
          documentation or a live location video) to safeguard against unauthorized access. If you
          anticipate travel, please notify our support team in advance to prevent interruptions.
        </p>

        {/* Electronic Communications */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Electronic Communications
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          By accessing the Platform, contacting the Company through email, social media, or live chat,
          you engage in electronic correspondence. You agree to receive communications from us
          electronically, including notices, agreements, and disclosures delivered via email, chat,
          social media, or the Platform, fulfilling any legal requirement that such communications be in
          writing.
        </p>

        {/* Your Account Responsibilities */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Your Account Responsibilities
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          When using the Platform, you are tasked with safeguarding the confidentiality of your account
          credentials, including your username and password, and limiting access to your devices. You bear
          full responsibility for all activities conducted through your account. Transferring or assigning
          your account to another individual or entity is prohibited. Aeon Analytics FZ-LLC is not liable
          for unauthorized access to your account resulting from theft or misuse. The Company reserves the
          right, at its discretion, to suspend services, delete accounts, or modify content as deemed
          necessary.
        </p>

        {/* User Commitments */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          User Commitments
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          By utilizing the Services, you affirm that you are at least eighteen (18) years old, of sound mind,
          and capable of adhering to this Agreement. If acting on behalf of a business or third party, you
          confirm your authority to bind that entity to these Terms. You also warrant that your use of the
          Services complies with all applicable laws, regulations, and treaties in your jurisdiction and that
          no pre-existing agreements bar you from entering into this contract.
        </p>

        {/* Age Restrictions */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Age Restrictions
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Users under eighteen (18) are barred from accessing the Platform or interacting with the Company.
          Should a minor bypass these restrictions, any resulting consequences or actions are solely their
          responsibility, and you agree to absolve the Company of liability for such breaches.
        </p>

        {/* Third-Party Links and Services */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Third-Party Links and Services
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          The Platform may feature links to external websites (“External Sites”) not controlled by Aeon
          Analytics FZ-LLC. The Company is not accountable for the content, updates, or links within these
          External Sites, which are provided for convenience only and do not imply endorsement. Certain
          services offered through the Platform may involve third-party providers, and by using these, you
          consent to the Company sharing relevant data with contracted third parties to facilitate the
          requested services.
        </p>

        {/* Intellectual Property and Usage Rights */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Intellectual Property and Usage Rights
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          You are granted a limited, non-exclusive, revocable permission to access and use the Platform in
          accordance with these Terms. All materials on the Platform, including text, images, logos, and
          software (collectively, “Content”), are owned by Aeon Analytics FZ-LLC or its licensors and are
          protected by intellectual property laws. You agree not to alter, reproduce, distribute, or exploit
          this Content without explicit permission. Unauthorized use, such as reselling or modifying Content,
          is forbidden, and you acquire no ownership rights over it.
        </p>

        {/* Prohibited Practices and Risk Management */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Prohibited Practices and Risk Management
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Aeon Analytics FZ-LLC defines “Reckless Trading” as impulsive, high-risk behavior that disregards
          core trading principles, threatening both individual accounts and the Company’s stability.
          Examples of such practices include:
        </p>
        <ul
          className={`list-disc ml-6 text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          <li>
            <strong>Over-Leveraging:</strong> Engaging in trades with excessive risk relative to your capital,
            using high leverage that overexposes your account. For advanced accounts, surpassing the Maximum
            Lot Exposure Limit (details available in our FAQ) will trigger penalties. Exceeding this limit voids
            profits from trades beyond the threshold; repeated violations result in warnings, profit deductions,
            a 30% performance fee, and potential account closure.
          </li>
          <li>
            <strong>Impulsive Trading:</strong> Emotion-driven decisions resembling gambling, where losses exceed
            3% of the account size in a single trade (aggregated if split into multiple positions).
          </li>
          <li>
            <strong>Overtrading:</strong> Frequent, strategy-less trades leading to fatigue and reduced gains.
          </li>
          <li>
            <strong>Rapid Trading Tactics:</strong> High-frequency or tick-scalping methods that exploit volatility
            excessively.
          </li>
          <li>
            <strong>Arbitrage Attempts:</strong> Strategies like hedging across firms or exploiting execution delays,
            lacking a coherent basis.
          </li>
          <li>
            <strong>Weak Risk Control:</strong> Poor money management triggering margin issues or erratic trading during
            illiquid hours.
          </li>
        </ul>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Traders engaging in Reckless Trading may face restrictions such as reduced leverage, trade limits, or a
          maximum 1% risk cap per trade, up to a potential ban. Our aim is to refine your skills while leveraging
          your trading data to enhance our operations and the broader trading ecosystem.
        </p>

        {/* Additional Policies */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Additional Policies
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          These Terms incorporate other Company policies, such as the Privacy Policy, Refund Policy (if applicable),
          and FAQ, which may be amended periodically and form part of this Agreement. Your adherence to these
          additional guidelines is required.
        </p>

        {/* Dispute Resolution */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Dispute Resolution
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Please Note: This section significantly impacts your legal rights, including your ability to sue in
          court. All disputes arising from these Terms shall be resolved through binding arbitration under the
          International Centre for Dispute Resolution (ICDR) rules, conducted by a single arbitrator in Dubai,
          United Arab Emirates, in English. You waive the right to class actions or court proceedings.
          Arbitration awards are final and enforceable in any court with jurisdiction. To initiate arbitration,
          send a written claim notice to [insert contact address/email], detailing the dispute and relief sought.
          If unresolved within 30 days, arbitration may commence.
        </p>

        {/* Class Action Waiver */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Class Action Waiver
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          Arbitration will occur on an individual basis only. Collective or class actions are not permitted, and
          claims may not be consolidated unless mutually agreed. If this waiver is deemed unenforceable, the
          arbitration provisions remain intact, excluding the invalid clause.
        </p>

        {/* Liability Disclaimer */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Liability Disclaimer
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          The Platform and Services are provided “as is,” without warranties of accuracy, reliability, or availability.
          Aeon Analytics FZ-LLC and its suppliers disclaim all implied warranties and shall not be liable for any
          damages—direct, indirect, or otherwise—arising from your use of the Platform, even if advised of potential
          harm. Your sole remedy for dissatisfaction is to cease using the Platform.
        </p>

        {/* Indemnification */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Indemnification
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          You agree to defend and indemnify Aeon Analytics FZ-LLC, its affiliates, and agents against any claims,
          losses, or expenses (including legal fees) stemming from your use of the Platform, violation of these Terms,
          or infringement of third-party rights. The Company may assume control of any defense at its expense, with
          your full cooperation required.
        </p>

        {/* Media Usage Rights */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Media Usage Rights
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          By submitting media (e.g., images, videos) to Aeon Analytics FZ-LLC, you grant a perpetual, royalty-free,
          worldwide license for the Company to use, adapt, and distribute such content for promotional purposes across
          various channels. You confirm your ownership or authorization to provide this license, with no further compensation
          owed.
        </p>

        {/* Educational Disclaimer */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Educational Disclaimer
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          The Company does not offer trading education but seeks to identify skilled traders. No live trading occurs
          directly through the Platform. Successful participants may receive capital for live trading under separate
          agreements. Information provided is for general purposes only, not as financial advice, and the Company is not
          liable for decisions based on it.
        </p>

        {/* Account Creation */}
        <h4
          className={`text-2xl leading-tight font-semibold font-inter mt-6 mb-[10px] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          Account Creation
        </h4>
        <p
          className={`text-base leading-[1.71] mt-[10px] mb-10 ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
          }`}
        >
          To register, you must provide personal details (e.g., name, email, birth date) and create unique login
          credentials, subject to our Privacy Policy. Accounts are non-transferable, and you are responsible for their
          security, notifying us immediately of any breaches.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
