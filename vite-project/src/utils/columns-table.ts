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

  Object.entries(firstObj).forEach(([sourceField, targetField]) => {
    if (typeof (targetField) === 'string' || typeof (targetField) === 'number' || typeof (targetField) === 'boolean') {
      if (sourceField !== "type" && sourceField !== "url" && sourceField !== "id")
        arr.push(sourceField);
    }
  });

  const newArr = arr.filter((item: string) => item !== "image");
  const newObj = ["image", ...newArr];

  return newObj;
};

export { constructorColumnsTable };
