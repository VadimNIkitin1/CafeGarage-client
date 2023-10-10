import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

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
    initData1: {
      query_id: tg?.query_id,
      user: tg?.user,
      receiver: tg?.receiver,
      chat: tg?.chat,
      chat_type: tg?.chat_type,
      chat_instance: tg?.chat_instance,
      start_param: tg?.start_param,
      can_send_after: tg?.can_send_after,
      auth_date: tg?.auth_date,
      hash: tg?.hash,
    },
    // initData2: tg?.initDataUnsafe,
    id: tg.initDataUnsafe?.user?.id,
    queryId: tg.initDataUnsafe?.query_id,
  };
};
