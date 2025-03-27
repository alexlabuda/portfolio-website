import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact | Alex Labuda',
  description: 'Get in touch with Alex Labuda, Senior Data Scientist',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 