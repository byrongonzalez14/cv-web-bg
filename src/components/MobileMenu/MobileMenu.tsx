import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  navigationItems: Array<{ label: string; id: string }>;
  isTransitioning: boolean;
}

export const MobileMenu = ({ navigationItems, isTransitioning }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón Hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center bg-[#ffffff4c] rounded-full backdrop-blur-[4.5px] hover:bg-[#ffffff66] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Menu className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Overlay oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menú desplegable */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#1a1a1a] border-l border-white/10 z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-8 pt-20 space-y-2">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleLinkClick}
              className="relative py-4 px-4 text-white text-base font-medium [font-family:'Montserrat',Helvetica] hover:text-[#d9ff6c] hover:bg-white/5 rounded-xl transition-all duration-300 group"
              style={{ opacity: isTransitioning ? 0.5 : 1 }}
            >
              {item.label}
              {/* Barra lateral animada */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#d9ff6c] rounded-r transition-all duration-300 group-hover:h-8"></span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
