import PropTypes from "prop-types";

import City from "./City";

const CityName = ({ cityName }) => <City>{cityName}</City>;

CityName.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export default CityName;
