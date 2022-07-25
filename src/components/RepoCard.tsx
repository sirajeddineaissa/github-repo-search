import {
  Heading,
  Avatar,
  Box,
  Text,
  useColorModeValue,
  HStack,
  useDisclosure,
  Center
} from "@chakra-ui/react";
import { AiOutlineFork } from "react-icons/ai";
import { FaBullseye, FaStar } from "react-icons/fa";
import RepoModal from "./RepoModal";

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
              <FaStar role="staricon" color={props.stars ? "gold" : ""} />
              {props.stars}
            </Box>
            <Box>
              <AiOutlineFork role="forkicon" color={props.forks ? "#E460C3" : ""} />
              {props.forks}
            </Box>
            <Box>
              <FaBullseye role="watchericon" color={props.watchers ? "#E83852" : ""} />
              {props.watchers}
            </Box>
          </HStack>
        </Center>
      </Box>
      <RepoModal
        isOpen={isOpen}
        onClose={onClose}
        avatar={props.avatar}
        name={props.name}
        description={props.description}
        URL={props.URL}
        stars={props.stars}
        forks={props.forks}
        watchers={props.watchers}
      />
    </>
  );
};

export default RepoCard;
