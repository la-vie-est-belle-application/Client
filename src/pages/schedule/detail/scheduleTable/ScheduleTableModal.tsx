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
import {
  Roles,
  ScheduleList,
  ScheduleListAction,
  User,
} from "@interfaces/schedule";
import {
  APPLICANTS_ACTION_TYPE,
  ApplicantsAction,
} from "@reducers/applicantsReducer";
import { SCHEDULE_LIST_ACTION_TYPE } from "@reducers/scheduleListReducer";

interface Props extends Partial<UseDisclosureProps> {
  selectedRole: Roles | undefined;
  scheduleList: ScheduleList;
  temporaryScheduleList: ScheduleList;
  onUpdateUserInScheduleList: React.Dispatch<ScheduleListAction>;
  onUpdateUserInTemporaryScheduleList: React.Dispatch<ScheduleListAction>;
  applicants: User[];
  onUpdateApplicants: React.Dispatch<ApplicantsAction>;
}

const ScheduleTableModal = ({
  isOpen,
  onClose,
  selectedRole,
  scheduleList,
  temporaryScheduleList,
  onUpdateUserInScheduleList,
  onUpdateUserInTemporaryScheduleList,
  applicants,
  onUpdateApplicants,
}: Props) => {
  if (!selectedRole) {
    return null;
  }

  const handleAddToTemporarySchedule = (user: User) => {
    // Add user to temporaryScheduleList
    onUpdateUserInTemporaryScheduleList({
      type: SCHEDULE_LIST_ACTION_TYPE.ADD_USER,
      payload: {
        role: selectedRole,
        userId: user.userId,
        userName: user.userName,
      },
    });

    // Remove user from applicants
    onUpdateApplicants({
      status: APPLICANTS_ACTION_TYPE.DONE,
      payload: [user],
    });
  };

  const handleRemoveFromTemporarySchedule = (user: User) => {
    // Remove user from temporaryScheduleList
    onUpdateUserInTemporaryScheduleList({
      type: SCHEDULE_LIST_ACTION_TYPE.DELETE_USER,
      payload: {
        role: selectedRole,
        userId: user.userId,
        userName: user.userName,
      },
    });

    // Add user back to applicants
    onUpdateApplicants({
      status: APPLICANTS_ACTION_TYPE.PENDING,
      payload: [user],
    });
  };

  const onHandleSave = () => {
    if (!selectedRole) return;

    const currentUsersInSchedule = scheduleList.role[selectedRole] || [];
    const newTemporaryUsers = temporaryScheduleList.role[selectedRole] || [];

    // Remove current users from scheduleList
    currentUsersInSchedule.forEach(({ userName, userId }) => {
      onUpdateUserInScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.DELETE_USER,
        payload: { role: selectedRole, userName, userId },
      });
    });

    // Add new users to scheduleList
    newTemporaryUsers.forEach(({ userId, userName }) => {
      onUpdateUserInScheduleList({
        type: SCHEDULE_LIST_ACTION_TYPE.ADD_USER,
        payload: { role: selectedRole, userName, userId },
      });
    });

    onClose && onClose();
  };

  return (
    <Modal isOpen={isOpen || false} onClose={onClose || (() => {})} isCentered>
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
                {temporaryScheduleList?.role[selectedRole]?.length ? (
                  temporaryScheduleList?.role[selectedRole].map((user) => (
                    <NameTagWithClose
                      key={user.userId}
                      userName={user.userName}
                      role={selectedRole}
                      onClick={() => handleRemoveFromTemporarySchedule(user)}
                    />
                  ))
                ) : (
                  <Text>선택된 인원이 없습니다.</Text>
                )}
              </Stack>
            </Stack>
            <Stack>
              <Typography>선택 가능한 인원</Typography>
              {applicants.length > 0 ? (
                applicants?.map((user) => (
                  <NameTag
                    key={user.userId}
                    userName={user.userName}
                    onClick={() => handleAddToTemporarySchedule(user)}
                  ></NameTag>
                ))
              ) : (
                <Text>선택 가능한 인원이 없습니다.</Text>
              )}
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onHandleSave}>
            저장
          </Button>
          <Button variant="ghost" onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScheduleTableModal;
