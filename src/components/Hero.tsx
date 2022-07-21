import { Box, Button, Stack, Text, Heading } from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <Heading
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color="gray.900"
          _dark={{ color: "gray.100" }}
        >
          GitHub Repo Search
        </Heading>
        <Text
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.600"
          _dark={{ color: "gray.300" }}
        >
          A web-based interface solution that allows users to search GitHub
          repositories and filter them by username.
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            variant="solid"
            colorScheme="blue"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
            Get Started
          </Button>
          <Button
            href="https://github.com/sirajeddineaissa/github-repo-search"
            target="_blank"
            rel="noopener noreferrer"
            as="a"
            colorScheme="gray"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
            Star Repo ⭐
          </Button>
        </Stack>
      </Box>
      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      ></Box>
    </Box>
  );
};

export default Hero;
