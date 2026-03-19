function PrivacyPolicy() {
  return (
    <main className="relative pt-32 pb-24 bg-surface min-h-screen">
      <div className="fixed inset-0 blueprint-grid-image z-0 opacity-50" aria-hidden="true"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter mb-4">Privacy Policy</h1>
          <p className="font-label text-xs uppercase tracking-[0.2em] text-accent-blue font-bold">Last Updated: March 2026</p>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-8 md:p-12 shadow-xl space-y-12">
          
          <section>
            <h3 className="font-headline text-2xl font-bold mb-4">1. Introduction</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              At Arova Technology, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect, how it is used, and the steps we take to ensure your personal data is handled appropriately when you use our website or services.
            </p>
          </section>

          <section>
            <h3 className="font-headline text-2xl font-bold mb-4">2. Information We Collect</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-on-surface-variant text-sm md:text-base space-y-2 ml-4">
              <li>Contact information (such as name, email address, and phone number) provided via our forms.</li>
              <li>Business details necessary for establishing service agreements.</li>
              <li>Usage data and analytics to improve our website experience.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-headline text-2xl font-bold mb-4">3. How We Use Your Information</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              The information we collect is used strictly to provide, maintain, and improve our services, communicate with you regarding your projects, and send administrative information. We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h3 className="font-headline text-2xl font-bold mb-4">4. Data Security</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              We implement industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. Our platforms (including Arova Healthcare) utilize robust encryption protocols.
            </p>
          </section>

          <section>
            <h3 className="font-headline text-2xl font-bold mb-4">5. Contact Us</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              If you have any questions about this Privacy Policy, please contact us at via our official WhatsApp or LinkedIn channels.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;