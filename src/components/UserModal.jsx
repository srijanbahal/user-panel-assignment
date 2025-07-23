import React from 'react';
import { X, User, Mail, Shield, Phone, MapPin } from 'lucide-react';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">User Details</h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/20 transition-all duration-200"
          >
            <X size={22} />
          </button>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{user.fullName}</h3>
              <p className="text-sm text-gray-500 font-medium">User ID: #{user.id}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Email Address</p>
                <p className="text-base text-gray-900 font-medium">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">User Role</p>
                <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full mt-1 ${
                  user.role === 'Admin' 
                    ? 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-200'
                    : user.role === 'Editor'
                    ? 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border border-amber-200'
                    : 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 border border-emerald-200'
                }`}>
                  {user.role}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Phone Number</p>
                <p className="text-base text-gray-900 font-medium">{user.phoneNumber}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Address</p>
                <p className="text-base text-gray-900 font-medium leading-relaxed">{user.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 border-t border-gray-100 flex justify-end bg-gray-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl transition-all duration-200 font-semibold hover:scale-105 shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;