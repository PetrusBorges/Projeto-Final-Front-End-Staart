import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { api } from '../../utils/api';

import { JourneysProps } from '../../types/journeys';
import { JourneyDetailsCoursesProps } from '../../types/journeyDetailsCourses';

export function useJourneysCourses() {
  const [journeysDetails, setJourneyDetails] = useState<null | JourneysProps>(null);
  const [journeysDetailsCourses, setJourneyDetailsCourses] = useState<JourneyDetailsCoursesProps[]>([]);

  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      api.get(`/journeys/${id}`),
      api.get(`/journeys/${id}/courses`),
    ]).then(([journeysDetailsResponse, journeysCoursesDetails]) => {
      setJourneyDetails(journeysDetailsResponse.data);
      setJourneyDetailsCourses(journeysCoursesDetails.data);
    });
  }, []);

  return {
    journeysDetails,
    journeysDetailsCourses,
  };
}
