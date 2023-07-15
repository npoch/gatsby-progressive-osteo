import React from 'react';
import Layout from './src/components/Layout';
import { FormProvider } from './src/components/FormContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
export function wrapRootElement({ element }) {
  return <FormProvider>{element}</FormProvider>
}