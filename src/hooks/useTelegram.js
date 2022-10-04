const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.hide();
        } else {
            tg.MainButton.Show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user.username,
        
    }
}