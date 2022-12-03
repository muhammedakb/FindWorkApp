import React, { FC, useState } from "react";
import { View } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./MultiSelect.style";

type Props = {
  data: any[];
  selected: never[];
  setSelected: React.Dispatch<React.SetStateAction<never[]>>;
};

const MultiSelectComponent: FC<Props> = ({ data, selected, setSelected }) => {
  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={selected}
        onChange={(item) => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
          <AntDesign name="Safety" style={styles.icon} color="#000" size={20} />
        )}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};

export default MultiSelectComponent;
