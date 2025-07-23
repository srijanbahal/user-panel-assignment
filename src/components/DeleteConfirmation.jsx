import React from 'react';
import { X, Trash2, AlertTriangle } from 'lucide-react';

const DeleteConfirmation = ({ user, onConfirm, onCancel }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Confirm Delete</h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors duration-150"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Delete User</h3>
              <p className="text-sm text-gray-500">This action cannot be undone</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-700 mb-2">
              Are you sure you want to delete the following user?
            </p>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-900">
                <span className="text-gray-600">Name:</span> {user.fullName}
              </p>
              <p className="text-sm font-medium text-gray-900">
                <span className="text-gray-600">Email:</span> {user.email}
              </p>
              <p className="text-sm font-medium text-gray-900">
                <span className="text-gray-600">Role:</span> {user.role}
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm text-red-800">
              <strong>Warning:</strong> This will permanently delete the user and all associated data. 
              This action cannot be reversed.
            </p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-150"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-2 transition-colors duration-150"
          >
            <Trash2 size={16} />
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;