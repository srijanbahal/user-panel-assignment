import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import UserModal from './UserModal';
import UserForm from './UserForm';
import DeleteConfirmation from './DeleteConfirmation';
import { Plus, User } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-light text-gray-900 mb-2">User Management</h1>
          <p className="text-gray-500 font-light">Manage your team members</p>
        </div>

        {/* Add User Button */}
        <div className="mb-8 flex justify-end">
          <button
            onClick={handleAddUser}
            className="bg-black text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition-colors font-medium text-sm"
          >
            <Plus size={16} />
            Add User
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <UserTable
            users={users}
            onView={handleViewUser}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
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