import "./globals.css";

export const metadata = {
  title: "Todo App",
  description: "Get work done faster",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
