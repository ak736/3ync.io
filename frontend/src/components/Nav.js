import { React, useState } from "react";
import { Button } from "@material-tailwind/react";
import SignUp from "./SignUp";
import Main from "./Main";
import SignIn from "./SignIn";

const Nav = () => {
  const [showSignUpstate, setShowSignUpstate] = useState(false);

  const showSignUp = () => {
    setShowSignUpstate(true);
    console.log(showSignUpstate);
  };

  const showMain = () => {
    setShowSignUpstate(false);
    console.log(showSignUpstate);
  };
  return (
    <div>
      <nav>
        <div>
          <ul class="flex space-x-4">
            <Button
              color="red"
              ripple="light"
              onClick={showMain}
              className="mr-2"
            >
              {" "}
              Logo
            </Button>
            <li>Home</li>

            <li>Contact</li>
            <li>Docs</li>
          </ul>
        </div>
        <div>
          {" "}
          <Button color="red" onClick={showSignUp}>
            {" "}
            Sign In
          </Button>
          {showSignUpstate ? <SignIn /> : <Main />}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
