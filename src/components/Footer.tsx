export default function Footer() {
  return (
    <footer className="glass-panel border-t border-cyber-panel-border/50 py-6 z-10 mt-auto bg-cyber-bg/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} InvestMind AI. All rights reserved.
        </div>
        <div className="text-sm font-medium text-gray-300">
          Designed &amp; Developed by <span className="text-neon-cyan font-bold">Samarth Tayal x Rajas Puranik 🚀</span>
        </div>
      </div>
    </footer>
  );
}
