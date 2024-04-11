import { StyleSheet, Text, View, StatusBar } from "react-native";
import "react-native-get-random-values";
import React, { useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TimerContext } from "../Components/TimerSetsContext";
import Item from "../Components/Timers/Timers";
import AddTimers from "../Components/Timers/TimersAddModal";

interface TimerSetsProps {
  route: any;
}
const Timers = (props: TimerSetsProps) => {
  const id = props.route.params.id;
  const { timerSets } = useContext(TimerContext);
  const timerSet = timerSets.find((timerSet) => timerSet.id === id);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>Timers</Text>
      <ScrollView>
        {timerSet?.timers.map((timer) => (
          <Item
            key={timer.id}
            id={timer.id}
            title={timer.title}
            minutes={timer.minutes}
            seconds={timer.seconds}
            timerIsPaused={timer.timerIsPaused}
            parentId={id}
          />
        ))}
      </ScrollView>
      <StatusBar />
      <AddTimers parentId={id} />
    </View>
  );
};

export const styles = StyleSheet.create({
  item: {
    backgroundColor: "grey",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  timerDuration: {
    flexDirection: "row",
  },
  text: {
    flex: 1,
    borderWidth: 2,
  },

  timerText: {
    fontSize: 50,
    color: "white",
  },
  titleText: {
    fontSize: 30,
    color: "white",
  },

  buttonContainer: {
    paddingHorizontal: 30,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
  timerItem: {
    flexDirection: "row",
  },
  SafeAreaStyle: {
    flex: 1,
    marginTop: 10,
  },
});

export default Timers;
