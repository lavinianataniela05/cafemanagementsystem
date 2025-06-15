// app/dashboard/page.tsx
import Dashboard from '@/components/mainpage/dashboard'

export default function Page() {
  const handleNavigate = (key: string) => {
    // Implement navigation logic here
    console.log('Navigating to:', key);
  };

  return <Dashboard onNavigate={handleNavigate} />;
}
