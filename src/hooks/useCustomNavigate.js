import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const goToForm = () => {
    navigate("/form");
  };

  return {
    goBack,
    goToForm,
  };
};
