import React from "react";
import {
  Checkbox,
  CheckboxProps,
  Stack,
  Box,
  Collapse,
  useDisclosure,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";

interface OnChangeState {
  name: string;
  permissions: string;
}

interface Props extends CheckboxProps {
  roleName: string;
  onChangePerms: (val: OnChangeState) => void;
  permsValue?: string;
}

export function RoleTree(props: Props) {
  const defautlPerms = [
    props.permsValue?.includes("c") ? "c" : "",
    props.permsValue?.includes("r") ? "r" : "",
    props.permsValue?.includes("u") ? "u" : "",
    props.permsValue?.includes("d") ? "d" : "",
  ];

  const [checkedItems, setCheckedItems] = React.useState(defautlPerms);
  const subTree = useDisclosure();

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  React.useEffect(() => {
    props.onChangePerms({
      name: props.roleName,
      permissions: checkedItems.join(""),
    });
  }, [checkedItems]);

  return (
    <Box>
      <HStack>
        <Icon
          onClick={() => subTree.onToggle()}
          as={FaChevronLeft}
          color={"gray.500"}
          cursor={"pointer"}
          transform={subTree.isOpen ? "rotate(-90deg)" : ""}
          transition={"ease-out .2s"}
        />
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          fontWeight="bold"
          {...props}
          onChange={(e) =>
            setCheckedItems(
              e.target.checked ? ["c", "r", "u", "d"] : ["", "", "", ""]
            )
          }
        >
          {props.roleName}
        </Checkbox>
      </HStack>
      <Collapse in={subTree.isOpen}>
        <Stack ps={12} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0].length > 0}
            {...props}
            onChange={(e) =>
              setCheckedItems([
                e.target.checked ? "c" : "",
                checkedItems[1],
                checkedItems[2],
                checkedItems[3],
              ])
            }
          >
            قرائة
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1].length > 0}
            {...props}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                e.target.checked ? "r" : "",
                checkedItems[2],
                checkedItems[3],
              ])
            }
          >
            كتابة
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[2].length > 0}
            {...props}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                e.target.checked ? "u" : "",
                checkedItems[3],
              ])
            }
          >
            تعديل
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[3].length > 0}
            {...props}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                checkedItems[2],
                e.target.checked ? "d" : "",
              ])
            }
          >
            حذف
          </Checkbox>
        </Stack>
      </Collapse>
    </Box>
  );
}
