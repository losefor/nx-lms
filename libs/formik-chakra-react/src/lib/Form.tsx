import React from "react";
import { Formik } from "formik";

interface Props {
  children: any;
  validationSchema?: object;
  initialValues: object;
  onSubmit: (val: object) => void;
  layout?: "vertical" | "horizontal";
}

export function Form({
  children,
  validationSchema,
  initialValues,
  onSubmit,
}: Props) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <>{children}</>
    </Formik>
  );
}
