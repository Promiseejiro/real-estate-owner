import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./layoutWrapper";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata = {
  title: "Speedly Web",
  description: "Web app for Speedly by HupDev Technologies",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} text-darkPlus `}>
      <body className="font-primary relative text-sm text-darkPlus">
        <Providers>
          {" "}
          <LayoutWrapper>
            {children}
            <div id="modal-root"></div>
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
