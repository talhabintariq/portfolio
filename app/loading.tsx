import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="container min-h-[60vh] flex items-center justify-center py-24">
      <div className="text-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
