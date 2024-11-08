import "./ui/global.css";
import { inter } from "./ui/fonts";
import { WebVitals } from "./components/web-vitals";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <WebVitals/>
        {children}
        </body>
    </html>
  );
}
