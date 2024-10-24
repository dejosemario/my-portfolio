import SectionDivider from '@/components/atoms/SectionDivider'
import About from '@/components/molecules/About'
import HeroSection from '@/components/molecules/HeroSection'
import Projects from '@/components/organisms/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4">
    <HeroSection />
    <SectionDivider />
    <About />
    <Projects />
    </main>
  )
}
