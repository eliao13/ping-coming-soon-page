import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function IconContainer() {
  return (
    <div className="flex gap-4 justify-center">
      <FontAwesomeIcon icon={faFacebook} size="xl" color="#4f7df3" />
      <FontAwesomeIcon icon={faTwitter} size="xl" color="#4f7df3" />
      <FontAwesomeIcon icon={faInstagram} size="xl" color="#4f7df3" />
    </div>
  );
}
