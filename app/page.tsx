import Hero from './components/sections/Hero';
import WallpaperShowcase from './components/sections/WallpaperShowcase';
import HowItWorks from './components/sections/HowItWorks';
import XPSystem from './components/sections/XPSystem';
import DownloadCTA from './components/sections/DownloadCTA';
import Footer from './components/sections/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WallpaperShowcase />
      <HowItWorks />
      <XPSystem />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
