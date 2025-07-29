import React, { useState } from 'react';
import styles from './UserDetailsModal.module.css';

const UserDetailsModal = ({ user, onClose, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  if (!user) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    onEdit(formData); // Envia dados para componente pai
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <span>{user.name[0]}</span>
          </div>
          <div className={styles.userInfo}>
            <h3>{user.name}</h3>
            <p>{user.job} - {user.allocation}</p>
          </div>
          <button onClick={onClose} className={styles.signOut}>×</button>
        </div>

        <div className={styles.tabs}>
          <span className={styles.activeTab}>Profile</span>
          <span>Security</span>
          <span>Experience</span>
          <span>Settings</span>
        </div>

        <div className={styles.form}>
          <div>
            <label>Nome completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              disabled={!isEditing}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>CPF</label>
            <input type="text" name="cpf" value={formData.cpf} disabled />
          </div>
          <div>
            <label>Função</label>
            <input
              type="text"
              name="job"
              value={formData.job}
              disabled={!isEditing}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Alocação</label>
            <input
              type="text"
              name="allocation"
              value={formData.allocation}
              disabled={!isEditing}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Data de Nascimento</label>
            <input
              type="date"
              name="birth"
              value={
                formData.birth
                  ? new Date(formData.birth).toISOString().split('T')[0]
                  : ''
              }
              disabled
            />
          </div>
          <div>
            <label>Admissão</label>
            <input
              type="date"
              name="admission"
              value={
                formData.admission
                  ? new Date(formData.admission).toISOString().split('T')[0]
                  : ''
              }
              disabled
            />
          </div>
          <div>
            <label>Filhos</label>
            <input
              type="number"
              name="childs"
              value={formData.childs}
              disabled={!isEditing}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Senha</label>
            <input type="password" value="********" disabled />
          </div>
        </div>

        <div className={styles.actions}>
          {!isEditing ? (
            <>
              <button onClick={() => setIsEditing(true)} className={styles.edit}>
                Editar
              </button>
              <button onClick={() => onDelete(user)} className={styles.delete}>
                Excluir
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEditing(false)} className={styles.cancel}>
                Cancelar
              </button>
              <button onClick={handleSave} className={styles.save}>
                Salvar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
