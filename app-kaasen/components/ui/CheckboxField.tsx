import { FieldError, fieldErrorId } from "./FieldError";

type CheckboxFieldProps = {
  name: string;
  children: React.ReactNode;
  required?: boolean;
  error?: string;
  className?: string;
  idPrefix?: string;
};

export function CheckboxField({ name, children, required = false, error, className = "", idPrefix = "" }: CheckboxFieldProps) {
  const errorName = `${idPrefix}${name}`;
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="flex gap-2.5 text-micro leading-[1.55] text-ink/75">
        <input
          type="checkbox"
          name={name}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? fieldErrorId(errorName) : undefined}
          className="mt-[3px] size-[18px] flex-none accent-kaasen-blue"
        />
        <span className="min-w-0 flex-1">{children}</span>
      </label>
      <FieldError name={errorName} message={error} />
    </div>
  );
}
