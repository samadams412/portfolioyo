import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers.js";

function Nav(props) {
  const { pages = {}, currentPage, setCurrentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <nav>
        <ul>
            <li>
                Home
            </li>
            <li>
                Home
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
