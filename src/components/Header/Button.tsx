import { Box } from "@chakra-ui/react";

const HeaderButton = (
  <Box
    display={{ base: "none", md: "flex" }}
    alignItems="center"
    as="a"
    aria-label="Read more about the project on GitHub"
    href={""}
    target="_blank"
    rel="noopener noreferrer"
    bg="gray.50"
    borderWidth="3px"
    borderColor="gray.200"
    px="1em"
    minH="36px"
    rounded="md"
    fontSize="sm"
    color="gray.800"
    outline="0"
    transition="all 0.3s"
    _hover={{
      bg: "gray.100",
      borderColor: "gray.300"
    }}
    _active={{
      borderColor: "gray.200"
    }}
    _focus={{
      boxShadow: "outline"
    }}
    ml={5}
  >
    <Box as="strong" lineHeight="inherit" fontWeight="semibold">
      Project Details
    </Box>
  </Box>
);

export default HeaderButton;
