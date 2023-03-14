export interface JourneyDetailsCoursesProps {
  medias: {
    thumb: string;
  };
  description: string;
  instructor: string;
  tags: [];
  duration: number;
  status: string;
  level: string;
  title: string;
  id: string;
  extras: [];
  modules: {
    lessonsID: [],
    order: [],
    title: string,
    description: string,
  }[];
  courseCreatedAt: {
    $date: string;
  };
  courseUpdatedAt: {
    $date: string;
  };
  courseSlug: string;
  courseCategory: string;
  courseGroup: string;
}

