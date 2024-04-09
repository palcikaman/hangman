import { Stack, Text } from "@chakra-ui/react";

type LivesProps = {
  score: number;
  lostLives: number;
};

export const Lives = ({ score, lostLives }: LivesProps) => (
  <Stack alignItems="center">
    <svg
      style={{
        height: 200,
        width: 200,
        stroke: "#000",
        strokeWidth: 0.25,
        strokeLinecap: "round",
        fill: "none",
        border: "1px solid",
        borderRadius: 5,
      }}
      viewBox="0 0 10 12"
    >
      {[
        <path d="M1,11 h8" />,
        <path d="M9,11 v-10" />,
        <path d="M9,1 h-4" />,
        <path d="M5,1 v2" />,
        <circle cx="5" cy="4" r="1" />,
        <path d="M5,5 v3" />,
        <path d="M5,5 l-2,2" />,
        <path d="M5,5 l2,2" />,
        <path d="M5,8 l-2,2" />,
        <path d="M5,8 l2,2" />,
      ].slice(0, lostLives)}
    </svg>
    <Text textAlign="center">Incorrect guesses this session: {score}</Text>
  </Stack>
);
