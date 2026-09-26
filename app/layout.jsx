import "./globals.css";

export const metadata = {
  title: "Anugerah Utama Motor — Showroom Mobil Palangka Raya",
  description:
    "Anugerah Utama Motor membantu Anda menemukan mobil bekas berkualitas di Palangka Raya — kondisi transparan, proses cepat, rating 5.0 dari pelanggan kami.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
