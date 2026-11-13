const ToothLogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth={3.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M24 9.5c-3-2.6-6.4-3.8-10-3.2C8.3 7.3 5 12 5.5 18.2c.4 4.6 2.4 8 4 11.6 1.3 3 1.8 6.6 2.6 10 .6 2.4 1.6 3.7 3.2 3.7 1.9 0 2.8-1.6 3.4-4.4l1.3-6.2c.6-2.6 1.9-3.9 4-3.9s3.4 1.3 4 3.9l1.3 6.2c.6 2.8 1.5 4.4 3.4 4.4 1.6 0 2.6-1.3 3.2-3.7.8-3.4 1.3-7 2.6-10 1.6-3.6 3.6-7 4-11.6C43 12 39.7 7.3 34 6.3c-3.6-.6-7 .6-10 3.2Z" />
    <path d="M24 9.5c2.2 1.6 4.4 2.4 6.8 2.4" />
  </svg>
);

export default ToothLogo;
