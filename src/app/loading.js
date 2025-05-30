// app/loading.js
import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          {/* Loader Spinner */}
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
  );
}