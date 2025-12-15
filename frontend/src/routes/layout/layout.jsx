import Navbar from "../../components/navbar/Navbar"
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{minHeight: '100vh', maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      <div style={{flex: 1}}>
        <Outlet/>
      </div>
    </div>
  );
}
