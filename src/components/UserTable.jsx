import React from 'react';
import { Eye, Edit, Trash2, User } from 'lucide-react';

const UserTable = ({ users, onView, onEdit, onDelete }) => {
  return (
    <div className="overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  user.role === 'Admin' 
                    ? 'bg-red-100 text-red-800'
                    : user.role === 'Editor'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onView(user)}
                    className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors"
                    title="View User"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => onEdit(user)}
                    className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors"
                    title="Edit User"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(user)}
                    className="text-gray-400 hover:text-red-600 p-1 rounded transition-colors"
                    title="Delete User"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {users.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>No users found. Click "Add User" to create your first user.</p>
    </div>
  );
};

export default UserTable;