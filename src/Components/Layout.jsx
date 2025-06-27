import Navbar from './Navbar'; 
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className=' bg-black text-white'>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
