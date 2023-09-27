import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
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
    onToggleButton,
    onToggleBackButton,
    tg,
    id: tg.initDataUnsafe?.user?.id,
    queryId: tg.initDataUnsafe?.query_id,
  };
};
