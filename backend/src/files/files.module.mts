import uploadFeature from '@adminjs/upload';

import  IFile  from './files.modul.js';
import componentLoader from '../ui/component-loader.js';

const GCScredentials = {
  serviceAccount: process.env.SERVICE_ACCOUNT,
  bucket: process.env.GCP_STORAGE_BUCKET,
  expires: 0,
};

export const files = {
  resource: IFile,
  options: {
    properties: {
      s3Key: {
        type: 'string',
      },
      bucket: {
        type: 'string',
      },
      mime: {
        type: 'string',
      },
      comment: {
        type: 'textarea',
        isSortable: false,
      },
    },
  },
  features: [
    uploadFeature({
      componentLoader,
      provider: { gcp: GCScredentials },
      validation: { mimeTypes: ['image/png'] },
    }),
  ],
};
