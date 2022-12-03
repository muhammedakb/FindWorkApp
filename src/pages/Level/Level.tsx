import { View } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { levels } from "./levels.json";
import MultiSelect from "../../components/MultiSelect";
import { Filters, LevelScreenProps } from "../../types/navigateTypes";

const Level: FC<LevelScreenProps> = ({ route }) => {
  const { filters, setFilters } = route.params;
  const [selected, setSelected] = useState([]);

  const correctedData = levels.map((level) => ({
    label: level,
    value: level,
  }));

  useEffect(() => {
    setFilters((filters) => {
      const updatedFilters: Filters = {
        category: filters.category,
        level: selected,
        location: filters.location,
        company: filters.company,
      };
      return updatedFilters;
    });
  }, [selected, setSelected]);

  return (
    <View>
      <MultiSelect
        data={correctedData}
        selected={filters.level.length > 0 ? filters.level : selected}
        setSelected={setSelected}
      />
    </View>
  );
};

export default Level;
