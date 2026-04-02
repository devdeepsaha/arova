import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

const IdentityMatrix = ({ interns, refreshData, onEdit }) => {
  const [search, setSearch] = useState('');

  const handleToggleStatus = async (id, currentStatus) => {
    const statuses = ['Active', 'Completed', 'Extended'];
    const nextStatus = statuses[(statuses.indexOf(currentStatus) + 1) % statuses.length];
    const { error } = await supabase.from('interns').update({ status: nextStatus }).eq('id', id);
    if (!error) refreshData();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Confirm deletion? This record will be purged.")) return;
    const { error } = await supabase.from('interns').delete().eq('id', id);
    if (!error) refreshData();
  };

  const filteredInterns = interns.filter(i => 
    i.full_name.toLowerCase().includes(search.toLowerCase()) || 
    (i.verification_id && i.verification_id.toLowerCase().includes(search.toLowerCase()))
  );

  const stats = {
    total: interns.length,
    devs: interns.filter(i => i.verification_id?.includes('-DEV-')).length,
    dsgn: interns.filter(i => i.verification_id?.includes('-DSGN-')).length,
    active: interns.filter(i => i.status === 'Active').length
  };

  return (
    <div className="animate-in fade-in duration-1000 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
        {[
          { l: 'Total', v: stats.total, c: 'text-primary' },
          { l: 'DEV', v: stats.devs, c: 'text-primary' },
          { l: 'DSGN', v: stats.dsgn, c: 'text-primary' },
          { l: 'Active', v: stats.active, c: 'text-emerald-700' }
        ].map(s => (
          <div key={s.l} className="bg-surface-container-lowest p-6 md:p-8 rounded-sm shadow-[0_12px_40px_rgba(50,50,50,0.06)] hover:translate-y-[-2px] transition-all border border-outline-variant/5">
            <p className="uppercase tracking-[0.1em] text-[8px] md:text-[9px] font-black text-stone-400 mb-2 md:mb-4">{s.l}</p>
            <h3 className={`text-3xl md:text-5xl font-headline font-bold ${s.c}`}>{s.v}</h3>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-lowest rounded-sm border border-outline-variant/10 shadow-2xl w-full">
        <div className="p-4 md:p-6 border-b border-outline-variant/10 flex gap-4 w-full">
          <span className="material-symbols-outlined text-stone-300">search</span>
          <input type="text" placeholder="FILTER MATRIX..." className="bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest w-full" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-surface-container-low border-b border-outline-variant/10">
              <tr className="uppercase tracking-widest text-[9px] font-black text-stone-400">
                <th className="p-4 md:p-6">Identity</th>
                <th className="p-4 md:p-6">Ref-ID</th>
                <th className="p-4 md:p-6">Badge</th>
                <th className="p-4 md:p-6">Status</th>
                <th className="p-4 md:p-6 text-right">Operation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {filteredInterns.map(i => (
                <tr key={i.id} className="hover:bg-surface-container-low/30 transition-colors group">
                  <td className="p-4 md:p-6">
                    <div className="flex items-center gap-4">
                      <img 
                        // RECENTLY CHANGED: Updated default fallback profile picture for table view
                        src={i.avatar_url || 'https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'} 
                        className="w-8 h-8 md:w-10 md:h-10 rounded-sm object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-stone-100 bg-white" 
                      />
                      <div>
                        <p className="text-xs md:text-sm font-bold text-primary">{i.full_name}</p>
                        <p className="text-[9px] md:text-[10px] text-stone-400 uppercase font-black">{i.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 md:p-6 font-mono text-[10px] md:text-xs text-emerald-800 font-bold tracking-tighter">{i.verification_id}</td>
                  <td className="p-4 md:p-6">
                    {i.performance_badge ? (
                       <span className="text-[8px] md:text-[9px] font-black uppercase text-stone-500 border border-stone-200 px-2 py-0.5 rounded-sm whitespace-nowrap">{i.performance_badge}</span>
                    ) : (
                       <span className="text-[8px] md:text-[9px] text-stone-300 italic">None</span>
                    )}
                  </td>
                  <td className="p-4 md:p-6">
                    <button onClick={() => handleToggleStatus(i.id, i.status)} className={`px-2 py-1 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase rounded-sm transition-all ${i.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-stone-100 text-stone-400'}`}>{i.status}</button>
                  </td>
                  <td className="p-4 md:p-6 text-right space-x-2 md:space-x-4">
                    {i.certificate_url && <a href={i.certificate_url} target="_blank" rel="noreferrer" className="material-symbols-outlined text-stone-300 hover:text-emerald-600 transition-colors text-sm md:text-base">description</a>}
                    <button onClick={() => { navigator.clipboard.writeText(i.verification_id); alert('Reference ID Copied'); }} className="material-symbols-outlined text-stone-300 hover:text-emerald-600 transition-colors text-sm md:text-base">content_copy</button>
                    <button onClick={() => onEdit(i)} className="material-symbols-outlined text-stone-300 hover:text-blue-500 transition-colors text-sm md:text-base">edit</button>
                    <button onClick={() => handleDelete(i.id)} className="material-symbols-outlined text-stone-300 hover:text-red-500 transition-colors text-sm md:text-base">delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IdentityMatrix;