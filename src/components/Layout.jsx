// src/components/Layout.jsx
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import IAWidget from '@/components/IAWidget';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner fullScreen />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <IAWidget />
    </div>
  );
}

