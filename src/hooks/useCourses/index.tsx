import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { api } from '../../utils/api';

import { JourneyDetailsCoursesProps } from '../../types/journeyDetailsCourses';

export function useCourses() {
  const [journeysDetailsCourses, setJourneyDetailsCourses] = useState<null | JourneyDetailsCoursesProps>(null);

  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      api.get(`/courses/${id}`),
    ]).then(([journeysCoursesDetails]) => {
      setJourneyDetailsCourses(journeysCoursesDetails.data);
    });
  }, []);

  return {
    journeysDetailsCourses,
  };
}
