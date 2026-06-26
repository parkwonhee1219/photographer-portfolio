import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liam Parker", //브라우저 탭 이름
  description: "Photographer / Video Director", //구글 검색 결과에 쓰임
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}

