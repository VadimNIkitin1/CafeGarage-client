import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

  let initData = new URLSearchParams(tg?.initData);

  const onToggleBackButton = (cb) => {
    useEffect(() => {
      tg.BackButton.show().onClick(cb);
      return () => {
        tg.BackButton.offClick(cb);
      };
    }, []);
  };

  return {
    onClose,
    onToggleBackButton,
    tg,
    initData,
    id: tg.initDataUnsafe?.user?.id,
    queryId: tg.initDataUnsafe?.query_id,
  };
};
