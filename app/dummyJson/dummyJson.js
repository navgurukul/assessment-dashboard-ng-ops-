export const menuItems = [
  { name: 'Dashboard', icon: 'LayoutDashboard', path: '/dashboard' },
  { name: 'Assets', icon: 'Package', path: '/assets' },
  { name: 'Components', icon: 'Component', path: '/components' },
  { name: 'Allocations', icon: 'Share2', path: '/allocations' },
  { name: 'Tickets', icon: 'Ticket', path: '/tickets' },
  { name: 'Consignments', icon: 'Archive', path: '/consignments' },
  { name: 'Reports', icon: 'FileText', path: '/reports' },
  { name: 'Settings', icon: 'Settings', path: '/settings' },
];

export const dashboardCards = [
  { id: 1, count: 792, label: 'Active', icon: 'CheckCircle2', bgColor: 'bg-green-100' },
  { id: 2, count: 278, label: 'In Storage', icon: 'Archive', bgColor: 'bg-blue-100' },
  { id: 3, count: 321, label: 'Needs Repair', icon: 'Settings', bgColor: 'bg-gray-800' },
  { id: 4, count: 22, label: 'In Repair', icon: 'Wrench', bgColor: 'bg-gray-400' },
];

export const locationWiseAssetsData = [
  ['Location', 'Count'],
  ['Campus', 1422],
  ['Remote', 64],
];

export const assetsPerCampusData = [
  ['Campus', 'Active', 'Decommission', 'In Repair', 'In Storage', 'Needs Repair'],
  ['Amaravati', 75, 0, 10, 15, 0],
  ['Dantewada', 65, 20, 5, 60, 0],
  ['Dharamshala', 45, 60, 10, 15, 0],
  ['Himachal Pradesh', 0, 0, 0, 0, 0],
  ['Jabalpur', 90, 0, 10, 45, 0],
  ['Kishangarh', 10, 0, 0, 5, 0],
  ['Pune', 110, 0, 20, 70, 0],
  ['Raipur', 130, 0, 5, 65, 0],
  ['Satlapur', 75, 0, 15, 240, 0],
  ['Udaipur', 175, 0, 0, 25, 0],
];
