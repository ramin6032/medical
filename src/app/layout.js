import { Inter } from "next/font/google";
import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Liveـbirth prediction expert system",
  description:
    "Software Design and Development by Health Information Management Research Center, Kashan University of Medical Sciences, Kashan, Iran",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
