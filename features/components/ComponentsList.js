'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye } from 'lucide-react';
import TableWrapper from '@/components/Table/TableWrapper';
import ColumnSelector from '@/components/molecules/ColumnSelector';
import CustomButton from '@/components/atoms/CustomButton';
import useFetch from '@/app/hooks/query/useFetch';
import { useTableColumns } from '@/app/hooks/useTableColumns';
import {
  COMPONENT_TABLE_ID,
  componentTableColumns,
  defaultVisibleColumns,
} from '@/app/config/tableConfigs/componentTableConfig';

const actionOptions = ['View', 'Details'];

export default function ComponentsList() {
  const router = useRouter();
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  
  // Column visibility management
  const {
    visibleColumns,
    visibleColumnKeys,
    allColumns,
    toggleColumn,
    showAllColumns,
    resetToDefault,
    alwaysVisibleColumns,
  } = useTableColumns(COMPONENT_TABLE_ID, componentTableColumns, defaultVisibleColumns);
  
  // Build query string with pagination
  const buildQueryString = () => {
    const params = new URLSearchParams();
    params.append('page', currentPage);
    params.append('limit', pageSize);
    
    return params.toString();
  };
  
  // Fetch components data from API with pagination
  const { data, isLoading, isError, error } = useFetch({
    url: `/components?${buildQueryString()}`,
    queryKey: ['components', currentPage, pageSize],
  });

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle page size change
  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  // Transform API data to match table structure
  const componentsListData = React.useMemo(() => {
    if (!data || !data.data || !data.data.items) return [];
    
    return data.data.items.map((component) => ({
      id: component.id,
      componentTag: component.componentTag || 'N/A',
      type: component.componentType?.name || 'N/A',
      brand: component.brand || 'N/A',
      model: component.model || 'N/A',
      specifications: component.specifications || 'N/A',
      serialNumber: component.serialNumber || 'N/A',
      source: component.source === 'NEW_PURCHASE' ? 'New Purchase' : 
              component.source === 'EXTRACTED' ? 'Extracted' : 
              component.source || 'N/A',
      status: component.status === 'IN_STOCK' ? 'In Stock' : 
              component.status === 'INSTALLED' ? 'Installed' : 
              component.status === 'SCRAP' ? 'Scrap' : 
              component.status || 'N/A',
      condition: component.condition === 'NEW' ? 'New' : 
                 component.condition === 'WORKING' ? 'Working' : 
                 component.condition === 'DAMAGED' ? 'Damaged' : 
                 component.condition === 'FAULTY' ? 'Faulty' : 
                 component.condition || 'N/A',
      campus: component.campus?.campusName || component.campus?.name || 'N/A',
      location: component.location?.name || 'N/A',
      storage: component.storageId || component.storage?.name || 'N/A',
      shelfNumber: component.shelfNumber || 'N/A',
      purchaseDate: component.purchaseDetails?.purchaseDate 
        ? new Date(component.purchaseDetails.purchaseDate).toLocaleDateString() 
        : 'N/A',
      purchasePrice: component.purchaseDetails?.purchasePrice 
        ? `₹${component.purchaseDetails.purchasePrice.toLocaleString()}` 
        : 'N/A',
      warrantyExpiryDate: component.purchaseDetails?.warrantyExpiryDate 
        ? new Date(component.purchaseDetails.warrantyExpiryDate).toLocaleDateString() 
        : 'N/A',
      vendorName: component.purchaseDetails?.vendorName || 'N/A',
      ownedBy: component.ownedBy || 'N/A',
      notes: component.notes || 'N/A',
      conditionNotes: component.conditionNotes || 'N/A',
      createdAt: component.createdAt ? new Date(component.createdAt).toLocaleDateString() : 'N/A',
      updatedAt: component.updatedAt ? new Date(component.updatedAt).toLocaleDateString() : 'N/A',
      actions: actionOptions[0], // Default to 'View'
      // Store full component data for details page
      componentData: component
    }));
  }, [data]);

  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "componentTag":
        return (
          <button 
            onClick={() => handleViewDetails(item.id)}
            className="font-medium text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
          >
            {cellValue}
          </button>
        );
      
      case "status":
        const statusColors = {
          'In Stock': 'bg-blue-100 text-blue-800',
          'Installed': 'bg-green-100 text-green-800',
          'Scrap': 'bg-gray-100 text-gray-800',
        };
        return (
          <span className={`px-3 py-1 rounded text-xs font-medium ${statusColors[cellValue] || 'bg-gray-100 text-gray-800'}`}>
            {cellValue}
          </span>
        );
      
      case "condition":
        const conditionColors = {
          'New': 'bg-green-100 text-green-800',
          'Working': 'bg-blue-100 text-blue-800',
          'Damaged': 'bg-orange-100 text-orange-800',
          'Faulty': 'bg-red-100 text-red-800',
        };
        return (
          <span className={`px-3 py-1 rounded text-xs font-medium ${conditionColors[cellValue] || 'bg-gray-100 text-gray-800'}`}>
            {cellValue}
          </span>
        );
      
      case "actions":
        return (
          <CustomButton
            text="Details"
            icon={Eye}
            onClick={() => handleViewDetails(item.id)}
            variant="info"
            size="sm"
          />
        );
      
      default:
        return <span className="text-gray-700">{cellValue}</span>;
    }
  };

  const handleViewDetails = (componentId) => {
    // Find the full component data
    const component = componentsListData.find(comp => comp.id === componentId);
    if (component && component.componentData) {
      // Store component data in sessionStorage for details page
      sessionStorage.setItem('currentComponentData', JSON.stringify(component.componentData));
    }
    router.push(`/components/${componentId}`);
  };

  const handleRowClick = (item) => {
    // Store full component data in sessionStorage
    if (item.componentData) {
      sessionStorage.setItem('currentComponentData', JSON.stringify(item.componentData));
    }
    router.push(`/components/${item.id}`);
  };

  const handleCreateClick = () => {
    router.push('/components/create');
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600">Loading components...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-600 font-medium">Error loading components</p>
          <p className="text-gray-600 mt-2">{error?.message || 'Something went wrong'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Table */}
      <TableWrapper
        data={componentsListData}
        columns={visibleColumns}
        title="Components"
        renderCell={renderCell}
        itemsPerPage={pageSize}
        showPagination={true}
        ariaLabel="Components table"
        onRowClick={handleRowClick}
        showCreateButton={true}
        onCreateClick={handleCreateClick}
        // Column selector component
        columnSelectorComponent={
          <ColumnSelector
            allColumns={allColumns}
            visibleColumnKeys={visibleColumnKeys}
            alwaysVisibleColumns={alwaysVisibleColumns}
            onToggleColumn={toggleColumn}
            onShowAll={showAllColumns}
            onResetToDefault={resetToDefault}
          />
        }
        // Server-side pagination props
        serverPagination={true}
        paginationData={data?.data?.pagination}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
}
