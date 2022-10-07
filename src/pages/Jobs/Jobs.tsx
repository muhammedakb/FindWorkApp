import React, { FC } from "react";
import { FlatList, View } from "react-native";
import Job from "../../components/Job";
import useGetHttp from "../../hooks/useGetHttp";
import { JobsScreenProps } from "../../types/navigateTypes";
import { API_URL_JOBS } from "@env";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { JobType } from "../../types/jobType";

const Jobs: FC<JobsScreenProps> = ({ navigation }) => {
  const { data, error, isLoading } = useGetHttp(API_URL_JOBS);

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
      publicationDate={item?.publication_date}
      location={item?.locations?.[0]?.name}
      level={item?.levels?.[0]?.name}
    />
  );

  return (
    <View>
      <FlatList data={data?.results} renderItem={renderJobs} />
    </View>
  );
};

export default Jobs;
