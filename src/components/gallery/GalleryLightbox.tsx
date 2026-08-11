import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Award } from 'lucide-react';
import { GalleryItem } from '../../types/gallery';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export default function GalleryLightbox({ item, items, onClose, onSelect }: GalleryLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        navigatePrev();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      }
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const navigatePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const navigateNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Lightbox Container */}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col glass-card rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-[#0d1322]/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-700/50 flex items-center justify-center text-purple-300">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">{item.title}</h3>
              <div className="text-xs font-mono text-purple-400">{item.issuer}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
              {currentIndex + 1} / {items.length}
            </span>
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Open full resolution in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close image viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Preview Stage */}
        <div className="relative flex-1 bg-[#050811] flex items-center justify-center p-4 min-h-[300px] overflow-hidden">
          {/* Navigation Previous Button */}
          <button
            onClick={navigatePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-purple-600 text-white border border-slate-700 shadow-xl transition-all hover:scale-110 z-10"
            aria-label="Previous credential document"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Document / Image Display */}
          <img
            src={item.src}
            alt={item.title}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-all"
          />

          {/* Navigation Next Button */}
          <button
            onClick={navigateNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-purple-600 text-white border border-slate-700 shadow-xl transition-all hover:scale-110 z-10"
            aria-label="Next credential document"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer Details */}
        {item.description && (
          <div className="px-6 py-3 border-t border-slate-800/80 bg-[#0d1322]/90 text-xs text-slate-300 leading-relaxed font-mono">
            {item.description}
          </div>
        )}
      </div>
    </div>
  );
}
