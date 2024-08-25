
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import NavBar from './components/Navbar';
import HeroSection from './components/Home';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/sign~up'); 
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div className="fixed top-[50%] left-[50%] flex items-center">
              <div className="spinner"></div>
            </div> 
  }

  return (
    <div>
      <NavBar />
      <HeroSection />
    </div>
  );
}
