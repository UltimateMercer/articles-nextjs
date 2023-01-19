import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ColorFilters from "@/components/ColorFilters";

const Layout = ({ children }) => {
  return (
    <main>
      <div className="block m-auto max-w-full">
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-1 flex-col max-w-full">
            {children}
            <Footer />
          </div>
        </div>
      </div>
      <ColorFilters />
    </main>
  );
};

export default Layout;
