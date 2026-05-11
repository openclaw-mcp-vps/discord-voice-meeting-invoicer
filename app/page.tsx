export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#58a6ff] inline-block"></span>
          For Consultants &amp; Contractors on Discord
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-invoice from your<br />
          <span className="text-[#58a6ff]">Discord voice channel</span> time
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Discord via OAuth, track billable hours per client call, and generate professional invoices automatically — no manual timers needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $29/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🎙️", title: "Voice Channel Tracking", desc: "Detects join/leave events via Discord webhooks and logs every second of billable time." },
            { icon: "📋", title: "Per-Client Projects", desc: "Assign channels to clients and projects. Hourly rates set per project, auto-applied." },
            { icon: "🧾", title: "Instant Invoices", desc: "Generate and send professional PDF invoices with one click at the end of each billing cycle." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Discord servers",
              "Unlimited voice channel tracking",
              "Unlimited clients &amp; projects",
              "Automatic PDF invoice generation",
              "Invoice email delivery",
              "Hourly rate configuration",
              "Monthly billing summaries",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does Discord voice tracking work?",
              a: "You connect your Discord account via OAuth and add our bot to your server. The bot listens for voice state update events (join/leave) and records timestamps. No audio is ever recorded — only presence data."
            },
            {
              q: "Can I assign different rates to different clients?",
              a: "Yes. You map Discord channels to client projects and set a custom hourly rate per project. When you generate an invoice, the correct rate is applied automatically to each session."
            },
            {
              q: "What invoice formats are supported?",
              a: "Invoices are generated as professional PDFs and can be emailed directly to your client from the dashboard. You can customize your business name, logo, and payment terms."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-sm text-[#8b949e]">
        &copy; {new Date().getFullYear()} Discord Voice Meeting Invoicer. All rights reserved.
      </footer>
    </main>
  );
}
