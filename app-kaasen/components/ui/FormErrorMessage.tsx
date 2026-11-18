export function FormErrorMessage({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <p role="alert" className="m-0 rounded-input bg-danger/10 px-3.5 py-3 text-small font-semibold text-danger">
      Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns an: 02306 30609-0.
    </p>
  );
}
