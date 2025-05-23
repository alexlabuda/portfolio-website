import React from 'react';
import { FiPhone, FiDatabase, FiCpu, FiUsers } from 'react-icons/fi';
import { SiGooglebigquery } from "react-icons/si";
import { LuBrain } from "react-icons/lu";
import VertexAIIcon from './icons/vertexai.svg';

// Call Tracking System Icon
export function CallTrackingIcon() {
  return <FiPhone className="w-8 h-8 text-indigo-600" />;
}

// BigQuery Icon
export function BigQueryIcon() {
    return <SiGooglebigquery className="w-8 h-8 text-blue-600" />;
  }

// ML Classification Icon
export function MLIcon() {
  return <LuBrain className="w-8 h-8 text-purple-600" />;
}

// CDP Platform Icon
export function CDPIcon() {
  return <FiUsers className="w-8 h-8 text-pink-600" />;
} 