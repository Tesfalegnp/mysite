export type GalleryCategory = 'all' | 'certificate' | 'recommendation' | 'leadership' | 'community';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  src: string;
  type: 'image' | 'pdf';
  issuer: string;
  description?: string;
}
