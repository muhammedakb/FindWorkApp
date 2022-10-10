import React, { FC, useState } from "react";
import { FlatList, View, Text } from "react-native";
import Job from "../../components/Job";
import useGetHttp, { FetchTypes } from "../../hooks/useGetHttp";
import { JobsScreenProps } from "../../types/navigateTypes";
import { API_URL_JOBS } from "@env";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { JobsPage, JobType } from "../../types/jobType";
import { correctDate } from "../../utils/date";
import styles from "./Jobs.style";
import Button from "../../components/Button";

const Jobs: FC<JobsScreenProps> = ({ navigation }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data, error, isLoading }: FetchTypes<JobsPage> = useGetHttp(
    `${API_URL_JOBS}?page=${pageNumber}`
  );

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
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data?.results} renderItem={renderJobs} />
      <View style={styles.footer_container}>
        <Button
          text="Prev <-"
          style={styles.footer_button}
          disabled={pageNumber === 1}
          onPress={goPrevPage}
        />
        <Text style={styles.footer_page_text}> {pageNumber} </Text>
        <Button
          text="-> Next"
          style={styles.footer_button}
          onPress={goNextPage}
        />
      </View>
    </View>
  );
};

export default Jobs;
