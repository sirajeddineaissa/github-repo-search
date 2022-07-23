import {
  Heading,
  Avatar,
  Box,
  Text,
  useColorModeValue,
  Badge,
  Stack,
  HStack
} from "@chakra-ui/react";
import { AiOutlineFork } from "react-icons/ai";
import { FaBullseye, FaStar } from "react-icons/fa";

const RepoCard: React.FC = (props: any) => {
  return (
    <Box
      maxW={"420px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Avatar
        size={"xl"}
        src={props.avatar}
        alt={props.username}
        mb={4}
        pos={"relative"}
      />
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
          {`${props.stars}`}
        </Box>
        <Box>
          <AiOutlineFork />
          {`${props.forks}`}
        </Box>
        <Box>
          <FaBullseye />
          {`${props.watchers}`}
        </Box>
      </HStack>
    </Box>
  );
};

export default RepoCard;
