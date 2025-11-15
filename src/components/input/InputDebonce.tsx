"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export interface DebouncedSearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  delay?: number;
}

export default function DebouncedSearchInput({ delay = 500, ...props }: DebouncedSearchInputProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initial = searchParams.get("search") || "";
  const [value, setValue] = useState<string>(initial);
  const [debounced, setDebounced] = useState<string>(initial);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debounced) params.set("search", debounced);
    else params.delete("search");

    router.replace(`?${params.toString()}`);
  }, [debounced]);

  return (
    <input
      className="border p-2 rounded-xl w-full"
      placeholder="Поиск..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
}