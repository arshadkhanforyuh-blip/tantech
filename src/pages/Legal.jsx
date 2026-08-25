import { useLocation } from 'react-router-dom'

// ── SHARED LEGAL PAGE STYLES ────────────────────────────────────────────────
const S = {
  // solid bg: legal text must stay readable even if the WebGL backdrop fails to render
  outer: { background: '#0A0A0A', minHeight: '100vh' },
  wrap: { maxWidth: 820, margin: '0 auto', padding: '160px 24px 100px' },
  h1: { fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 6vw, 64px)', letterSpacing: 4, color: '#FFD700', marginBottom: 8 },
  date: { fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color: 'rgba(245,245,240,0.4)', marginBottom: 48 },
  h2: { fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, letterSpacing: 2, color: '#F5F5F0', margin: '40px 0 12px' },
  p: { fontFamily: 'Space Grotesk, sans-serif', fontSize: 15, lineHeight: 1.9, color: 'rgba(245,245,240,0.65)', marginBottom: 14 },
  li: { fontFamily: 'Space Grotesk, sans-serif', fontSize: 15, lineHeight: 1.9, color: 'rgba(245,245,240,0.65)', marginBottom: 8 },
  ul: { paddingLeft: 22, marginBottom: 14, listStyle: 'disc' },
  strong: { color: '#F5F5F0' },
  a: { color: '#FFD700' },
}

const CONTACT = {
  company: 'TanTech LLC',
  address: '200 Continental Drive, Suite 401, Newark, Delaware 19713, USA',
  email: 'info@tantech-llc.com',
  phone: '+1 (773) 444-8207',
}

function Privacy() {
  return (
    <div style={S.wrap}>
      <h1 style={S.h1}>Privacy Policy</h1>
      <p style={S.date}>Effective date: August 25, 2026</p>

      <p style={S.p}>
        {CONTACT.company} (&ldquo;TanTech,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), located at {CONTACT.address}, respects your
        privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have. It applies to
        this website (www.tantech-llc.com) and to communications we exchange with our clients, employees, and business contacts,
        including email, phone, and SMS text messaging.
      </p>

      <h2 style={S.h2}>Information We Collect</h2>
      <ul style={S.ul}>
        <li style={S.li}><span style={S.strong}>Contact information</span> you provide directly — such as your name, email address, mailing address, and phone number — when you fill out a form on our website, engage our services, or become an employee or client of TanTech.</li>
        <li style={S.li}><span style={S.strong}>Business and employment information</span> reasonably required to deliver our services, such as onboarding documents, scheduling preferences, and service correspondence.</li>
        <li style={S.li}><span style={S.strong}>Basic technical data</span> such as browser type and pages visited, used only to operate and improve this website.</li>
      </ul>

      <h2 style={S.h2}>How We Use Your Information</h2>
      <ul style={S.ul}>
        <li style={S.li}>To provide, operate, and improve our services.</li>
        <li style={S.li}>To communicate with you about services you have requested, including appointment scheduling, onboarding, document reminders, and customer support.</li>
        <li style={S.li}>To comply with legal, tax, and regulatory obligations.</li>
      </ul>

      <h2 style={S.h2}>SMS / Text Messaging Privacy</h2>
      <p style={S.p}>
        If you have opted in to receive SMS text messages from TanTech, we use your mobile number solely to send the
        conversational and informational messages described in our <a style={S.a} href="/terms">SMS Terms &amp; Conditions</a> —
        such as appointment scheduling, onboarding and document reminders, and customer support replies. We do not use SMS for
        marketing, promotions, job postings, or recruiting advertisements.
      </p>
      <p style={S.p}>
        <span style={S.strong}>No mobile information will be shared with third parties or affiliates for marketing or promotional
        purposes.</span> All the above categories exclude text messaging originator opt-in data and consent; this information will
        not be shared with, or sold to, any third parties.
      </p>
      <p style={S.p}>
        You can opt out of SMS at any time by replying <span style={S.strong}>STOP</span> to any message. Reply{' '}
        <span style={S.strong}>HELP</span> for assistance, or contact us at {CONTACT.email}.
      </p>

      <h2 style={S.h2}>How We Share Information</h2>
      <p style={S.p}>
        We do not sell or rent your personal information. We share it only with service providers who help us operate our
        business (for example, hosting, payroll, and communications platforms) under obligations of confidentiality, or where
        required by law.
      </p>

      <h2 style={S.h2}>Data Security &amp; Retention</h2>
      <p style={S.p}>
        We use reasonable administrative, technical, and physical safeguards to protect your information, and we retain it only
        as long as needed for the purposes described above or as required by law.
      </p>

      <h2 style={S.h2}>Your Choices &amp; Rights</h2>
      <p style={S.p}>
        You may request access to, correction of, or deletion of your personal information by contacting us at {CONTACT.email}.
        We will respond in accordance with applicable law.
      </p>

      <h2 style={S.h2}>Contact Us</h2>
      <p style={S.p}>
        {CONTACT.company}<br />
        {CONTACT.address}<br />
        Email: <a style={S.a} href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
        Phone: {CONTACT.phone}
      </p>

      <p style={S.p}>
        We may update this Privacy Policy from time to time; the effective date above reflects the latest revision.
      </p>
    </div>
  )
}

function Terms() {
  return (
    <div style={S.wrap}>
      <h1 style={S.h1}>Terms &amp; Conditions</h1>
      <p style={S.date}>Effective date: August 25, 2026</p>

      <p style={S.p}>
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the {CONTACT.company} website
        (www.tantech-llc.com) and our communications programs, including SMS text messaging. By using this website or opting in
        to our SMS program, you agree to these Terms.
      </p>

      <h2 style={S.h2}>SMS Terms &amp; Conditions</h2>
      <p style={S.p}>
        <span style={S.strong}>Program description.</span> TanTech LLC sends conversational and informational SMS messages to
        clients and employees who have opted in. Messages include appointment scheduling and confirmations, onboarding and
        document reminders, and customer support replies. We do not send marketing or promotional messages, job postings, or
        recruiting advertisements via SMS.
      </p>
      <p style={S.p}>
        <span style={S.strong}>Opt-in.</span> You consent to receive SMS from TanTech by providing your mobile number and
        agreeing to be contacted by text — for example, by checking the SMS consent box on one of our forms, or by giving us
        written or verbal consent during onboarding or service engagement. Consent is not a condition of any purchase or of
        employment.
      </p>
      <ul style={S.ul}>
        <li style={S.li}><span style={S.strong}>Message frequency varies</span> depending on your interaction with us.</li>
        <li style={S.li}><span style={S.strong}>Message and data rates may apply.</span> Check with your mobile carrier for details.</li>
        <li style={S.li}><span style={S.strong}>Opt out at any time</span> by replying <span style={S.strong}>STOP</span> to any message. You will receive a final confirmation message, after which no further messages will be sent.</li>
        <li style={S.li}><span style={S.strong}>Need help?</span> Reply <span style={S.strong}>HELP</span> to any message, email us at {CONTACT.email}, or call {CONTACT.phone}.</li>
        <li style={S.li}>Carriers are not liable for delayed or undelivered messages.</li>
      </ul>
      <p style={S.p}>
        For details on how mobile information is handled, see our <a style={S.a} href="/privacy">Privacy Policy</a>. No mobile
        information will be shared with third parties or affiliates for marketing or promotional purposes.
      </p>

      <h2 style={S.h2}>Use of This Website</h2>
      <p style={S.p}>
        You agree to use this website only for lawful purposes. All content on this site — including text, graphics, logos, and
        design — is the property of {CONTACT.company} and may not be reproduced without our written permission.
      </p>

      <h2 style={S.h2}>Services</h2>
      <p style={S.p}>
        Descriptions of our services on this website are for general information only. Specific engagements are governed by the
        written agreement between {CONTACT.company} and the client.
      </p>

      <h2 style={S.h2}>Disclaimer &amp; Limitation of Liability</h2>
      <p style={S.p}>
        This website is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted by law,
        {' '}{CONTACT.company} shall not be liable for any indirect, incidental, or consequential damages arising from your use
        of this website.
      </p>

      <h2 style={S.h2}>Governing Law</h2>
      <p style={S.p}>
        These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-law principles.
      </p>

      <h2 style={S.h2}>Contact Us</h2>
      <p style={S.p}>
        {CONTACT.company}<br />
        {CONTACT.address}<br />
        Email: <a style={S.a} href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
        Phone: {CONTACT.phone}
      </p>
    </div>
  )
}

// One route component for both pages — picks content by pathname
export default function Legal() {
  const { pathname } = useLocation()
  return <div style={S.outer}>{pathname === '/terms' ? <Terms /> : <Privacy />}</div>
}
