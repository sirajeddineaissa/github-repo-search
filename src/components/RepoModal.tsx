import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  HStack,
  Box
} from "@chakra-ui/react";
import { AiOutlineFork } from "react-icons/ai";
import { FaBullseye, FaStar } from "react-icons/fa";

interface RepoModalProps {
  isOpen: boolean;
  onClose: () => void;
  avatar: string;
  name: string;
  description: string;
  URL: string;
  stars: number;
  forks: number;
  watchers: number;
}
const RepoModal: React.FC<RepoModalProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {props.description ? props.description : "No Description."}
        </ModalBody>
        <ModalFooter>
          <HStack
            mt={4}
            fontSize={"small"}
            spacing={12}
          >
            <a href={props.URL} target="_blank" rel="noopener noreferrer">
              <Button
                mr={{ base: 11, md: 16 }}
                fontSize={"small"}
                colorScheme="blue"
                onClick={props.onClose}
              >
                View Repository
              </Button>
            </a>
            <Box>
              <FaStar role="staricon" color={props.stars ? "gold" : ""} />
              {props.stars}
            </Box>
            <Box>
              <AiOutlineFork
                role="forkicon"
                color={props.forks ? "#E460C3" : ""}
              />
              {props.forks}
            </Box>
            <Box>
              <FaBullseye
                role="watchericon"
                color={props.watchers ? "#E83852" : ""}
              />
              {props.watchers}
            </Box>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RepoModal;
