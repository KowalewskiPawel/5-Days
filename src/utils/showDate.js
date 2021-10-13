const showDate = () => {
  const date = new Date();
  return new Intl.DateTimeFormat("en-GB").format(date).split("/").join(".");
};

export default showDate;
