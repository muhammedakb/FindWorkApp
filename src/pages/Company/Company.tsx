import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import MultiSelect from "../../components/MultiSelect";
import { CompanyScreenProps, Filters } from "../../types/navigateTypes";
import { companies } from "./companies.json";

const Company: FC<CompanyScreenProps> = ({ route }) => {
  const { filters, setFilters } = route.params;
  const [selected, setSelected] = useState([]);

  const correctedData = companies.map((company) => ({
    label: company,
    value: company,
  }));

  useEffect(() => {
    setFilters((filters) => {
      const updatedFilters: Filters = {
        category: filters.category,
        level: filters.level,
        location: filters.location,
        company: selected,
      };
      return updatedFilters;
    });
  }, [selected, setSelected]);

  return (
    <View>
      <MultiSelect
        data={correctedData}
        selected={filters.company.length > 0 ? filters.company : selected}
        setSelected={setSelected}
      />
    </View>
  );
};

export default Company;
