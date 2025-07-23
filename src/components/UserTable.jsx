import React from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';

const UserTable = ({ users, onView, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.fullName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  user.role === 'Admin' 
                    ? 'bg-red-100 text-red-800'
                    : user.role === 'Editor'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onView(user)}
                    className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors duration-150"
                    title="View User"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => onEdit(user)}
                    className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition-colors duration-150"
                    title="Edit User"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(user)}
                    className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors duration-150"
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
        <div className="text-center py-8 text-gray-500">
          No users found. Click "Add User" to create your first user.
        </div>
      )}
    </div>
  );
};

export default UserTable;