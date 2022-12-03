import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import MultiSelect from "../../components/MultiSelect";
import { CategoryScreenProps, Filters } from "../../types/navigateTypes";
import { categories } from "./categories.json";

const Category: FC<CategoryScreenProps> = ({ route }) => {
  const { filters, setFilters } = route.params;
  const [selected, setSelected] = useState([]);

  const correctedData = categories.map((category) => ({
    label: category,
    value: category,
  }));

  useEffect(() => {
    setFilters((filters) => {
      const updatedFilters: Filters = {
        category: selected,
        level: filters.level,
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
        selected={filters.category.length > 0 ? filters.category : selected}
        setSelected={setSelected}
      />
    </View>
  );
};

export default Category;
