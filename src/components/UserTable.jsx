import React from 'react';
import { Eye, Edit, Trash2, User } from 'lucide-react';

const UserTable = ({ users, onView, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full bg-white">
        <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group">
              <td className="px-6 py-5 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {user.id}
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">{user.fullName}</div>
                </div>
              </td>
              <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700 font-medium">
                {user.email}
              </td>
              <td className="px-6 py-5 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  user.role === 'Admin' 
                    ? 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-200'
                    : user.role === 'Editor'
                    ? 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border border-amber-200'
                    : 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 border border-emerald-200'
                }`}>
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-5 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-3">
                  <button
                    onClick={() => onView(user)}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:scale-110 border border-transparent hover:border-blue-200"
                    title="View User"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => onEdit(user)}
                    className="text-emerald-600 hover:text-emerald-800 p-2 rounded-lg hover:bg-emerald-50 transition-all duration-200 hover:scale-110 border border-transparent hover:border-emerald-200"
                    title="Edit User"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(user)}
                    className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-all duration-200 hover:scale-110 border border-transparent hover:border-red-200"
                    title="Delete User"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {users.length === 0 && (
        <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-b-xl">
          No users found. Click "Add User" to create your first user.
        </div>
      )}
    </div>
  );
};

export default UserTable;