import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export default function GlobalLoading() {
  return (
    <div className="global-loader">
      <LoadingSpinner size="large" />
    </div>
  );
}
