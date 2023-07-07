import React from 'react';
import { ApplyProvider } from './src/components/ApplyContext';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
export function wrapRootElement({ element }) {
  return <ApplyProvider>{element}</ApplyProvider>
}