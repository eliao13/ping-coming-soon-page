import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function IconContainer() {
  return (
    <div className="flex justify-evenly">
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
}
