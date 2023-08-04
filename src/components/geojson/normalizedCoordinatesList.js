/**
 * coordinates 배열 내 요소 중 좌표들의 배열이 있다면 이를 한 단계 flatten 해주는 normalize 과정이 필요
 */

import coastLineData from "./coastline.json";

const isCoordinates = (element) => {
  return (
    Array.isArray(element) &&
    element.length === 2 &&
    element.every((el) => typeof el === "number")
  );
};

const normalizeCoordinates = (coordinates) => {
  const normalizedCoordinates = [];

  coordinates.forEach((coordinate) => {
    let isAllNumber = true;
    for (let i = 0; i < coordinate.length; i++) {
      const coord = coordinate[i];
      if (isCoordinates(coord)) {
        normalizedCoordinates.push(coord);
        isAllNumber = false;
      }
    }
    if (isAllNumber && isCoordinates(coordinate))
      normalizedCoordinates.push(coordinate);
  });

  return normalizedCoordinates;
};

export const normalizedCoordinatesList = coastLineData.features.map((data) => {
    return normalizeCoordinates(data.geometry.coordinates)
  }
);