import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4 text-center fw-bold">Privacy Policy</h1>
          <p className="text-muted text-center mb-5">Last Updated: January 1, 2025</p>
          
          <div className="content text-muted" style={{ lineHeight: '1.8' }}>
            <h4 className="fw-bold text-dark mt-4">1. Introduction</h4>
            <p>Welcome to INVESTRO. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

            <h4 className="fw-bold text-dark mt-4">2. Data We Collect</h4>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul>
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
              <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
            </ul>

            <h4 className="fw-bold text-dark mt-4">3. How We Use Your Data</h4>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h4 className="fw-bold text-dark mt-4">4. Data Security</h4>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

            <h4 className="fw-bold text-dark mt-4">5. Contact Us</h4>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@investro.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
