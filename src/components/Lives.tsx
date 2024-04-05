type LivesProps = {
  lostLives: number;
};

export const Lives = ({ lostLives }: LivesProps) => (
  <svg style={{ maxHeight: 200 }} viewBox="0 0 10 12">
    <path d="M1,11 h8" />
    <path d="M9,11 v-10" />
    <path d="M9,1 h-4" />
    <path d="M5,1 v2" />
    {/* TODO bruh */}
    {lostLives > 0 && <circle cx="5" cy="4" r="1" />}
    {lostLives > 1 && <path d="M5,5 v3" />}
    {lostLives > 2 && <path d="M5,5 l-2,2" />}
    {lostLives > 3 && <path d="M5,5 l2,2" />}
    {lostLives > 4 && <path d="M5,8 l-2,2" />}
    {lostLives > 5 && <path d="M5,8 l2,2" />}
  </svg>
);
