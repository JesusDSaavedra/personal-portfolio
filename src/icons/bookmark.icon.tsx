export const Bookmark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64" {...props}>
    <defs>
      <linearGradient id="bookmark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <path
      d="M41.148,10C43.827,10,46,12.173,46,14.852v37.406c0,1.945-2.338,2.934-3.734,1.58L32,43.877l-10.266,9.961	C20.338,55.192,18,54.203,18,52.258V14.852C18,12.173,20.173,10,22.852,10H41.148z"
      fill="url(#bookmark-gradient)"
    />
  </svg>
)
