// Root admin layout: transparent passthrough.
// Login page lives here (no sidebar/header).
// Authenticated pages live in (dashboard)/ which has its own layout.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
