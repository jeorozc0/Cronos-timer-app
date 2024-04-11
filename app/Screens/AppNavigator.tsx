import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TimerSets from "./SetsScreen";
import Timers from "./TimersScreen";
import { TimerProvider } from "../Components/TimerSetsContext";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
  <TimerProvider>
    <NavigationContainer>
      <Navigator>
        <Screen name="TimerSets" component={TimerSets} />
        <Screen name="Timers" component={Timers} />
      </Navigator>
    </NavigationContainer>
  </TimerProvider>
);

export default AppNavigator;
