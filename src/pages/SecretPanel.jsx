import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import Login from '../components/admin/Login';
import IdentityMatrix from '../components/admin/IdentityMatrix';
import CertificateForm from '../components/admin/CertificateForm';

const SecretPanel = () => {
  const [session, setSession] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [interns, setInterns] = useState([]);
  const [editingData, setEditingData] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchInterns();
    });
  }, []);

  const fetchInterns = async () => {
    const { data } = await supabase.from('interns').select('*').order('created_at', { ascending: false });
    if (data) setInterns(data);
  };

  const handleEditInit = (internData) => {
    setEditingData(internData);
    setActiveTab('issue');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSuccess = (msg) => {
    alert(msg);
    setEditingData(null);
    setActiveTab('overview');
    fetchInterns();
  };

  const handleFormCancel = () => {
    setEditingData(null);
    setActiveTab('overview');
  };

  const exportCSV = () => {
    const csv = interns.map(i => `${i.full_name},${i.verification_id}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'arova_registry.csv'; a.click();
  };

  // 1. Render Login if no session
  if (!session) return <Login onLoginSuccess={(sess) => { setSession(sess); fetchInterns(); }} />;

  // 2. Render Main Admin Interface
  return (
    <div className="bg-surface text-on-surface min-h-screen font-body selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-surface/90 backdrop-blur-xl border-b border-outline-variant/10 z-40 px-6 py-4 flex justify-between items-center shadow-sm">
        <h2 className="uppercase tracking-[0.2em] text-[12px] font-black text-[#5f5e5e]">Arova Admin</h2>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="material-symbols-outlined text-primary text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</button>
      </div>

      {isMobileMenuOpen && <div className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setIsMobileMenuOpen(false)}></div>}

      {/* Fixed Sidebar Layout */}
      <aside className={`fixed left-0 top-0 h-screen w-64 border-r border-[#b3b2b1]/15 bg-[#fcf9f8]/95 backdrop-blur-2xl flex flex-col p-8 z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="mt-8 md:mt-12 mb-12">
          <h2 className="uppercase tracking-[0.3em] text-[10px] font-black text-[#5f5e5e]">Arova Systems</h2>
          <p className="text-[10px] text-on-surface-variant/60 font-bold uppercase mt-1">Identity Control</p>
        </div>
        <nav className="flex flex-col gap-2">
          <button onClick={() => { setActiveTab('overview'); handleFormCancel(); setIsMobileMenuOpen(false); }} className={`flex items-center gap-4 px-4 py-3 rounded-sm transition-all duration-300 ${activeTab === 'overview' ? 'bg-[#f6f3f2] text-emerald-800 font-black border-l-2 border-emerald-700' : 'text-[#5f5e5e] opacity-60 hover:opacity-100 hover:bg-stone-50'}`}>
            <span className="material-symbols-outlined text-sm">dashboard</span>
            <span className="uppercase tracking-widest text-[10px] font-bold">Identity Matrix</span>
          </button>
          <button onClick={() => { setActiveTab('issue'); setIsMobileMenuOpen(false); }} className={`flex items-center gap-4 px-4 py-3 rounded-sm transition-all duration-300 ${activeTab === 'issue' ? 'bg-[#f6f3f2] text-emerald-800 font-black border-l-2 border-emerald-700' : 'text-[#5f5e5e] opacity-60 hover:opacity-100 hover:bg-stone-50'}`}>
            <span className="material-symbols-outlined text-sm">{editingData ? 'edit_document' : 'verified_user'}</span>
            <span className="uppercase tracking-widest text-[10px] font-bold">{editingData ? 'Edit Record' : 'New Certificate'}</span>
          </button>
        </nav>
        <button onClick={exportCSV} className="mt-auto mb-4 text-[10px] font-black uppercase text-stone-400 hover:text-emerald-700 transition-colors text-left px-4">Export Registry (CSV)</button>
        <button onClick={() => supabase.auth.signOut().then(() => setSession(null))} className="text-[10px] font-black uppercase text-red-500 text-left px-4">Terminate Session</button>
      </aside>

      <main className="md:ml-64 pt-24 md:pt-24 px-4 md:px-12 pb-12 min-h-screen blueprint-grid">
        <header className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-primary uppercase leading-none mt-4 md:mt-0">Secret Panel</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-4">
             <p className="text-on-surface-variant/80 font-bold tracking-[0.1em] md:tracking-[0.2em] text-[9px] md:text-[10px] uppercase break-all">Administrative Node: {session.user.email}</p>
             <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse hidden md:block"></span>
          </div>
        </header>

        {/* --- Component Routing --- */}
        {activeTab === 'overview' && (
          <IdentityMatrix interns={interns} refreshData={fetchInterns} onEdit={handleEditInit} />
        )}

        {activeTab === 'issue' && (
          <CertificateForm initialData={editingData} onSuccess={handleFormSuccess} onCancel={handleFormCancel} />
        )}
      </main>

      <div className="fixed inset-0 pointer-events-none blueprint-grid opacity-20 z-[-1]"></div>
    </div>
  );
};

export default SecretPanel;