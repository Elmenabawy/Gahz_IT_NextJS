import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "جاهز | Gahez IT - دعم فني وتأسيس شركات",
  description: "دعم فني وصيانة IT للشركات والمكاتب في المنصورة والدقهلية. أجهزة، شبكات، سيرفرات، طابعات، كاميرات وتأسيس المقرات الجديدة.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
