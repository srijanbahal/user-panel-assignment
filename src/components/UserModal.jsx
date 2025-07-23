import React from 'react';
import { X, User, Mail, Shield, Phone, MapPin } from 'lucide-react';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">User Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors duration-150"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{user.fullName}</h3>
              <p className="text-sm text-gray-500">ID: {user.id}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">Email</p>
                <p className="text-sm text-gray-900">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">Role</p>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  user.role === 'Admin' 
                    ? 'bg-red-100 text-red-800'
                    : user.role === 'Editor'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {user.role}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">Phone Number</p>
                <p className="text-sm text-gray-900">{user.phoneNumber}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-700">Address</p>
                <p className="text-sm text-gray-900">{user.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-150"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;