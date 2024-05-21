import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Providers from '@/components/shared/Providers';
import React from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen ">
      <Providers>
        <Header />
        <main className="flex-grow wrapper ">{children}</main>
        <Footer />
      </Providers>
    </div>
  );
}
