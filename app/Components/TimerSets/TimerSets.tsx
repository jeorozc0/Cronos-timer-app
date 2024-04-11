import React, { useContext } from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Props } from "../../types/types";
import { TimerContext } from "../TimerSetsContext";
import EditSetItem from "./TimerSetEditModal";

const width = Dimensions.get("window").width - 20;

export function TimerSetView({ onChangeNavigation }: Props) {
  const onViewSet = (id: string) => {
    onChangeNavigation(id);
  };

  const { timerSets } = useContext(TimerContext);

  return (
    <ScrollView>
      {timerSets.map((sets) => (
        <ListItemSets
          key={sets.id}
          label={sets.label}
          id={sets.id}
          onViewSet={() => onViewSet(sets.id)}
        />
      ))}
    </ScrollView>
  );
}

interface TimerSetsProps {
  label: string;
  id: string;
  onViewSet: (id: string) => void;
}
export function ListItemSets({ label, id, onViewSet }: TimerSetsProps) {
  return (
    <TouchableOpacity
      style={[styles.item, { width: width }]}
      onPress={() => onViewSet(id)}
    >
      <View>
        <Text style={styles.titleText}>{label}</Text>
      </View>
      <View
        style={{ marginRight: 50, width: 100, justifyContent: "space-evenly" }}
      >
        <EditSetItem Name={label} setId={id} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "grey",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },

  timerText: {
    fontSize: 50,
    color: "white",
  },

  titleText: {
    fontSize: 30,
    color: "white",
  },

  timerItem: {
    flexDirection: "row",
  },
});
