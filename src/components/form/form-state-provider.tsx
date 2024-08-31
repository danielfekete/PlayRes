import { FormState } from "@/types/formState";
import React from "react";
import FormErrorMessage from "./form-error-message";
import FormIssues from "./form-issues";
import FormSuccessMessage from "./form-success-message";

interface Props {
  formState: FormState;
}

export default function FormStateProvider({
  formState,
  children,
}: Props & Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {formState?.error && !formState?.issues ? (
        <FormErrorMessage message={formState.error} />
      ) : null}

      {formState?.issues ? <FormIssues issues={formState.issues} /> : null}

      {!formState?.issues && !formState?.error && formState?.success ? (
        <FormSuccessMessage message={formState.success} />
      ) : null}
      <div>{children}</div>
    </div>
  );
}
