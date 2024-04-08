import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Link, Text } from "@chakra-ui/react";

type InstructionsProps = {
  onBack: () => void;
};

export const Instructions = ({ onBack }: InstructionsProps) => (
  <>
    <Text>Click on letters until you win or lose</Text>
    <Link href="https://www.youtube.com/watch?v=le5uGqHKll8" isExternal>
      <Button rightIcon={<ExternalLinkIcon />} variant="link">
        More info
      </Button>
    </Link>
    <Button onClick={onBack} colorScheme="black">
      Got it
    </Button>
  </>
);
