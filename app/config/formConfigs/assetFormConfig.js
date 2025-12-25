import * as Yup from 'yup';

export const assetFormFields = [
  {
    name: 'assetTag',
    label: 'Asset Tag',
    type: 'text',
    placeholder: 'Enter asset tag',
    required: true,
  },
  {
    name: 'assetTypeId',
    label: 'Asset Type',
    type: 'text',
    placeholder: 'Enter asset type ID',
    required: true,
  },
  {
    name: 'brand',
    label: 'Brand',
    type: 'text',
    placeholder: 'Enter brand name',
    required: true,
  },
  {
    name: 'model',
    label: 'Model',
    type: 'text',
    placeholder: 'Enter model',
    required: true,
  },
  {
    name: 'specLabel',
    label: 'Spec Label',
    type: 'text',
    placeholder: 'Enter spec label',
    required: true,
  },
  {
    name: 'processor',
    label: 'Processor',
    type: 'text',
    placeholder: 'Enter processor',
    required: true,
  },
  {
    name: 'ramSizeGB',
    label: 'RAM Size (GB)',
    type: 'number',
    placeholder: 'Enter RAM size',
    required: true,
    min: 0,
  },
  {
    name: 'storageSizeGB',
    label: 'Storage Size (GB)',
    type: 'number',
    placeholder: 'Enter storage size',
    required: true,
    min: 0,
  },
  {
    name: 'serialNumber',
    label: 'Serial Number',
    type: 'text',
    placeholder: 'Enter serial number',
    required: true,
  },
  {
    name: 'campusId',
    label: 'Campus ID',
    type: 'text',
    placeholder: 'Enter campus ID',
    required: true,
  },
  {
    name: 'currentLocationId',
    label: 'Current Location ID',
    type: 'text',
    placeholder: 'Enter current location ID',
    required: true,
  },
  {
    name: 'sourceType',
    label: 'Source Type',
    type: 'select',
    placeholder: 'Select source type',
    required: true,
    options: [
      { value: 'PURCHASED', label: 'Purchased' },
      { value: 'DONATED', label: 'Donated' },
      { value: 'LEASED', label: 'Leased' },
    ],
  },
  {
    name: 'purchaseDate',
    label: 'Purchase Date',
    type: 'date',
    placeholder: 'Select purchase date',
    required: true,
  },
  {
    name: 'charger',
    label: 'Charger',
    type: 'checkbox',
    required: false,
  },
  {
    name: 'bag',
    label: 'Bag',
    type: 'checkbox',
    required: false,
  },
];

export const assetValidationSchema = Yup.object().shape({
  assetTag: Yup.string().required('Asset tag is required'),
  assetTypeId: Yup.string().required('Asset type is required'),
  brand: Yup.string().required('Brand is required'),
  model: Yup.string().required('Model is required'),
  specLabel: Yup.string().required('Spec label is required'),
  processor: Yup.string().required('Processor is required'),
  ramSizeGB: Yup.number()
    .required('RAM size is required')
    .min(0, 'RAM size must be positive')
    .integer('RAM size must be an integer'),
  storageSizeGB: Yup.number()
    .required('Storage size is required')
    .min(0, 'Storage size must be positive')
    .integer('Storage size must be an integer'),
  serialNumber: Yup.string().required('Serial number is required'),
  campusId: Yup.string().required('Campus ID is required'),
  currentLocationId: Yup.string().required('Current location ID is required'),
  sourceType: Yup.string()
    .required('Source type is required')
    .oneOf(['PURCHASED', 'DONATED', 'LEASED'], 'Invalid source type'),
  purchaseDate: Yup.date().required('Purchase date is required'),
  charger: Yup.boolean(),
  bag: Yup.boolean(),
});

export const assetInitialValues = {
  assetTag: '',
  assetTypeId: "8fe51cb1-b713-47b1-a958-a26a082efd7c",
  brand: '',
  model: '',
  specLabel: '',
  processor: '',
  ramSizeGB: 0,
  storageSizeGB: 0,
  serialNumber: '',
  campusId: '85ebbbce-35b6-4813-a2c6-4fa4f8c91c21',
  currentLocationId: 'a75ee8db-6ef6-4344-a8fd-5af3609b86d6',
  sourceType: 'PURCHASED',
  purchaseDate: '',
  charger: false,
  bag: false,
};
