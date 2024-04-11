import { PropsWithChildren, createContext, useState } from "react";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import React from "react";

interface Timers {
  id: string;
  title: string;
  minutes: number;
  seconds: number;
  timerIsPaused: boolean;
}
interface TimerSet {
  label: string;
  id: string;
  timers: Timers[];
}

interface TimerProps {
  timerSets: TimerSet[];
  addTimerSet: (timerSet: TimerSet) => void;
  addTimer: (timer: Timers, id: string) => void;
  editTimerSet: (timerSet: TimerSet) => void;
  editTimer: (timer: Timers, id: string, timerId: string) => void;
}

export const TimerContext = createContext<TimerProps>({
  timerSets: [],
  addTimerSet: () => undefined,
  addTimer: () => undefined,
  editTimerSet: () => undefined,
  editTimer: () => undefined,
});

export function TimerProvider({ children }: PropsWithChildren) {
  const [timerSets, setTimerSet] = useState<TimerSet[]>([
    {
      label: "Chicken",
      id: nanoid(),
      timers: [
        {
          id: nanoid(),
          title: "Chicken",
          minutes: 0,
          seconds: 10,
          timerIsPaused: true,
        },
        {
          id: nanoid(),
          title: "Rice",
          minutes: 3,
          seconds: 40,
          timerIsPaused: true,
        },
      ],
    },
    {
      label: "School",
      id: nanoid(),
      timers: [
        {
          id: nanoid(),
          title: "Homework",
          minutes: 1,
          seconds: 0,
          timerIsPaused: true,
        },
        {
          id: nanoid(),
          title: "Essay",
          minutes: 0,
          seconds: 40,
          timerIsPaused: true,
        },
      ],
    },
  ]);
  const addTimerSet = (set: TimerSet) => {
    setTimerSet([...timerSets, set]);
  };

  const addTimer = (timer: Timers, id: string) => {
    const newTimerSets = timerSets.map((set) => {
      if (set.id === id) {
        return {
          ...set,
          timers: [...set.timers, timer],
        };
      }
      return set;
    });
    setTimerSet(newTimerSets);
  };

  const editTimerSet = (updatedTimerSet: TimerSet) => {
    const newTimerSets = timerSets.map((set) => {
      if (set.id === updatedTimerSet.id) {
        return {
          ...set,
          label: updatedTimerSet.label,
        };
      }
      return set;
    });
    setTimerSet(newTimerSets);
  };

  const editTimer = (updatedTimer: Timers, setId: string, timerId: string) => {
    const newTimerSets = timerSets.map((set) => {
      if (set.id === setId) {
        const updatedTimers = set.timers.map((timer) => {
          if (timer.id === timerId) {
            return {
              ...timer,
              title: updatedTimer.title,
              minutes: updatedTimer.minutes,
              seconds: updatedTimer.seconds,
              timerIsPaused: updatedTimer.timerIsPaused,
            };
          }
          return timer;
        });

        return {
          ...set,
          timers: updatedTimers,
        };
      }
      return set;
    });
    setTimerSet(newTimerSets);
  };

  return (
    <TimerContext.Provider
      value={{ timerSets, addTimerSet, addTimer, editTimerSet, editTimer }}
    >
      {children}
    </TimerContext.Provider>
  );
}
