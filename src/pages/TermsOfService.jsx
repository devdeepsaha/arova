function TermsOfService() {
  return (
    <main className="relative pt-32 pb-24 bg-surface min-h-screen">
      <div className="fixed inset-0 blueprint-grid-image z-0 opacity-50" aria-hidden="true"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter mb-4">Terms of Service</h1>
          <p className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold">Last Updated: March 2026</p>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-8 md:p-12 shadow-xl space-y-12">
          
          <section>
            <h3 className="font-headline text-2xl font-bold mb-4">1. Agreement to Terms</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              By accessing our website and utilizing the services of Arova Technology, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h3 className="font-headline text-2xl font-bold mb-4">2. Intellectual Property</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              The architecture, codebases, custom platforms, and original content created by Arova Technology remain our intellectual property until full transfer of rights is completed as per individual client contracts.
            </p>
          </section>

          <section>
            <h3 className="font-headline text-2xl font-bold mb-4">3. Service Provision</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              We reserve the right to withdraw or amend our services without notice. We will not be liable if for any reason all or any part of the service is unavailable at any time or for any period. Subscription plans (e.g., Arova Healthcare SaaS) are billed as outlined in specific client agreements.
            </p>
          </section>

          <section>
            <h3 className="font-headline text-2xl font-bold mb-4">4. Limitation of Liability</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              In no event shall Arova Technology, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of our services.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

export default TermsOfService;