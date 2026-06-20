import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="glass-panel sticky top-0 z-50 w-full border-b-0 border-cyber-panel-border/50 bg-cyber-bg/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="font-heading font-bold text-2xl tracking-wider text-white">
                INVEST<span className="text-neon-cyan">MIND</span> <span className="text-neon-purple text-sm">AI</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-neon-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/chat" className="hover:text-neon-purple transition-colors px-3 py-2 rounded-md text-sm font-medium">Chat</Link>
              <Link href="/faq" className="hover:text-neon-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium">FAQ</Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
             <Link href="/chat" className="text-neon-purple text-sm font-bold border border-cyber-purple/50 px-3 py-1 rounded-md">Chat</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
