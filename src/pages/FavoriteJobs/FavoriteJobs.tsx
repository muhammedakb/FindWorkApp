import React, { FC } from "react";
import { FlatList, Text, View } from "react-native";
import Job from "../../components/Job";
import NotAvailable from "../../components/NotAvailable/NotAvailable";
import {
  FavoriteJob,
  favoriteJobsSelector,
  removeFavoriteJob,
} from "../../redux/favoriteJobsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { FavoritedJobsProps } from "../../types/navigateTypes";
import styles from "./FavoriteJobs.style";

const FavoriteJobs: FC<FavoritedJobsProps> = ({ navigation }) => {
  const favorites = useAppSelector(favoriteJobsSelector);
  const dispatch = useAppDispatch();

  const renderJobs = ({ item }: { item: FavoriteJob }) => (
    <Job
      removeButton
      removeButtonOnPress={() => dispatch(removeFavoriteJob(item.id))}
      category={item?.category}
      companyName={item?.companyName}
      publicationDate={item?.publicationDate}
      location={item?.location}
      level={item?.level}
      onPress={() => navigation.navigate("JobDetail", { id: item?.id })}
    />
  );
  return (
    <View style={styles.container}>
      {favorites.length ? (
        <FlatList data={favorites} renderItem={renderJobs} />
      ) : (
        <>
          <NotAvailable />
          <Text style={styles.title}>
            There are no jobs added to favorites!
          </Text>
        </>
      )}
    </View>
  );
};

export default FavoriteJobs;
