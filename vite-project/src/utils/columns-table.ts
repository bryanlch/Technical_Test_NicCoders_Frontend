interface AnyObject {
  [key: string]: any;
}

const constructorColumnsTable = ({
  info,
}: {
  info: AnyObject[];
}): AnyObject => {
  if (!info?.length) {
    return {};
  }

  const firstObj: AnyObject = info[0];
  const arr: AnyObject = [];

  Object.entries(firstObj).forEach(([sourceField]) => {
    arr.push(sourceField);
  });

  return arr;
};

export { constructorColumnsTable };
