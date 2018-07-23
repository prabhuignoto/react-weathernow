import { connect } from "react-redux";
import GeoLocation from '../components/geolocation';

interface IState {
  suggestions: {
    selectedCity: {
      city: string;
      lat: string;
      lng: string;
    }
  }
}

const mapStateToProps = ({suggestions: {selectedCity}}: IState) => ({
    city: selectedCity.city,
    lat: selectedCity.lat,
    lng: selectedCity.lng,
});

export default connect(mapStateToProps, null)(GeoLocation);