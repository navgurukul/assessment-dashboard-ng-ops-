'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import FormField from './FormField';

export default function GenericForm({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
  submitButtonText = 'Submit',
  cancelButtonText = 'Cancel',
  onCancel,
  isSubmitting = false,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => (
        <Form className="space-y-4">
          {/* Render fields in a grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field) => (
              <div
                key={field.name}
                className={field.type === 'textarea' ? 'md:col-span-2' : ''}
              >
                <FormField field={field} formik={formik} />
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                disabled={isSubmitting || formik.isSubmitting}
              >
                {cancelButtonText}
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting || formik.isSubmitting || !formik.isValid}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting || formik.isSubmitting ? 'Submitting...' : submitButtonText}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
