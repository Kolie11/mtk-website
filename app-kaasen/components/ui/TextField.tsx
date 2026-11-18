import { FieldError, fieldErrorId } from "./FieldError";
import { controlClass, labelClass, labelTextClass, type FieldVariant } from "./fieldStyles";

type TextFieldProps = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "password";
  required?: boolean;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  defaultValue?: string;
  variant?: FieldVariant;
  className?: string;
  idPrefix?: string;
};

export function TextField({
  name,
  label,
  type = "text",
  required = false,
  error,
  placeholder,
  autoComplete,
  defaultValue,
  variant = "caps",
  className = "",
  idPrefix = "",
}: TextFieldProps) {
  const errorName = `${idPrefix}${name}`;
  return (
    <label className={`${labelClass[variant]} ${className}`}>
      <span className={labelTextClass[variant]}>
        {label}
        {required && variant === "plain" && <span className="text-danger"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? fieldErrorId(errorName) : undefined}
        className={controlClass[variant]}
      />
      <FieldError name={errorName} message={error} />
    </label>
  );
}
