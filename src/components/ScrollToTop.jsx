import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // 뒤로가거나 앞으로 가기 (POP)일 때도 스무스하게 위로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}