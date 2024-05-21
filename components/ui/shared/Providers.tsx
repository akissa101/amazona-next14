'use client';

// import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = { children: React.ReactNode };

function Providers({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      {/* <SessionProvider></SessionProvider> */}
      {children}
    </ThemeProvider>
  );
}

export default Providers;
