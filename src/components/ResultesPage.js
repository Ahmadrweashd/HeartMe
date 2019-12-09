import React, { Component } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text } from "react-native";
import styles from "../../style";

/// i can get the data from external API ..
const DATA = [
  {
    id: "1",
    testName: "LDL Cholesterol",
    result: "89",
    status: "Good",
    date: "9/12/19"
  },
  {
    id: "2",
    testName: "HDL Cholesterol",
    result: "45",
    status: "Bad",
    date: "19/10/19"
  },
  {
    id: "3",
    testName: "A1C",
    result: "6",
    status: "Bad",
    date: "11/5/19"
  },
  {
    id: "4",
    testName: "LDL Cholesterol",
    result: "105",
    status: "Bad",
    date: "27/4/19"
  },
  {
    id: "5",
    testName: "HDL Cholesterol",
    result: "30",
    status: "Good",
    date: "2/1/19"
  },
  {
    id: "6",
    testName: "LDL Cholesterol",
    result: "85",
    status: "Good",
    date: "19/12/18"
  },
  {
    id: "7",
    testName: "HDL Cholesterol",
    result: "105",
    status: "Bad",
    date: "1/4/18"
  }
];

function Item({ itemObj }) {
  return (
    <View
      style={[
        styles.itemResultsPage,
        itemObj.status == "Good"
          ? styles.goodBackgroundResultsPage
          : styles.badBackgroundResultsPage
      ]}>
      <Text style={styles.dateResultsPage}>{itemObj.date}</Text>
      <Text style={styles.titleResultsPage}>
        {itemObj.testName} ({itemObj.result})
      </Text>
    </View>
  );
}

export default function Results() {
  return [
    <Text style={styles.resultPageTextResultsPage} key='1'>
      {" "}
      Saved Results{" "}
    </Text>,
    <SafeAreaView key='2' style={styles.containerResultsPage}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item itemObj={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  ];
}
