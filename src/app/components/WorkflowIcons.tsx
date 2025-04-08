import React from 'react';
import { FiPhone, FiDatabase, FiCpu, FiUsers, FiMail } from 'react-icons/fi';

// Call Tracking System Icon
export function CallTrackingIcon() {
  return <FiPhone className="w-8 h-8 text-indigo-600" />;
}

// BigQuery Icon
export function BigQueryIcon() {
  return <FiDatabase className="w-8 h-8 text-blue-600" />;
}

// ML Classification Icon
export function MLIcon() {
  return <FiCpu className="w-8 h-8 text-purple-600" />;
}

// CDP Platform Icon
export function CDPIcon() {
  return <FiUsers className="w-8 h-8 text-pink-600" />;
}

// Activation Icon
export function ActivationIcon() {
  return <FiMail className="w-8 h-8 text-rose-600" />;
} 