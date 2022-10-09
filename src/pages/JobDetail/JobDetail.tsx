import React, { FC, useEffect } from "react";
import { Text, View } from "react-native";
import { API_URL_JOBS } from "@env";
import useGetHttp, { FetchTypes } from "../../hooks/useGetHttp";
import { JobDetailScreenProps } from "../../types/navigateTypes";
import { JobType } from "../../types/jobType";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { WebView } from "react-native-webview";

const JobDetail: FC<JobDetailScreenProps> = ({ navigation, route }) => {
  console.log(route.params.id);

  const { data, error, isLoading }: FetchTypes<JobType> = useGetHttp(
    `${API_URL_JOBS}/${route.params.id}`
  );

  // useEffect(() => {
  //   if (data) {
  //     navigation.setOptions({ headerTitle: data?.name });
  //   }
  // }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <Text>{data?.name}</Text>
      <Text>Locations: {data?.locations?.[0]?.name}</Text>
      <Text>Job Level: {data?.levels?.[0]?.name}</Text>
      <WebView originWhitelist={["*"]} source={{ html: data?.contents }} />
    </View>
  );
};

export default JobDetail;
