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
  Button,
  Center
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
        minWidth={200}
        h={400}
        w={320}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        textAlign={"center"}
        onClick={onOpen}
        p={10}
      >
        <Avatar size={"xl"} src={props.avatar} mb={4} pos={"relative"} />
        <Heading fontSize={"l"}>{props.name}</Heading>
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
        <Center>
          <HStack mt={6} fontSize={"md"} spacing={20}>
            <Box>
              <FaStar color={props.stars ? "gold" : ""} />
              {props.stars}
            </Box>
            <Box>
              <AiOutlineFork color={props.forks ? "#E460C3" : ""} />
              {props.forks}
            </Box>
            <Box>
              <FaBullseye color={props.watchers ? "#E83852" : ""} />
              {props.watchers}
            </Box>
          </HStack>
        </Center>
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
            <HStack mt={4} mr={6} fontSize={"small"} spacing={12}>
              <a href={props.URL} target="_blank" rel="noopener noreferrer">
                <Button
                  mr={16}
                  fontSize={"small"}
                  colorScheme="blue"
                  onClick={onClose}
                >
                  View Repository
                </Button>
              </a>
              {/* <Box>{props.language}</Box> */}
              <Box>
                <FaStar color={props.stars ? "gold" : ""} />
                {props.stars}
              </Box>
              <Box>
                <AiOutlineFork color={props.forks ? "#E460C3" : ""} />
                {props.forks}
              </Box>
              <Box>
                <FaBullseye color={props.watchers ? "#E83852" : ""} />
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
