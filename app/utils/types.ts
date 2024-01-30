interface ImageStructure {
  id: number;
  url: string;
  title: string;
  subTitle: string;
}

export enum RouteConstants {
  Splash = 'Splash',
  Home = 'Home',
};

type RootStackParamList = {
  [RouteConstants.Splash]: undefined;
  [RouteConstants.Home]: undefined;
};


export type {ImageStructure, RootStackParamList};
