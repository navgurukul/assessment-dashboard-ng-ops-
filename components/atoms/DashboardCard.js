import React from 'react';

const DashboardCard = ({ count, label, icon, bgColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
      <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center`}>
        {icon}
      </div>
      <div className='flex flex-col items-center' >
        <div className="text-4xl font-bold text-gray-800">{count}</div>
        <div className="text-gray-600 text-sm font-medium">{label}</div>
      </div>
    </div>
  );
};

export default DashboardCard;
