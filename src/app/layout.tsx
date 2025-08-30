import type { Metadata } from "next";
import "../theme.scss";

export const metadata: Metadata = {
  title: "Ricardo Marques - Personal Website",
  description: "Personal website of Ricardo Marques, Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
