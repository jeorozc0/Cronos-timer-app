import React, { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ItemProps } from "../../types/types";
import EditTimerItem from "./TimerEditModal";

const width = Dimensions.get("window").width - 20;

const Item = ({
  title,
  minutes,
  seconds,
  timerIsPaused,
  id,
  parentId,
}: ItemProps) => {
  const [countdown, setCountdown] = useState({ minutes, seconds });
  const [timerState, setTimerState] = useState(timerIsPaused);
  const timerAlert = () => {
    return Alert.alert("Timer Done","",  [
      {
        text: "OK",
        onPress: () => {
          onTimerReset();
        },
      },
    ]);
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timerState === false) {
        if (countdown.seconds > 0) {
          setCountdown((prevCountdown) => ({
            ...prevCountdown,
            seconds: prevCountdown.seconds - 1,
          }));
        }
        if (countdown.seconds === 0) {
          if (countdown.minutes === 0) {
            clearInterval(timerInterval);
            timerAlert();
          } else {
            setCountdown((prevCountdown) => ({
              minutes: prevCountdown.minutes - 1,
              seconds: 59,
            }));
          }
        }
      }
      //TODO
      //Make the countdown reusable
    }, 1000);

    

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerState, countdown.seconds, countdown.minutes]);

  useEffect(() => {
    setCountdown({ minutes, seconds });
  }, [minutes, seconds]);

  const onTimerToggle = () => {
    setTimerState(!timerState);
  };

  const onTimerReset = () => {
    setCountdown({ minutes, seconds });
    setTimerState(true);
  };
  const formatTime = (time: number) => {
    return String(time).padStart(2, "0");
  };
  return (
    <View style={[styles.item, { width: width }]}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.timerItem}>
          <Text style={styles.timerText}>{formatTime(countdown.minutes)}</Text>
          <Text style={styles.timerText}> : </Text>
          <Text style={styles.timerText}>{formatTime(countdown.seconds)}</Text>
        </View>
      </View>
      <View
        style={{ marginRight: 50, width: 100, justifyContent: "space-evenly" }}
      >
        <TouchableOpacity style={styles.button} onPress={onTimerToggle}>
          <Text style={styles.buttonText}>
            {timerState ? "Start" : "Pause"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onTimerReset}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <EditTimerItem
          key={id}
          label={title}
          timerId={id}
          minutes={minutes}
          seconds={seconds}
          parentId={parentId}
        />
      </View>
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
  button: {
    backgroundColor: "#2296F3",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Item;
