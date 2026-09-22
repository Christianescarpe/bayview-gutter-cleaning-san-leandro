// Mapping of optimized gutter cleaning images to pages and sections
export const images = {
  heroHome: '/images/gutter-cleaning/man-on-ladder-cleaning-gutters-of-a-suburban-house.webp',
  heroAlt: '/images/gutter-cleaning/adult-cleaning-leaves-from-gutters-on-a-home.webp',
  heroTechnician: '/images/gutter-cleaning/male-technician-in-blue-uniform-climbing-ladder-on.webp',
  heroVacuum: '/images/gutter-cleaning/man-cleaning-gutters-on-house-with-vacuum.webp',
  heroRepair: '/images/gutter-cleaning/man-repairing-gutter-with-power-tool-outside-home.webp',
  heroGuard: '/images/gutter-cleaning/rooftop-gutter-protection-system-on-a-residential.webp',
  heroDownspout: '/images/gutter-cleaning/rainwater-flowing-from-downspout-on-house-roof.webp',
  heroCommercial: '/images/gutter-cleaning/window-cleaner-working-high-up-on-urban-building.webp',
  heroResidential: '/images/gutter-cleaning/man-cleans-leaves-from-gutters-in-autumn.webp',
  heroInspection: '/images/gutter-cleaning/worker-climbs-ladder-inspecting-building-under-blu.webp',

  // Collage sets
  collageHome: [
    '/images/gutter-cleaning/man-working-on-gutter-wearing-gloves-and-cap.webp',
    '/images/gutter-cleaning/gutters-clogged-with-leaves-and-small-branches.webp',
    '/images/gutter-cleaning/silver-gutter-system-on-a-brown-roof.webp',
  ],
  collageService: [
    '/images/gutter-cleaning/gutter-cleaning-with-brush-and-pole-in-suburbia.webp',
    '/images/gutter-cleaning/man-cleaning-gutters-with-vacuum-and-safety-gloves.webp',
    '/images/gutter-cleaning/pressure-washing-the-black-gutters-of-a-house.webp',
  ],
  collageLocation: [
    '/images/gutter-cleaning/fixing-ladder-on-a-rooftop-on-bright-day.webp',
    '/images/gutter-cleaning/house-exterior-detail-with-autumn-leaves.webp',
    '/images/gutter-cleaning/man-on-ladder-cleaning-gutters-of-a-suburban-house.webp',
  ],

  // Cta Inset
  ctaTechnician: '/images/gutter-cleaning/man-cleaning-gutters-with-vacuum-and-safety-gloves.webp',
  ctaWorker: '/images/gutter-cleaning/male-technician-in-blue-uniform-climbing-ladder-on.webp',

  // Trust / Testimonial
  trustShowcase: '/images/gutter-cleaning/man-working-on-gutter-wearing-gloves-and-cap.webp',
  cloggedBefore: '/images/gutter-cleaning/brown-leaves-collect-on-rooftop-near-path.webp',
  cloggedAfter: '/images/gutter-cleaning/silver-gutter-system-on-a-brown-roof.webp',
};

// Map slug to specific hero image
export function getHeroImageForSlug(slug: string): string {
  const map: Record<string, string> = {
    '': images.heroHome,
    'gutter-cleaning': images.heroHome,
    'downspout-cleaning': images.heroDownspout,
    'gutter-and-downspout-cleaning': images.heroResidential,
    'clogged-gutter-cleaning': '/images/gutter-cleaning/gutters-clogged-with-leaves-and-small-branches.webp',
    'gutter-debris-removal': '/images/gutter-cleaning/brown-leaves-collect-on-rooftop-near-path.webp',
    'gutter-maintenance': '/images/gutter-cleaning/man-working-on-gutter-wearing-gloves-and-cap.webp',
    'gutter-inspection': images.heroInspection,
    'gutter-repair': images.heroRepair,
    'gutter-guard-installation': images.heroGuard,
    'gutter-guard-cleaning': images.heroGuard,
    'commercial-gutter-cleaning': images.heroCommercial,
    'residential-gutter-cleaning': images.heroResidential,
    'roof-and-gutter-cleaning': '/images/gutter-cleaning/man-power-washing-the-roof-on-a-sunny-day.webp',
    'emergency-gutter-cleaning': images.heroDownspout,
    'areas-we-serve': images.heroHome,
    'san-lorenzo': images.heroResidential,
    'castro-valley': '/images/gutter-cleaning/house-exterior-detail-with-autumn-leaves.webp',
    'oakland': images.heroCommercial,
    'hayward': images.heroTechnician,
    'alameda': '/images/gutter-cleaning/fixing-ladder-on-a-rooftop-on-bright-day.webp',
    'union-city': images.heroVacuum,
    'fremont': images.heroRepair,
    'newark': images.heroDownspout,
    'faq': images.heroInspection,
    'contact': images.heroTechnician,
  };

  return map[slug] || images.heroHome;
}
