import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="max-h-80 h-44 w-screen bg-gray-800 flex items-center justify-around px-7">
      <div className="icon flex">
        <div className="flex flex-shrink-0 justify-center items-center">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            className="h-32 w-auto"
          />
        </div>
      </div>
      <div className="list-1">
        <ul>
          <li className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            adipisci!
          </li>
          <li className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            adipisci!
          </li>
          <li className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            adipisci!
          </li>
        </ul>
      </div>
      <div className="list-2 flex">
        <div>
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </div>
        <div className="mx-4">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
