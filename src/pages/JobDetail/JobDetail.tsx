import { API_URL_JOBS } from "@env";
import React, { FC, useEffect, useMemo } from "react";
import { Alert, Linking, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { WebView } from "react-native-webview";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useGetHttp, { FetchTypes } from "../../hooks/useGetHttp";
import {
  addFavoriteJob,
  favoriteJobsSelector,
  removeFavoriteJob
} from "../../redux/favoriteJobsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { JobType } from "../../types/jobType";
import { JobDetailScreenProps } from "../../types/navigateTypes";
import { correctDate } from "../../utils/date";
import styles from "./JobDetail.style";

const JobDetail: FC<JobDetailScreenProps> = ({ navigation, route }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(favoriteJobsSelector);

  const { data, error, isLoading }: FetchTypes<JobType> = useGetHttp(
    `${API_URL_JOBS}/${route.params.id}`
  );

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: data?.name,
    });
  }, [data?.name]);

  const applyJob = (page: string) => {
    Alert.alert("Are you sure?", `You're out of the app.\n\n${page}`, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => Linking.openURL(page),
      },
    ]);
  };

  const isFavorite = useMemo(
    () => favorites.some((job) => job.id === data?.id),
    [favorites, data?.id]
  );

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteJob(data.id));
    } else {
      dispatch(
        addFavoriteJob({
          id: data?.id,
          category: data?.categories?.[0]?.name,
          companyName: data?.company?.name,
          level: data?.levels?.[0]?.name,
          location: data?.locations?.[0]?.name,
          publicationDate: correctDate(new Date(data?.publication_date)),
        })
      );
    }
  };

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
          icon={<Feather name="send" size={20} color="#fff" />}
          onPress={() => applyJob(data?.refs?.landing_page)}
        />
        <Button
          text={isFavorite ? "Remove from favorites" : "Add to favorites"}
          style={[
            styles.footer_buttons,
            isFavorite ? styles.remove_button : null,
          ]}
          icon={
            isFavorite ? (
              <MaterialCommunityIcons
                name="bookmark-off"
                size={20}
                color="#fff"
              />
            ) : (
              <Fontisto name="favorite" size={20} color="#fff" />
            )
          }
          onPress={handleFavorite}
        />
      </View>
    </View>
  );
};

export default JobDetail;
