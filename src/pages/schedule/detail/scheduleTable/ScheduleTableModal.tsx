import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  UseDisclosureProps,
} from "@chakra-ui/react";
import NameTag from "@components/NameTag/NameTag";
import NameTagWithClose from "@components/NameTagWithClose/NameTagWithClose";
import Typography from "@components/Typography/Typography";
import { Roles, ScheduleList, User } from "@interfaces/schedule";
import { Applicants } from "@reducers/applicantsReducer";
interface Props extends Partial<UseDisclosureProps> {
  selectedRole: Roles | undefined;
  scheduleList: ScheduleList;
  temporaryScheduleList: ScheduleList;
  applicants: Applicants;
  temporaryApplicants: Applicants;
  handleAddToPendingList: (user: User) => void;
  handleRemoveFromPendingList: (user: User) => void;
  saveScheduleChanges: () => void;
  handleOnClose: (onClose: () => void) => void;
}

const ScheduleTableModal = ({
  isOpen,
  onClose,
  selectedRole,
  temporaryScheduleList,
  applicants,
  handleAddToPendingList,
  handleRemoveFromPendingList,
  saveScheduleChanges,
  handleOnClose,
}: Props) => {
  if (!selectedRole) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen || false}
      onClose={() => handleOnClose(onClose as () => void)}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {selectedRole ? `${selectedRole} 선택` : "역할 선택"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <Stack>
              <Typography>현재 선택된 인원</Typography>
              <Stack flexDir={"row"} flexWrap={"wrap"}>
                {temporaryScheduleList.role[selectedRole].length ? (
                  temporaryScheduleList.role[selectedRole].map((user) => (
                    <NameTagWithClose
                      key={user.userId}
                      userName={user.userName}
                      role={selectedRole}
                      onClick={() => handleRemoveFromPendingList(user)}
                    />
                  ))
                ) : (
                  <Text>선택된 인원이 없습니다.</Text>
                )}
              </Stack>
            </Stack>
            <Stack>
              <Typography>선택 가능한 인원</Typography>
              <Stack flexDir={"row"} flexWrap={"wrap"}>
                {applicants.applied.length > 0 ? (
                  applicants.applied?.map((user) => (
                    <NameTag
                      key={user.userId}
                      userName={user.userName}
                      onClick={() => handleAddToPendingList(user)}
                    ></NameTag>
                  ))
                ) : (
                  <Text>선택 가능한 인원이 없습니다.</Text>
                )}
              </Stack>
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              saveScheduleChanges();
              onClose && onClose();
            }}
          >
            저장
          </Button>
          <Button
            variant="ghost"
            onClick={() => handleOnClose(onClose as () => void)}
          >
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScheduleTableModal;
