import {
  Box,
  Heading,
  useColorModeValue,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  useColorMode
} from "@chakra-ui/react";
import { useRef } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

const Header: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const backgroundColor = useColorModeValue("white", "gray.800");

  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const mode = useColorModeValue("dark", "light");
  const { toggleColorMode: toggleMode } = useColorMode();

  return (
    <Box pos="relative">
      <Heading
        ref={ref}
        transition="box-shadow 0.2s"
        bg={backgroundColor}
        w="full"
        overflowY="hidden"
      ></Heading>
      <Box h="4.5rem" mx="auto" maxW="1200px">
        <Flex w="full" h="full" px="6" align="center" justify="space-between">
          <Flex
            justify="flex-end"
            w="full"
            maxW="1024px"
            align="center"
            color="gray.400"
          >
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
              <Link
                isExternal
                aria-label="GitHub Profile"
                href="https://github.com/sirajeddineaissa"
              >
                <Icon
                  as={AiFillGithub}
                  display="block"
                  transition="color 0.2s"
                  w="5"
                  h="5"
                  _hover={{ color: "gray.600" }}
                />
              </Link>
              <Link
                isExternal
                aria-label="LinkedIn Profile"
                href="https://www.linkedin.com/in/sirajeddineaissa"
              >
                <Icon
                  as={AiFillLinkedin}
                  display="block"
                  transition="color 0.2s"
                  w="5"
                  h="5"
                  _hover={{ color: "gray.600" }}
                />
              </Link>
            </HStack>

            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${mode} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
