"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export const ActiveSelectMenu = ({
  options,
  className,
}: {
  options: { label: string; href: string, icon: any }[];
  className?: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeOption =
    options.find((opt) => pathname === opt.href || pathname.startsWith(`${opt.href}/`)) ||
    options[0];

  const handleSelect = async (href: string) => {
    if (href === pathname) {
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
    setIsLoading(true);
    try {
      await router.push(href);
    } finally {
      // Tambahkan sedikit delay biar animasi kelihatan halus
      setTimeout(() => setIsLoading(false), 400);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Tutup menu saat ganti halaman
    setIsOpen(false);
    setIsLoading(false);
  }, [pathname]);

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block text-sm font-medium ${className || ""}`}
      
    >
      {/* Tombol utama */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="active-select-options"
        disabled={isLoading}
        className={`
          relative px-4 py-2 rounded-xl flex items-center justify-between gap-2
          text-gray-700 bg-white border border-gray-300
          hover:text-primary hover:border-primary
          transition-all duration-300 shadow-sm
          disabled:opacity-70 disabled:cursor-not-allowed
          ${isOpen ? "ring-2 ring-primary/30" : ""}
        `}
      >
        <span className="relative z-10 flex items-center gap-2">
          {isLoading ? (
            <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <>
            {activeOption.icon}
            {activeOption.label}
            </>
          )}
        </span>
        {!isLoading && (
          <svg
            className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {/* Dropdown menu */}
      {isOpen && !isLoading && (
        <div
          id="active-select-options"
          role="listbox"
          className={`
            absolute mt-2 w-full rounded-xl bg-white border border-gray-200 shadow-lg z-20
            overflow-hidden animate-fadeIn
          `}
        >
          {options.map((opt) => {
            const isActive =
              pathname === opt.href || pathname.startsWith(`${opt.href}/`);
            return (
              <button
                key={opt.href}
                onClick={() => handleSelect(opt.href)}
                role="option"
                aria-selected={isActive}
                className={`
                  relative w-full text-left px-4 py-2 flex items-center gap-2 text-sm
                  transition-all duration-300
                  hover:bg-gray-100
                  ${
                    isActive
                      ? "text-primary bg-gradient-to-r from-primary/20 to-primary/40 shadow-inner"
                      : "text-gray-700"
                  }
                `}
              >
                {opt.icon}
                <span className="relative z-10">{opt.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Animasi */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
