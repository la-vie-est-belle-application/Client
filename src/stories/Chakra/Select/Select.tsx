import { Select, ChakraProvider } from "@chakra-ui/react";

interface SelectProps {
  selectValue: string;
  optionValue: string[];
}

const SelectComponent = ({ selectValue, optionValue }: SelectProps) => {
  return (
    <ChakraProvider>
      <Select placeholder={selectValue}>
        {optionValue.map((value) => {
          return <option value={value}>{value}</option>;
        })}
      </Select>
    </ChakraProvider>
  );
};

export default SelectComponent;
