import './globals.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import BreadCrumb from './components/BreadCrumb';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', height: '100vh' }}>
          {/* SideBar */}
          <div style={{ flexShrink: 0 }}>
            <SideBar />
          </div>

          {/* Content Area */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <NavBar />
            <BreadCrumb />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
