function getTime() {
  const min = new Date().getMinutes();
  const hour = new Date().getHours();

  let box1 = "0"; //   hour boxes
  let box2;
  let box3 = "0"; //   min boxes
  let box4;

  const hourArray = hour.toString().split("");
  const minArray = min.toString().split("");

  if (hourArray.length > 1) {
    [box1, box2] = hourArray;
  } else {
    [box2] = hourArray;
  }

  if (minArray.length > 1) {
    [box3, box4] = minArray;
  } else {
    [box4] = minArray;
  }

  return {
    box1,
    box2,
    box3,
    box4,
  };
}

export default getTime;
