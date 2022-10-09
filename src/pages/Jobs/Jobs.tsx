import React, { FC, useState } from "react";
import { FlatList, View } from "react-native";
import Job from "../../components/Job";
import useGetHttp, { FetchTypes } from "../../hooks/useGetHttp";
import { JobsScreenProps } from "../../types/navigateTypes";
import { API_URL_JOBS } from "@env";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { JobsPage, JobType } from "../../types/jobType";
import { correctDate } from "../../utils/date";

const Jobs: FC<JobsScreenProps> = ({ navigation }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data, error, isLoading }: FetchTypes<JobsPage> = useGetHttp(
    `${API_URL_JOBS}?page=${pageNumber}`
  );

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
      onPress={() => navigation.navigate("JobDetail", { id: item.id })}
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
