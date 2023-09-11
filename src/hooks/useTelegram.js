const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close;
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  const onToggleBackButton = () => {
    if (tg.BackButton.isVisible) {
      tg.BackButton.hide();
    } else {
      tg.BackButton.show();
    }
  };

  return {
    onClose,
    onToggleButton,
    onToggleBackButton,
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.id,
  };
};
