export type ItemProps = {
  id: string;
  title: string;
  minutes: number;
  seconds: number;
  timerIsPaused: boolean;
  parentId: string;
};

export type Props = {
  onChangeNavigation: (id: string) => void;
};
