export interface FormState {
  error?: string;
  success?: string;
  fields?: Record<string, string>;
  issues?: string[];
}
