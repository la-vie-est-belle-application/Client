import Gender from "@pages/signIn/signInStep/gender/Gender";
import Pay from "@pages/signIn/signInStep/pay/Pay";
import { useEffect, useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const useSignIn = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentStep = parseInt(searchParams.get("step") || "1");

  const signInStepReducer = (state, action) => {
    switch (action.step) {
      case 1:
        console.log("state: ", state);
        return <Gender></Gender>;
      case 2:
        console.log("state: ", state);
        return <Pay></Pay>;
      default:
        navigate("/error", { replace: true });
        return state;
    }
  };

  const [signInStep, onUpdateSignInStep] = useReducer(signInStepReducer, 1);

  useEffect(() => {
    onUpdateSignInStep({ step: currentStep });
  }, [currentStep]);

  return { currentStep, signInStep };
};

export default useSignIn;
