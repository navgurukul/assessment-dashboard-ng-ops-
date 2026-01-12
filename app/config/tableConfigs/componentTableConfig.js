// Component Table Configuration
// This file defines the table structure, columns, and visibility settings for components

export const COMPONENT_TABLE_ID = 'components';

// All available columns for the components table
export const componentTableColumns = [
  // Always visible columns
  { 
    key: 'componentTag', 
    label: 'COMPONENT TAG', 
    alwaysVisible: true,
    description: 'Unique component identifier'
  },
  
  // Default visible columns
  { 
    key: 'type', 
    label: 'TYPE',
    description: 'Component type (e.g., RAM, SSD, HDD)'
  },
  { 
    key: 'brand', 
    label: 'BRAND',
    description: 'Manufacturer brand'
  },
  { 
    key: 'model', 
    label: 'MODEL',
    description: 'Component model'
  },
  { 
    key: 'specifications', 
    label: 'SPECIFICATIONS',
    description: 'Component specifications'
  },
  { 
    key: 'status', 
    label: 'STATUS',
    description: 'Current status (In Stock, Installed, etc.)'
  },
  { 
    key: 'condition', 
    label: 'CONDITION',
    description: 'Physical condition'
  },
  
  // Optional columns (not visible by default)
  { 
    key: 'serialNumber', 
    label: 'SERIAL NUMBER',
    description: 'Component serial number'
  },
  { 
    key: 'source', 
    label: 'SOURCE',
    description: 'How component was acquired'
  },
  { 
    key: 'campus', 
    label: 'CAMPUS',
    description: 'Campus location'
  },
  { 
    key: 'location', 
    label: 'LOCATION',
    description: 'Specific location within campus'
  },
  { 
    key: 'storage', 
    label: 'STORAGE',
    description: 'Storage location'
  },
  { 
    key: 'shelfNumber', 
    label: 'SHELF NUMBER',
    description: 'Shelf number'
  },
  { 
    key: 'purchaseDate', 
    label: 'PURCHASE DATE',
    description: 'Date of purchase'
  },
  { 
    key: 'purchasePrice', 
    label: 'PURCHASE PRICE',
    description: 'Purchase price'
  },
  { 
    key: 'warrantyExpiryDate', 
    label: 'WARRANTY EXPIRY',
    description: 'Warranty expiry date'
  },
  { 
    key: 'vendorName', 
    label: 'VENDOR',
    description: 'Vendor name'
  },
  { 
    key: 'ownedBy', 
    label: 'OWNED BY',
    description: 'Organization owning the component'
  },
  { 
    key: 'createdAt', 
    label: 'CREATED AT',
    description: 'Record creation date'
  },
  { 
    key: 'updatedAt', 
    label: 'UPDATED AT',
    description: 'Last update date'
  },
  
  // Actions column - always visible
  { 
    key: 'actions', 
    label: 'ACTIONS', 
    alwaysVisible: true,
    description: 'Available actions'
  },
];

// Default visible columns (shown when user first visits or resets)
export const defaultVisibleColumns = [
  'componentTag',
  'type',
  'brand',
  'model',
  'specifications',
  'status',
  'condition',
  'actions',
];

// Get column configuration
export const getComponentTableConfig = () => ({
  tableId: COMPONENT_TABLE_ID,
  columns: componentTableColumns,
  defaultVisibleColumns,
});
