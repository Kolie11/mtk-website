import { FieldError, fieldErrorId } from "./FieldError";
import { controlClass, labelClass, labelTextClass, type FieldVariant } from "./fieldStyles";

type SelectFieldProps = {
  name: string;
  label: string;
  options: readonly string[];
  placeholder?: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
  variant?: FieldVariant;
  className?: string;
  idPrefix?: string;
};

export function SelectField({
  name,
  label,
  options,
  placeholder,
  required = false,
  error,
  defaultValue,
  variant = "plain",
  className = "",
  idPrefix = "",
}: SelectFieldProps) {
  const errorName = `${idPrefix}${name}`;
  return (
    <label className={`${labelClass[variant]} ${className}`}>
      <span className={labelTextClass[variant]}>
        {label}
        {required && variant === "plain" && <span className="text-danger"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue={defaultValue ?? ""}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? fieldErrorId(errorName) : undefined}
        className={`${controlClass[variant]} cursor-pointer`}
      >
        {placeholder !== undefined && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FieldError name={errorName} message={error} />
    </label>
  );
}
