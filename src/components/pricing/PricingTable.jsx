function PricingTable() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32">
      <h2 className="font-headline text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center">Compare Capabilities</h2>
      <div className="overflow-x-auto custom-scrollbar pb-4">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-surface-container-high/50">
              <th className="p-4 md:p-6 font-label text-xs uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20 whitespace-nowrap">Feature Set</th>
              {/* CHANGED: Starter to Essential */}
              <th className="p-4 md:p-6 font-label text-xs uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20 whitespace-nowrap">Essential</th>
              <th className="p-4 md:p-6 font-label text-xs uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20 text-tertiary whitespace-nowrap">Growth</th>
              <th className="p-4 md:p-6 font-label text-xs uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20 whitespace-nowrap">Enterprise</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            <tr className="hover:bg-surface-container-low transition-colors">
              <td className="p-4 md:p-6 text-sm font-medium whitespace-nowrap">WhatsApp Booking</td>
              <td className="p-4 md:p-6"><span className="material-symbols-outlined text-tertiary">check</span></td>
              <td className="p-4 md:p-6"><span className="material-symbols-outlined text-tertiary">check</span></td>
              <td className="p-4 md:p-6"><span className="material-symbols-outlined text-tertiary">check</span></td>
            </tr>
            <tr className="hover:bg-surface-container-low transition-colors">
              <td className="p-4 md:p-6 text-sm font-medium whitespace-nowrap">AI Call Assistant</td>
              <td className="p-4 md:p-6 text-on-surface-variant">—</td>
              <td className="p-4 md:p-6"><span className="material-symbols-outlined text-tertiary">check</span></td>
              <td className="p-4 md:p-6"><span className="material-symbols-outlined text-tertiary">check</span></td>
            </tr>
            <tr className="hover:bg-surface-container-low transition-colors">
              <td className="p-4 md:p-6 text-sm font-medium whitespace-nowrap">Dashboard</td>
              <td className="p-4 md:p-6 text-sm">Basic</td>
              <td className="p-4 md:p-6 text-sm">Standard</td>
              <td className="p-4 md:p-6 text-sm font-bold">Full Suite</td>
            </tr>
            <tr className="hover:bg-surface-container-low transition-colors">
              <td className="p-4 md:p-6 text-sm font-medium whitespace-nowrap">Website</td>
              <td className="p-4 md:p-6 text-on-surface-variant">—</td>
              <td className="p-4 md:p-6 text-on-surface-variant">—</td>
              <td className="p-4 md:p-6"><span className="material-symbols-outlined text-tertiary">check</span></td>
            </tr>
            <tr className="hover:bg-surface-container-low transition-colors">
              <td className="p-4 md:p-6 text-sm font-medium whitespace-nowrap">Customization</td>
              <td className="p-4 md:p-6 text-sm">Limited</td>
              <td className="p-4 md:p-6 text-sm">Standard</td>
              <td className="p-4 md:p-6 text-sm font-bold">Deep Integration</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PricingTable;