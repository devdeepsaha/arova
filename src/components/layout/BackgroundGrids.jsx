function BackgroundGrids() {
  return (
    // NEW: Wrapped both background divs in a Fragment
    <>
      {/* NEW: Converted class to className */}
      <div className="blueprint-grid fixed inset-0 pointer-events-none z-0"></div>
      <div className="cross-grid-overlay fixed inset-0 pointer-events-none z-[1]"></div>
    </>
  );
}

export default BackgroundGrids;