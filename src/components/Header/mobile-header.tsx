import {
  Button,
  CloseButton,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";

interface MobileHeaderProps {
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const MobileHeader: React.FC<MobileHeaderProps> = (props) => {
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={props.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={backgroundColor}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={props.onClose}
      />
      <Button
        role="mobiledetailsbutton"
        w="full"
        as="a"
        colorScheme="blue"
        aria-label="Read more about the project on GitHub"
        href="https://github.com/sirajeddineaissa/github-repo-search/blob/main/README.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        Project Details
      </Button>
      <Button
        role="mobilelinkedin"
        w="full"
        as="a"
        colorScheme="blue"
        aria-label="Visit my LinkedIn profile"
        href="https://www.linkedin.com/in/sirajeddineaissa"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Button>
      <Button
        role="mobilegithub"
        w="full"
        as="a"
        colorScheme="blue"
        aria-label="Visit my GitHub profile"
        href="https://github.com/sirajeddineaissa"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Button>
    </VStack>
  );
};

export default MobileHeader;
