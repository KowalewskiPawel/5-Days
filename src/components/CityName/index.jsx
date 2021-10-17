import PropTypes from "prop-types";

import City from "./City";

const CityName = ({ cityName }) => <City>{cityName}</City>;

CityName.defaultProps = {
  cityName: null,
};

CityName.propTypes = {
  cityName: PropTypes.string,
};

export default CityName;
