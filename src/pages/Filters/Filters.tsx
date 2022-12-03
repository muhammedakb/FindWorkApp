import React, { FC, ReactNode, useState } from "react";
import { View, FlatList } from "react-native";
import { FiltersScreenProps } from "../../types/navigateTypes";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Button from "../../components/Button";
import styles from "./Filters.style";

type FilterItems = {
  name: string;
  icon: ReactNode;
  navigate: "Company" | "Category" | "Level" | "Location";
};

const filterList: FilterItems[] = [
  {
    name: "Company",
    icon: <MaterialIcons name="chevron-right" size={30} color="#000" />,
    navigate: "Company",
  },
  {
    name: "Category",
    icon: <MaterialIcons name="chevron-right" size={30} color="#000" />,
    navigate: "Category",
  },
  {
    name: "Level",
    icon: <MaterialIcons name="chevron-right" size={30} color="#000" />,
    navigate: "Level",
  },
  {
    name: "Location",
    icon: <MaterialIcons name="chevron-right" size={30} color="#000" />,
    navigate: "Location",
  },
];

const Filters: FC<FiltersScreenProps> = ({ navigation, route }) => {
  const [filters, setFilters] = useState({
    company: [],
    category: [],
    level: [],
    location: [],
  });
  console.log("FILTERS", filters);
  return (
    <View style={styles.container}>
      <FlatList
        data={filterList}
        renderItem={({ item }) => (
          <Button
            text={item.name}
            icon={item.icon}
            iconPosition="right"
            style={styles.button}
            textStyle={styles.text}
            onPress={() =>
              navigation.navigate(item.navigate, { filters, setFilters })
            }
          />
        )}
        keyExtractor={(item) => item.name}
      />
      <Button
        text="Apply"
        style={styles.footer_button}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Filters;
