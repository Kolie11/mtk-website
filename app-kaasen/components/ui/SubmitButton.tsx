import { buttonClass, type ButtonSize, type ButtonVariant } from "./buttonStyles";

type SubmitButtonProps = {
  children: React.ReactNode;
  isSubmitting: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function SubmitButton({ children, isSubmitting, variant = "primary", size = "lg", className = "" }: SubmitButtonProps) {
  return (
    <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className={buttonClass(variant, size, className)}>
      {isSubmitting && (
        <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {isSubmitting ? "Wird gesendet …" : children}
    </button>
  );
}
