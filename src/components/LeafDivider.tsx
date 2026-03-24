export function LeafDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <div className="h-px flex-1 max-w-[100px] bg-primary/20" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/40">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.17 20C12.16 20 15.67 17.19 17 13.28C18.33 17.19 21.84 20 25.83 20C26.36 20 26.86 19.87 27.34 19.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 8C17 8 17 1 12 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="h-px flex-1 max-w-[100px] bg-primary/20" />
    </div>
  );
}
