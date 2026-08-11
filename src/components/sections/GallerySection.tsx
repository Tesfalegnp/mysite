import { useState, useMemo } from 'react';
import { Award, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { galleryItems } from '../../data/gallery';
import { GalleryItem, GalleryCategory } from '../../types/gallery';
import GalleryLightbox from '../gallery/GalleryLightbox';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  // Compute available non-empty categories
  const categoryFilters = useMemo(() => {
    const counts = new Map<GalleryCategory, number>();
    counts.set('all', galleryItems.length);

    galleryItems.forEach((item) => {
      counts.set(item.category, (counts.get(item.category) || 0) + 1);
    });

    const filters: { id: GalleryCategory; label: string }[] = [
      { id: 'all', label: 'All Documents' },
    ];

    if ((counts.get('certificate') || 0) > 0) {
      filters.push({ id: 'certificate', label: 'Certificates' });
    }
    if ((counts.get('recommendation') || 0) > 0) {
      filters.push({ id: 'recommendation', label: 'Recommendations' });
    }
    if ((counts.get('leadership') || 0) > 0) {
      filters.push({ id: 'leadership', label: 'Leadership' });
    }
    if ((counts.get('community') || 0) > 0) {
      filters.push({ id: 'community', label: 'Community' });
    }

    return filters;
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-20 bg-[#0b0f19] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Gallery & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A collection of selected certificates, recommendations, achievements, and professional moments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categoryFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedCategory(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                selectedCategory === filter.id
                  ? 'bg-purple-600 text-white font-semibold shadow-lg shadow-purple-950 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative h-56 bg-[#080d19] overflow-hidden flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/70 text-purple-300 border border-purple-800/60 backdrop-blur-md">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-mono font-semibold shadow-xl">
                    <Eye className="w-4 h-4" />
                    <span>View Document</span>
                  </span>
                </div>
              </div>

              {/* Text Card Info */}
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400">
                  <FileText className="w-3.5 h-3.5" />
                  <span>{item.issuer}</span>
                </div>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-purple-300 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Action Footer */}
              <div className="px-5 py-3 border-t border-slate-800/80 bg-slate-900/40 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Asset</span>
                </span>
                <span className="text-purple-400 group-hover:translate-x-0.5 transition-transform">
                  Inspect →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(item) => setActiveLightboxItem(item)}
      />
    </section>
  );
}
