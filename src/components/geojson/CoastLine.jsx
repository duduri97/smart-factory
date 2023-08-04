import { normalizedCoordinatesList } from './NormalizedCoordinatesList';
import SingleCoastLine from './SingleCoastLine';

const CoastLine = (height) => {
  const coordinatesList = normalizedCoordinatesList;
  
  return (
    <>
      {coordinatesList.map((coordinates, index) => {
        return (
          <SingleCoastLine
            coordinates={coordinates}
            height={height}
            key={index}
          />
        );
      })}
    </>
  );
}

export default CoastLine