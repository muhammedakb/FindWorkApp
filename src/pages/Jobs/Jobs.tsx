import React, { FC, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Job from "../../components/Job";
import useGetHttp from "../../hooks/useGetHttp";
import { JobsScreenProps } from "../../types/navigateTypes";
import { API_URL_JOBS } from "@env";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { JobType, JobsPage } from "../../types/jobType";
import { correctDate } from "../../utils/date";

const Jobs: FC<JobsScreenProps> = ({ navigation }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { fetchData, data, error, isLoading, setData } = useGetHttp();

  // TODO: add load more or pagination
  useEffect(() => {
    fetchData(`${API_URL_JOBS}?page=${pageNumber}`);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderJobs = ({ item }: { item: JobType }) => (
    <Job
      category={item?.categories?.[0]?.name}
      companyName={item?.company?.name}
      publicationDate={correctDate(new Date(item?.publication_date))}
      location={item?.locations?.[0]?.name}
      level={item?.levels?.[0]?.name}
    />
  );

  const onEnd = () => {
    setPageNumber((current) => current + 1);
  };

  console.log(pageNumber);

  return (
    <View>
      <FlatList
        data={data?.results}
        renderItem={renderJobs}
        onEndReached={onEnd}
      />
    </View>
  );
};

export default Jobs;
