import React from 'react';
import { X, Trash2, AlertTriangle } from 'lucide-react';

const DeleteConfirmation = ({ user, onConfirm, onCancel }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Confirm Delete</h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors duration-150"
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
              <h3 className="text-lg font-medium text-gray-900">Delete User</h3>
              <p className="text-sm text-gray-500">This action cannot be undone</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-700 mb-3">
              Are you sure you want to delete the following user?
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium text-gray-600">Name:</span> {user.fullName}
              </p>
              <p className="text-sm">
                <span className="font-medium text-gray-600">Email:</span> {user.email}
              </p>
              <p className="text-sm">
                <span className="font-medium text-gray-600">Role:</span> {user.role}
              </p>
            </div>
          </div>

            <p className="text-sm text-red-800 font-medium">
              <strong>Warning:</strong> This will permanently delete the user and all associated data. 
              This action cannot be reversed.
            </p>
          </div>
        </div>

        <div className="px-8 py-6 border-t border-gray-100 flex justify-end space-x-4 bg-gray-50 rounded-b-2xl">
          <button
            onClick={onCancel}
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-all duration-200 font-semibold hover:scale-105"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl flex items-center gap-3 transition-all duration-200 font-semibold hover:scale-105 shadow-lg"
          >
            <Trash2 size={18} />
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;