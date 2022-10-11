import React, { FC, useCallback, useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { API_URL_JOBS } from "@env";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Job from "../../components/Job";
import Loading from "../../components/Loading";
import useGetHttp, { FetchTypes } from "../../hooks/useGetHttp";
import { JobsPage, JobType } from "../../types/jobType";
import { JobsScreenProps } from "../../types/navigateTypes";
import { correctDate } from "../../utils/date";
import styles from "./Jobs.style";

const Jobs: FC<JobsScreenProps> = ({ navigation }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { data, error, isLoading, fetchData }: FetchTypes<JobsPage> =
    useGetHttp(`${API_URL_JOBS}?page=${pageNumber}`);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData().finally(() => setRefreshing(false));
  }, []);

  const renderJobs = ({ item }: { item: JobType }) => (
    <Job
      category={item?.categories?.[0]?.name}
      companyName={item?.company?.name}
      publicationDate={correctDate(new Date(item?.publication_date))}
      location={item?.locations?.[0]?.name}
      level={item?.levels?.[0]?.name}
      onPress={() => navigation.navigate("JobDetail", { id: item.id })}
    />
  );

  const goPrevPage = () => {
    setPageNumber((current) => current - 1);
  };

  const goNextPage = () => {
    setPageNumber((current) => current + 1);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Error />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.results}
        renderItem={renderJobs}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <View style={styles.footer_container}>
        <Button
          text="Prev"
          style={styles.footer_button}
          disabled={pageNumber === 1}
          icon={<Icon name="navigate-before" size={20} color="#fff" />}
          onPress={goPrevPage}
        />
        <Picker
          selectedValue={pageNumber}
          onValueChange={(value) => setPageNumber(value)}
          mode="dropdown"
          style={styles.footer_picker}
          dropdownIconColor="#000"
          dropdownIconRippleColor="#40dac6"
        >
          {[...Array(50)].map((_, index) => (
            <Picker.Item
              key={index + 1}
              label={`${index + 1}. page`}
              value={index + 1}
              style={styles.footer_page_text}
            />
          ))}
        </Picker>
        <Button
          text="Next"
          style={styles.footer_button}
          disabled={pageNumber === 50}
          icon={<Icon name="navigate-next" size={20} color="#fff" />}
          iconPosition="right"
          onPress={goNextPage}
        />
      </View>
    </View>
  );
};

export default Jobs;
