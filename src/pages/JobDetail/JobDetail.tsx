import { API_URL_JOBS } from "@env";
import React, { FC } from "react";
import { Linking, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useGetHttp, { FetchTypes } from "../../hooks/useGetHttp";
import { JobType } from "../../types/jobType";
import { JobDetailScreenProps } from "../../types/navigateTypes";
import styles from "./JobDetail.style";

const JobDetail: FC<JobDetailScreenProps> = ({ navigation, route }) => {
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
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title_lg}>{data?.name}</Text>
        <Text>
          <Text style={styles.job_key}>Locations:</Text>{" "}
          {data?.locations?.[0]?.name}
        </Text>
        <Text>
          <Text style={styles.job_key}>Job Level:</Text>{" "}
          {data?.levels?.[0]?.name}
        </Text>
        <Text style={styles.title_sm}>Job Detail</Text>
      </View>
      <WebView
        originWhitelist={["*"]}
        source={{
          html: `<html>
                  <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  </head>
                  <body>${data?.contents}</body>
                </html>`,
        }}
      />
      <View style={styles.footer_container}>
        <Button
          text="Submit"
          style={styles.footer_buttons}
          onPress={() => Linking.openURL(data?.refs?.landing_page)}
        />
        {/* TODO: add favorite jobs to store */}
        <Button text="Favorite Job" style={styles.footer_buttons} />
      </View>
    </View>
  );
};

export default JobDetail;
