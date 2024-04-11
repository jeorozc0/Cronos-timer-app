import React from "react";
import { Text, View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import "react-native-get-random-values";
import { TimerSetView } from "../Components/TimerSets/TimerSets";
import AddSetItem from "../Components/TimerSets/TimerSetAddModal";

interface TimerSetsProps {
  navigation: any;
}

const TimerSets = (props: TimerSetsProps) => {
  const navigateItem = (id: string) => {
    props.navigation.navigate("Timers", { id });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
      }}
    >
      <Text style={{ fontSize: 30, color: "black", paddingTop: 10 }}>
        These are your timer sets
      </Text>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <TimerSetView onChangeNavigation={navigateItem} />
        </SafeAreaView>
        <View></View>
      </View>
      <AddSetItem />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttoslView: {
    paddingTop: 20,
    flexDirection: "row",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default TimerSets;
