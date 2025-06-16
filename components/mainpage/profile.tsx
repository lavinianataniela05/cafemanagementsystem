"use client";

import React, { useState, useEffect } from 'react';
import { Coffee, Heart, Leaf, Users, Star, Sparkles, User, Mail, Phone, MapPin, Calendar, Award, Settings, Edit3, Camera, Gift } from 'lucide-react';

const ProfilePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  type Preferences = {
    coffeeStrength: string;
    milkType: string;
    sweetness: string;
    temperature: string;
  };
  
  type UserProfile = {
    name: string;
    email: string;
    phone: string;
    location: string;
    joinDate: string;
    loyaltyPoints: number;
    favoriteOrder: string;
    visits: number;
    preferences: Preferences;
  };

  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "Lavinia Nataniela Novyandi",
    email: "lavinia.nataniela@gmail.com",
    phone: "+62 812-3456-7890",
    location: "JL. Majapahit No. 45, Surabaya, Indonesia",
    joinDate: "March 2022",
    loyaltyPoints: 1840,
    favoriteOrder: "Iced Vanilla Latte with Oat Milk",
    visits: 112,
    preferences: {
      coffeeStrength: "Medium",
      milkType: "Oat Milk",
      sweetness: "Light",
      temperature: "Iced"
    }
  });
  
  const [editForm, setEditForm] = useState<UserProfile>({ ...userProfile });

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setEditForm(prev => ({
        ...prev,
        [parent]: {
          ...(prev as any)[parent],
          [child]: value
        }
      }));
    } else {
      setEditForm(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSave = () => {
    setUserProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({ ...userProfile });
    setIsEditing(false);
  };

  const achievements = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Coffee Connoisseur",
      description: "100+ visits",
      color: "from-amber-400 to-orange-400",
      earned: true
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Member",
      description: "2+ years with us",
      color: "from-rose-400 to-pink-400",
      earned: true
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco Warrior",
      description: "50+ sustainable choices",
      color: "from-emerald-400 to-green-400",
      earned: true
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Friend Referrer",
      description: "Referred 5+ friends",
      color: "from-blue-400 to-indigo-400",
      earned: false
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
    { id: 'preferences', label: 'Preferences', icon: <Coffee className="w-5 h-5" /> },
    { id: 'rewards', label: 'Rewards', icon: <Gift className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-emerald-200/40 to-green-200/40 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute bottom-20 right-16 w-12 h-12 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-lg animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full shadow-lg border border-amber-200/50">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-semibold text-sm tracking-wide">MY BREW PROFILE</span>
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent leading-tight">
            Welcome Back
          </h1>
          
          <p className="text-xl text-amber-800 font-light">
            Your personalized coffee journey at Brew and Bliss
          </p>
        </div>

        {/* Profile Header Card */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/80 hover:shadow-amber-200/50 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex items-center justify-center shadow-xl border-4 border-white/50 group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <User className="w-16 h-16 text-amber-700" />
                  <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="text-3xl font-bold text-amber-900 bg-white/80 rounded-lg px-3 py-1 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  ) : (
                    <h2 className="text-3xl font-bold text-amber-900">{userProfile.name}</h2>
                  )}
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="p-2 text-amber-600 hover:text-orange-600 hover:bg-amber-100 rounded-lg transition-all duration-300"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-amber-700 mb-4">Member since {userProfile.joinDate}</p>
                
                {isEditing && (
                  <div className="flex gap-3 mb-4 justify-center md:justify-start">
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-lg"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-lg font-semibold hover:from-gray-500 hover:to-gray-600 transition-all duration-300 shadow-lg"
                    >
                      Cancel
                    </button>
                  </div>
                )}
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{userProfile.visits}</div>
                    <div className="text-sm text-amber-700">Visits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{userProfile.loyaltyPoints.toLocaleString()}</div>
                    <div className="text-sm text-amber-700">Points</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-amber-700">VIP Member</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">3</div>
                    <div className="text-sm text-amber-700">Achievements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '300ms'}}>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-2 border border-white/80 max-w-2xl mx-auto">
            <div className="flex flex-wrap justify-center gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-lg transform scale-105'
                      : 'text-amber-700 hover:bg-amber-100 hover:text-orange-600'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '400ms'}}>
          
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/60">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                    Personal Information
                  </h3>
                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="p-2 text-amber-600 hover:text-orange-600 hover:bg-amber-100 rounded-lg transition-all duration-300"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    {isEditing ? (
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="flex-1 bg-white/80 rounded-lg px-3 py-2 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-800"
                      />
                    ) : (
                      <span className="text-amber-800">{userProfile.email}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editForm.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="flex-1 bg-white/80 rounded-lg px-3 py-2 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-800"
                      />
                    ) : (
                      <span className="text-amber-800">{userProfile.phone}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="flex-1 bg-white/80 rounded-lg px-3 py-2 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-800"
                      />
                    ) : (
                      <span className="text-amber-800">{userProfile.location}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-amber-800">Joined {userProfile.joinDate}</span>
                  </div>
                  
                  {isEditing && (
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleSave}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-lg"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-lg font-semibold hover:from-gray-500 hover:to-gray-600 transition-all duration-300 shadow-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/60">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                    Coffee Profile
                  </h3>
                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="p-2 text-amber-600 hover:text-orange-600 hover:bg-amber-100 rounded-lg transition-all duration-300"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="space-y-6">
                  <div>
                    <span className="text-amber-700 font-semibold block mb-2">Favorite Order:</span>
                    {isEditing ? (
                      <textarea
                        value={editForm.favoriteOrder}
                        onChange={(e) => handleInputChange('favoriteOrder', e.target.value)}
                        rows={2}
                        className="w-full bg-white/80 rounded-lg px-3 py-2 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-900 resize-none"
                      />
                    ) : (
                      <p className="text-amber-900">{userProfile.favoriteOrder}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <span className="text-amber-700 text-sm font-semibold block mb-2">Coffee Strength</span>
                      {isEditing ? (
                        <select
                          value={editForm.preferences.coffeeStrength}
                          onChange={(e) => handleInputChange('preferences.coffeeStrength', e.target.value)}
                          className="w-full bg-white/80 rounded-lg px-3 py-2 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-900"
                        >
                          <option value="Light">Light</option>
                          <option value="Medium">Medium</option>
                          <option value="Strong">Strong</option>
                          <option value="Extra Strong">Extra Strong</option>
                        </select>
                      ) : (
                        <p className="text-amber-900 font-semibold">{userProfile.preferences.coffeeStrength}</p>
                      )}
                    </div>
                    
                    <div>
                      <span className="text-amber-700 text-sm font-semibold block mb-2">Milk Type</span>
                      {isEditing ? (
                        <select
                          value={editForm.preferences.milkType}
                          onChange={(e) => handleInputChange('preferences.milkType', e.target.value)}
                          className="w-full bg-white/80 rounded-lg px-3 py-2 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-900"
                        >
                          <option value="Whole Milk">Whole Milk</option>
                          <option value="2% Milk">2% Milk</option>
                          <option value="Skim Milk">Skim Milk</option>
                          <option value="Oat Milk">Oat Milk</option>
                          <option value="Almond Milk">Almond Milk</option>
                          <option value="Soy Milk">Soy Milk</option>
                          <option value="Coconut Milk">Coconut Milk</option>
                        </select>
                      ) : (
                        <p className="text-amber-900 font-semibold">{userProfile.preferences.milkType}</p>
                      )}
                    </div>
                    
                    <div>
                      <span className="text-amber-700 text-sm font-semibold block mb-2">Sweetness Level</span>
                      {isEditing ? (
                        <select
                          value={editForm.preferences.sweetness}
                          onChange={(e) => handleInputChange('preferences.sweetness', e.target.value)}
                          className="w-full bg-white/80 rounded-lg px-3 py-2 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-900"
                        >
                          <option value="None">None</option>
                          <option value="Light">Light</option>
                          <option value="Medium">Medium</option>
                          <option value="Sweet">Sweet</option>
                          <option value="Extra Sweet">Extra Sweet</option>
                        </select>
                      ) : (
                        <p className="text-amber-900 font-semibold">{userProfile.preferences.sweetness}</p>
                      )}
                    </div>
                    
                    <div>
                      <span className="text-amber-700 text-sm font-semibold block mb-2">Temperature</span>
                      {isEditing ? (
                        <select
                          value={editForm.preferences.temperature}
                          onChange={(e) => handleInputChange('preferences.temperature', e.target.value)}
                          className="w-full bg-white/80 rounded-lg px-3 py-2 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-900"
                        >
                          <option value="Iced">Iced</option>
                          <option value="Warm">Warm</option>
                          <option value="Hot">Hot</option>
                          <option value="Extra Hot">Extra Hot</option>
                        </select>
                      ) : (
                        <p className="text-amber-900 font-semibold">{userProfile.preferences.temperature}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Rewards Tab */}
          {activeTab === 'rewards' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-bold mb-4 text-white">Loyalty Points</h3>
                  <div className="text-6xl font-black text-white mb-2">{userProfile.loyaltyPoints.toLocaleString()}</div>
                  <p className="text-amber-50 mb-6">160 points until your next free drink!</p>
                  <div className="bg-white/20 rounded-full h-4 w-full max-w-md mx-auto">
                    <div className="bg-white rounded-full h-4 w-4/5 flex items-center justify-end pr-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent text-center">
                  Achievements
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/60 text-center transition-all duration-300 ${
                        achievement.earned ? 'transform hover:-translate-y-2' : 'opacity-60'
                      }`}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                        {React.cloneElement(achievement.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <h4 className="font-bold text-amber-900 mb-2">{achievement.title}</h4>
                      <p className="text-amber-700 text-sm">{achievement.description}</p>
                      {achievement.earned && (
                        <div className="mt-3">
                          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">
                            Earned
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content would go here */}
          {activeTab === 'preferences' && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/60 text-center">
              <Coffee className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Coffee Preferences</h3>
              <p className="text-amber-700">Customize your perfect coffee experience here.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/60 text-center">
              <Settings className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Account Settings</h3>
              <p className="text-amber-700">Manage your account preferences and privacy settings.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;