import { MenuOrderPage } from '@/components/mainpage/menuOrderPage';

export default function Page() {
  // Provide a dummy setActivePage function or connect to your actual page state logic
  const setActivePage = (page: string) => {
    // Implement navigation or state update logic here if needed
    console.log('Set active page:', page);
  };

  return <MenuOrderPage setActivePage={setActivePage} />;
}
