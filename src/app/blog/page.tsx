import Blog from '@/components/blogList';
import { Suspense } from 'react';
// ...existing code...

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Blog />
    </Suspense>
  );
}