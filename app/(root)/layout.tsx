import Header from '@/components/ui/shared/header';
import Footer from '@/components/ui/shared/footer';
import Providers from '@/components/ui/shared/Providers';

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
