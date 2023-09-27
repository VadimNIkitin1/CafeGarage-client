import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

  const onToggleBackButton = (cb) => {
    useEffect(() => {
      tg.BackButton.show();
      tg.BackButton.onClick(cb);
      return () => {
        tg.BackButton.offClick(cb);
      };
    }, []);
  };

  return {
    onClose,
    onToggleBackButton,
    tg,
    id: tg.initDataUnsafe?.user?.id,
    queryId: tg.initDataUnsafe?.query_id,
  };
};
