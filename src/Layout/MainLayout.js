import Navbar from "../Components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="layout main-layout">
        <Navbar />
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
