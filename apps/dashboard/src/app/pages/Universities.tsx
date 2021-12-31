import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { Table } from "antd";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CreateUniversitiesDrawer } from "../components/drawers/CreateUniversitiesDrawer";
import { UpdateUniversitiesDrawer } from "../components/drawers/UpdateUniversitiesDrawer";
import { RemoveModal } from "../components/modals/RemoveModal";

export function Universities() {
  return (
    <div>
      <Table
        title={() => <CreateUniversitiesDrawer />}
        columns={columns}
        dataSource={universities}
        rowKey="id"
      />
    </div>
  );
}

const ActionButtons = ({ record }: any) => {
  console.log(record.enName);
  return (
    <ButtonGroup variant="solid" size="sm" spacing={2}>
      <IconButton
        aria-label="arrow up right"
        colorScheme="blue"
        icon={<BsBoxArrowUpRight />}
      />

      <UpdateUniversitiesDrawer record={record} />

      <RemoveModal
        onClick={() => console.log("delete university")}
        header="حذف الجامعة"
        body="هل انت متاكد انك تريد حذف الجامعة...؟"
        deleteInfo="قم بكتابه اسم الجامعة من اجل تاكيد عمليه الحذف"
        checkText={record.enName}
      />
    </ButtonGroup>
  );
};

const columns = [
  {
    title: "Arabic name",
    key: "arName",
    dataIndex: "arName",
  },
  {
    title: "English name",
    key: "enName",
    dataIndex: "enName",
  },
  {
    title: "Number of students",
    key: "nofStudents",
    dataIndex: "nofStudents",
  },
  {
    title: "Number of teachers",
    key: "nofTeachers",
    dataIndex: "nofTeachers",
  },
  {
    title: "Actions",
    key: "actions",
    render: (text: any, record: any) => <ActionButtons record={record} />,
  },
];

const universities = [
  {
    arName: "الجامعه التكنلوجيه",
    enName: "University of technology",
    nofStudents: 1273,
    nofTeachers: 1973,
  },
  {
    arName: "جامعه النهرين",
    enName: "Al-Nahrain University",
    nofStudents: 1273,
    nofTeachers: 1973,
  },
];
