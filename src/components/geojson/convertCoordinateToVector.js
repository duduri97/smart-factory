export const convertCoordinateToVector = (...props) => {

  const longitude = props[0][0];
  const latitude = -props[0][1];
  const height = props[1];
  
  return [
    longitude,
    height,
    latitude,
  ];
};