import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Service from "../../components/Services/Service";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={styles.pageLayout}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.contentWrapper}>
          <Service />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
