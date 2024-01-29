interface ImageStructure {
  id: number;
  url: string;
}

export const RouteNames = {
  Splash: 'Splash',
  Home: 'Home',
} as const;

type RootStackParamList = {
  [RouteNames.Splash]: undefined;
  [RouteNames.Home]: {
    id: number;
  };
};

export type {ImageStructure, RootStackParamList};

