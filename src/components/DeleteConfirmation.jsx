import React from 'react';
import { X, Trash2, AlertTriangle } from 'lucide-react';

const DeleteConfirmation = ({ user, onConfirm, onCancel }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full border border-gray-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-r from-red-600 to-red-700 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">Confirm Delete</h2>
          <button
            onClick={onCancel}
            className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/20 transition-all duration-200"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Delete User</h3>
              <p className="text-sm text-gray-600 font-medium">This action cannot be undone</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-base text-gray-700 mb-4 font-medium">
              Are you sure you want to delete the following user?
            </p>
            <div className="space-y-3">
              <p className="text-base font-semibold text-gray-900">
                <span className="text-gray-600 font-medium">Name:</span> {user.fullName}
              </p>
              <p className="text-base font-semibold text-gray-900">
                <span className="text-gray-600 font-medium">Email:</span> {user.email}
              </p>
              <p className="text-base font-semibold text-gray-900">
                <span className="text-gray-600 font-medium">Role:</span> {user.role}
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
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