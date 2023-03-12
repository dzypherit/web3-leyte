import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy Policy">
      <PrivacyPolicyContainer>
        <RichText>
          <h2>Introduction</h2>
          <p>
          This privacy policy outlines how we collect, use, and protect your personal information in our Web3 community based in Leyte, Philippines. We are committed to protecting your privacy and complying with applicable data protection laws. By using our services, you agree to the terms of this privacy policy.
          </p>
          <br />
          <h2>Collection of Personal Information</h2>
          <p>
          We may collect the following types of personal information from you:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>IP address</li>
            <li>Cookies and other tracking technologies</li>
          </ul>
          <p>We collect this information when you:</p>
          <ul>
            <li>Register for our community</li>
            <li>Participate in discussions and activities in our community</li>
            <li>Submit a support request</li>
            <li>Sign up for our newsletter</li>
            <li>IP address</li>
            <li>Fill out a form on our website</li>
          </ul>
          <br />
          <h2>Use of Personal Information</h2>
          <p>
          We may use your personal information for the following purposes:
          </p>
          <ul>
          <li>To provide and improve our services to you</li>
          <li>To communicate with you about our community and services</li>
          <li>To send you marketing communications, newsletters, and other promotional materials</li>
          <li>To respond to your inquiries and support requests</li>
          <li>To prevent fraud and other illegal activities</li>
          <li>To comply with legal obligations</li>
          </ul>
          <b>We will not share your personal information with third parties for their marketing purposes without your consent.</b>
          <br />
          <h2>Storage and Protection of Personal Information</h2>
          <p>
          We store your personal information in secure servers located in the Philippines. We use reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, or misuse.
          </p>
          <br />
          <h2>Cookies and Tracking Technologies</h2>
          <p>
          We use cookies and other tracking technologies to collect information about your use of our website and services. This information may include your IP address, browser type, operating system, and other usage information. We may use this information to improve our services and to personalize your experience.
          </p>
          <br />
          <h2>Your Rights</h2>
          <p>
          You have the right to access, correct, or delete your personal information that we hold about you. You also have the right to object to the processing of your personal information, and to request that we restrict or limit the processing of your personal information. To exercise your rights, please contact us using the contact information provided below.
          </p>
          <br />
          <h2>Changes to this Privacy Policy</h2>
          <p>
          We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on our website or by email. We encourage you to review this policy periodically to stay informed about how we collect, use, and protect your personal information.
          </p>
          <br />
          <h2>Contact Information</h2>
          <p>
          If you have any questions or concerns about this privacy policy, please contact us at [TBA].
          </p>
          <br />
          

          
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
