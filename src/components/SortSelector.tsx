import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const data = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
