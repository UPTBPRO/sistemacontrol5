// GuestLayout.jsx
import React from 'react';
import CustomLogo from './CustomLogo'; // Ajusta la ruta según la estructura de tus directorios
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div>
        <CustomLogo />
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
