import { useNavigate } from 'react-router-dom';

export function pageKeyToPath(pageKey: string): string {
  if (pageKey === 'home') return '/';
  if (pageKey === 'our-services') return '/solutions';
  if (pageKey === 'case-studies') return '/results';
  if (pageKey.startsWith('/')) return pageKey;
  return '/' + pageKey;
}

export function useAppNavigate() {
  const navigate = useNavigate();
  return (pageKey: string) => {
    navigate(pageKeyToPath(pageKey));
  };
}
