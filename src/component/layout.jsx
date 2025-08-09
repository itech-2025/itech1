import { Outlet } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';

export default function Layout() {
  return (
    <>
    {/*content layout */}
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
