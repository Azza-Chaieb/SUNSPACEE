import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/admin-profil/dashboard-stats');
        // Transform the object response into an array for rendering
        const data = response.data; 
        const formattedStats = [
          data.users,
          data.revenue,
          data.active_sessions,
          data.tests // or any other mapping needed
        ].filter(Boolean); // removing undefined
        
        setStats(formattedStats);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch dashboard stats", err);
        setError("Failed to load dashboard statistics");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-[50vh] text-indigo-600">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );
  
  if (error) return (
    <div className="p-6 bg-red-50 border border-red-100 text-red-600 rounded-xl m-8">
      <h3 className="font-bold mb-2">Error Loading Dashboard</h3>
      {error}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2 tracking-tight">Platform Overview</h1>
          <p className="text-gray-500 font-medium">Welcome back, Admin 👋</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-600">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 border border-gray-50">
            <span className="text-sm font-semibold text-gray-400 block mb-3 uppercase tracking-wider">{stat.label}</span>
            <div className="text-4xl font-extrabold text-gray-800 mb-3">
              {stat.value === 0 || stat.value === null ? (
                <span className="text-gray-300 text-2xl font-normal">No Data</span>
              ) : (
                stat.format === 'currency' ? `$${stat.value}` : stat.value
              )}
            </div>
            
            {stat.trend && (
            <div className={`text-sm font-bold flex items-center px-2 py-1 rounded-md w-fit ${stat.isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
              <span className="mr-1 text-lg">{stat.isUp ? '↗' : '↘'}</span> {stat.trend}
            </div>
            )}
             {!stat.trend && (stat.value > 0) && (
                <div className="text-xs text-gray-400 mt-2">No historical data</div>
            )}
            {!stat.trend && (stat.value === 0) && (
                <div className="text-xs text-gray-300 mt-2">Waiting for activity...</div>
            )}
          </div>
        ))}
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-50 min-h-[400px]">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-indigo-500">📈</span> Recent Activity
          </h3>
          <div className="h-64 flex flex-col items-center justify-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
             <span className="text-4xl mb-2">📭</span>
             <span className="text-gray-400 font-medium">No recent activity found</span>
             <span className="text-xs text-gray-300 mt-1">Real activity data will appear here</span>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-50">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-purple-500">🖥️</span> System Status
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
               <div className="flex items-center gap-3">
                 <div className="relative">
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500 absolute top-0 left-0 animate-ping"></div>
                 </div>
                 <span className="font-bold text-green-700">Online</span>
               </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <p className="text-sm text-gray-500 mb-1">Server Metrics</p>
                <p className="text-xs text-gray-400">Monitoring connection not established</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
