import { FieldError, fieldErrorId } from "./FieldError";
import { controlClass, labelClass, labelTextClass, type FieldVariant } from "./fieldStyles";

type TextAreaFieldProps = {
  name: string;
  label: string;
  rows?: number;
  required?: boolean;
  error?: string;
  placeholder?: string;
  defaultValue?: string;
  variant?: FieldVariant;
  className?: string;
  idPrefix?: string;
};

export function TextAreaField({
  name,
  label,
  rows = 3,
  required = false,
  error,
  placeholder,
  defaultValue,
  variant = "caps",
  className = "",
  idPrefix = "",
}: TextAreaFieldProps) {
  const errorName = `${idPrefix}${name}`;
  return (
    <label className={`${labelClass[variant]} ${className}`}>
      <span className={labelTextClass[variant]}>
        {label}
        {required && variant === "plain" && <span className="text-danger"> *</span>}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? fieldErrorId(errorName) : undefined}
        className={`${controlClass[variant]} resize-y`}
      />
      <FieldError name={errorName} message={error} />
    </label>
  );
}
