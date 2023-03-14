import { useState, useEffect, useCallback } from 'react';

import { api } from '../../utils/api';

import { JourneysProps } from '../../types/journeys';

export function useHome() {

  const [journeys, setJourneys] = useState<JourneysProps[]>([]);

  const filterByFetchData = useCallback(() => {
    api.get('journeys')
      .then(journeysResponse => {
        setJourneys(journeysResponse.data);
      });
  }, []);

  const filterByAlphabet = useCallback(() => {
    api.get('journeys')
      .then(journeysResponse => {
        const sortedJourneys = journeysResponse.data.sort((firstName: JourneysProps, secondName: JourneysProps) => {
          if (firstName.title < secondName.title) {
            return -1;
          } else {
            return 1;
          }
        });
        setJourneys(sortedJourneys);
      });
  }, []);

  const filterByCourses = useCallback(() => {
    api.get('journeys')
      .then(journeysResponse => {
        const sortedJourneys = journeysResponse.data.sort((firstCourse: JourneysProps, secondCourse: JourneysProps) => secondCourse.coursesID.length - firstCourse.coursesID.length);
        setJourneys(sortedJourneys);
      });
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
    case 'filterByFetchData':
      filterByFetchData();
      break;
    case 'filterByAlphabet':
      filterByAlphabet();
      break;
    case 'filterByCourses':
      filterByCourses();
      break;
    default:
      break;
    }
  };

  useEffect(() => {
    filterByFetchData();
  }, [filterByFetchData]);

  return {
    handleSelectChange,
    journeys,
  };
}
