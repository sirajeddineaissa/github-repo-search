import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  Image,
  useMediaQuery
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

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
          fontWeight="extrabold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color="gray.900"
          textAlign={"center"}
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
          <Link to="/search">
            <Button
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
          </Link>
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
            <HStack>
              <Box>Star Repo</Box>
              <Box>
                <FaStar color="yellow" />
              </Box>
            </HStack>
          </Button>
        </Stack>
      </Box>
      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          src={
            isMobile
              ? require("../assets/mobile-preview.jpg")
              : require("../assets/desktop-preview.jpg")
          }
          alt="Github Repo Search Preview"
        />
      </Box>
    </Box>
  );
};

export default Hero;
