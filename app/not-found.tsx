import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container min-h-[60vh] flex items-center justify-center py-24">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-muted-foreground/20">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border bg-background font-medium hover:bg-muted transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
