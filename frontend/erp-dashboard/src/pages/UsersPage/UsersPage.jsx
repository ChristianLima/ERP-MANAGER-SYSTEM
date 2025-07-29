import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserCard from "../../components/Users/UserCard";
import styles from "./UsersPage.module.css";
import UserDetailsModal from "../../components/Users/UserDetailsModal";


const UsersPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Usuário ${i + 1}`,
    registration: `MAT${1000 + i}`,
    role: ["Técnico", "Analista", "Administrador"][i % 3],
  }));

  const usersPerPage = 12;
  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = users.slice(startIndex, startIndex + usersPerPage);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Abre modal com detalhes do usuário
  const handleDetails = (user) => {
    setSelectedUser(user);
  };

  // Fecha modal
  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  // Função de edição (placeholder)
  const handleEdit = (user) => {
    alert(`Editar usuário: ${user.name}`);
  };

  // Função de exclusão (placeholder)
  const handleDelete = (user) => {
    if (window.confirm(`Deseja realmente excluir o usuário ${user.name}?`)) {
      alert(`Usuário ${user.name} excluído.`);
      // Aqui você pode colocar a lógica de exclusão real
      setSelectedUser(null);
    }
  };

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={handleSidebarToggle} />
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.contentWrapper}>
          <h2 className={styles.pageTitle}>Usuários</h2>
          <div className={styles.cardGrid}>
            {currentUsers.map((user) => (
              <UserCard key={user.id} user={user} onDetails={handleDetails} />
            ))}
          </div>
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`${styles.pageButton} ${currentPage === i + 1 ? styles.active : ""}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        <Footer />
      </div>
      {/* Modal de detalhes do usuário */}
      <UserDetailsModal
        user={selectedUser}
        onClose={handleCloseModal}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default UsersPage;
