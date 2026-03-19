import heroImg from 'public/home.jpg';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Hero imgData={heroImg} imgAlt='home image' title='Professional Cloud Hosting' />
  )
}
