import { redirect } from "next/navigation";

/** Short link for print/QR codes → breast-pump order section on the home page. */
export default function BreastPumpShortcut() {
  redirect("/#kMilchpumpe");
}
