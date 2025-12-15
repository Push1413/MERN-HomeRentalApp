import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', flex: 1, display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Navbar />
        <div style={{flex: 1}}>
          <Outlet/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
