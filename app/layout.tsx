import "./globals.css";
import MainHeaderSection from "@/components/MainHeaderSection";
import NavigationBarSection from "@/components/NaviationBarSection";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MainHeaderSection />
        <NavigationBarSection />
        {children}
      </body>
    </html>
  );
}
