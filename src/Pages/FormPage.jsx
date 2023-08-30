import { useNavigate } from "react-router-dom";
import OrderList from "../components/OrderList/OrderList";
import { useTelegram } from "../hooks/useTelegram";

const FormPage = () => {
  const { tg } = useTelegram();
  const navigate = useNavigate();

  tg.BackButton.show();

  const goBack = () => {
    navigate(-1);
  };

  tg.onEvent("backButtonClicked", goBack);

  return (
    <div>
      <OrderList />
    </div>
  );
};

export default FormPage;
