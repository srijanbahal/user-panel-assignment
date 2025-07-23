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
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">User Management Panel</h1>
          <button
            onClick={handleAddUser}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
          >
            <Plus size={20} />
            Add User
          </button>
        </div>

        <div className="p-6">
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