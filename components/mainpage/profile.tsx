import React, { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Coffee Master",
    phone: "(555) 123-4567",
    email: "master@coffeeshop.com"
  });
  
  const [formData, setFormData] = useState({...profile});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProfile({...formData});
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setFormData({...profile});
    setIsEditing(false);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 dark:from-brown-800 dark:to-brown-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-brown-700 rounded-xl shadow-lg overflow-hidden border border-amber-200 dark:border-brown-600">
        <div className="bg-amber-600 dark:bg-brown-800 p-6 text-center">
          <h1 className="text-2xl font-bold text-amber-50">Coffee Profile</h1>
          <p className="text-amber-100 dark:text-amber-200 mt-1">Your personal brew</p>
        </div>
        
        <div className="p-6">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-amber-100 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-amber-300 dark:border-brown-600 rounded-md focus:ring-2 focus:ring-amber-500 dark:bg-brown-600 dark:text-amber-50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-amber-100 mb-1">Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-amber-300 dark:border-brown-600 rounded-md focus:ring-2 focus:ring-amber-500 dark:bg-brown-600 dark:text-amber-50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-amber-100 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-amber-300 dark:border-brown-600 rounded-md focus:ring-2 focus:ring-amber-500 dark:bg-brown-800 dark:text-amber-200 cursor-not-allowed"
                  disabled
                />
                <p className="text-xs text-brown-500 dark:text-amber-300 mt-1">Email cannot be changed</p>
              </div>
              
              <div className="flex justify-end space-x-2 pt-2">
                <button 
                  type="button" 
                  onClick={handleCancel}
                  className="px-3 py-2 text-sm border border-amber-300 dark:border-brown-600 rounded-md text-brown-700 dark:text-amber-100 hover:bg-amber-50 dark:hover:bg-brown-600"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-3 py-2 text-sm bg-amber-600 hover:bg-amber-700 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-amber-100 dark:bg-brown-900 rounded-full flex items-center justify-center border-2 border-amber-400 dark:border-amber-600 shadow-inner">
                  <span className="text-3xl text-amber-700 dark:text-amber-300">{profile.name.charAt(0)}</span>
                </div>
              </div>
              
              <div className="space-y-3 mt-4">
                <div className="pb-2 border-b border-amber-100 dark:border-brown-600">
                  <h3 className="text-xs font-medium text-brown-500 dark:text-amber-300">NAME</h3>
                  <p className="text-lg font-medium text-brown-800 dark:text-amber-100">{profile.name}</p>
                </div>
                
                <div className="pb-2 border-b border-amber-100 dark:border-brown-600">
                  <h3 className="text-xs font-medium text-brown-500 dark:text-amber-300">PHONE</h3>
                  <p className="text-lg font-medium text-brown-800 dark:text-amber-100">{profile.phone}</p>
                </div>
                
                <div className="pb-2">
                  <h3 className="text-xs font-medium text-brown-500 dark:text-amber-300">EMAIL</h3>
                  <p className="text-lg font-medium text-brown-800 dark:text-amber-100">{profile.email}</p>
                </div>
              </div>
              
              <button 
                onClick={() => setIsEditing(true)}
                className="w-full mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md flex items-center justify-center text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;