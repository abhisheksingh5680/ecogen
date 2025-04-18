
import "./globals.css";
import Header from "./(components)/home-component/Header";
import Footer from "./(components)/home-component/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
