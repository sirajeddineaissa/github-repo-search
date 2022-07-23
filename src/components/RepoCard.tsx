import {
  Heading,
  Avatar,
  Box,
  Text,
  useColorModeValue,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "@chakra-ui/react";
import { AiOutlineFork } from "react-icons/ai";
import { FaBullseye, FaStar } from "react-icons/fa";

interface RepoCardProps {
  avatar: string;
  name: string;
  username: string;
  description: string;
  URL: string;
  language: string;
  stars: number;
  forks: number;
  watchers: number;
}

const RepoCard: React.FC<RepoCardProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        maxW={"420px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        onClick={onOpen}
      >
        <Avatar size={"xl"} src={props.avatar} mb={4} pos={"relative"} />
        <Heading fontSize={"l"} fontFamily={"body"}>
          {props.name}
        </Heading>
        <Text fontSize={"sm"} fontWeight={500} color={"gray.500"} mb={4}>
          {props.username}
        </Text>
        <Text
          fontSize={13}
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
        >
          {props.description ? props.description : "No Description."}
        </Text>
        <HStack mt={5} fontSize={"md"} spacing={20}>
          <Box>
            <FaStar />
            {props.stars}
          </Box>
          <Box>
            <AiOutlineFork />
            {props.forks}
          </Box>
          <Box>
            <FaBullseye />
            {props.watchers}
          </Box>
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.description ? props.description : "No Description."}
          </ModalBody>
          <ModalFooter>
            <a href={props.URL} target="_blank" rel="noopener noreferrer">
              <Button
                fontSize={"small"}
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              >
                View Repository
              </Button>
            </a>
            <HStack mt={5} fontSize={"small"} spacing={10}>
              <Box>{props.language}</Box>
              <Box>
                <FaStar />
                {props.stars}
              </Box>
              <Box>
                <AiOutlineFork />
                {props.forks}
              </Box>
              <Box>
                <FaBullseye />
                {props.watchers}
              </Box>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RepoCard;
