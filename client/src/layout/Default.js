import Footer from './partials/Footer';
import Header from './partials/Header';

export default function Default({ children }) {
  return (
    <div className="default-layout">
      <div className="header mb-2">
        <Header />
      </div>
      <main className="main">{children}</main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
