import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/hero/hero'
import { Experience } from '@/components/experience/experience'
import { Projects } from '@/components/projects/projects'
import { TechStack } from '@/components/tech-stack/tech-stack'
import { Writing } from '@/components/writing/writing'
import { About } from '@/components/about/about'
import { Contact } from '@/components/contact/contact'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
        <Writing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
