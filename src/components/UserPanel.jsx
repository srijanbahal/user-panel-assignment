import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import UserModal from './UserModal';
import UserForm from './UserForm';
import DeleteConfirmation from './DeleteConfirmation';
import { Plus } from 'lucide-react';

const UserPanel = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      role: 'Admin',
      phoneNumber: '+1-555-0123',
      address: '123 Main St, New York, NY 10001'
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      password: 'password456',
      role: 'Editor',
      phoneNumber: '+1-555-0456',
      address: '456 Oak Ave, Los Angeles, CA 90210'
    },
    {
      id: 3,
      fullName: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      password: 'password789',
      role: 'Viewer',
      phoneNumber: '+1-555-0789',
      address: '789 Pine Rd, Chicago, IL 60601'
    }
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setIsFormModalOpen(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsFormModalOpen(true);
  };

  const handleDeleteUser = (user) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleFormSubmit = (userData) => {
    if (editingUser) {
      // Update existing user
      setUsers(users.map(user => 
        user.id === editingUser.id 
          ? { ...userData, id: editingUser.id }
          : user
      ));
    } else {
      // Add new user
      const newUser = {
        ...userData,
        id: Math.max(...users.map(u => u.id), 0) + 1
      };
      setUsers([...users, newUser]);
    }
    setIsFormModalOpen(false);
    setEditingUser(null);
  };

  const confirmDelete = () => {
    setUsers(users.filter(user => user.id !== userToDelete.id));
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const closeModals = () => {
    setIsViewModalOpen(false);
    setIsFormModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedUser(null);
    setEditingUser(null);
    setUserToDelete(null);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            User Management Panel
          </h1>
          <button
            onClick={handleAddUser}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30"
          >
            <Plus size={22} />
            Add User
          </button>
        </div>

        <div className="p-8">
          <UserTable
            users={users}
            onView={handleViewUser}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        </div>
      </div>

      {/* View User Modal */}
      {isViewModalOpen && (
        <UserModal
          user={selectedUser}
          onClose={closeModals}
        />
      )}

      {/* Add/Edit User Form Modal */}
      {isFormModalOpen && (
        <UserForm
          user={editingUser}
          onSubmit={handleFormSubmit}
          onClose={closeModals}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteConfirmation
          user={userToDelete}
          onConfirm={confirmDelete}
          onCancel={closeModals}
        />
      )}
    </div>
  );
};

export default UserPanel;