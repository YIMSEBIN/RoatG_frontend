export type RatingProps = {
  rates_list: { date: string; rate: number }[];
};

export type RatingDataProps = {
  ratingData: RatingProps;
};

export type TopicChartProps = {
  topicId: number;
  ranking: number;
  representationWord: string;
  representationWordAsList: { topic: string; score: string }[];
};

export type SentiCountAPIProps = {
  negativeCount: number;
  neutralCount: number;
  positiveCount: number;
};

export type SentiAvgAPIProps = {
  year: string;
  month: string;
  averageSentiment: number;
};

export type SentiStringAPIProps = {
  count: number;
  emotion: number;
};
