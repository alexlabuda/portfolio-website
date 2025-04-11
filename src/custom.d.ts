declare module '*.svg' {
  import React from 'react';
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare module '@/app/components/icons' {
  import React from 'react';
  
  export const BigQueryIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const PubSubIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const CloudFunctionsIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const VertexAIIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const SecretManagerIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const CloudStorageIcon: React.FC<React.SVGProps<SVGSVGElement>>;
} 