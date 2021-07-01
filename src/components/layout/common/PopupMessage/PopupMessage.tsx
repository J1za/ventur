import styles from './PopupMessage.module.scss';
import popupIcon from '@/assets/images/icons/noun_done.svg';
import popupClose from '@/assets/images/icons/close-icon.svg';
import Button from '../../../../components/ui/Button/Button';

const PopupMessage = ({ PopupSent, setActive, text }) => {

    return (
        <div className={!PopupSent ? styles.popup : `${styles.popup} ${styles.popup_open}`}>
            <div className={styles.popup_inner}>
                <div className={styles.popup_icon}>
                    <img src={popupIcon} alt="" />
                </div>
                <div className={styles.popup_close}
                    onClick={() => setActive(false)}
                >
                    <img src={popupClose} alt="" />
                </div>
                <h3>Thank you</h3>
                <p>
                    {text}
                </p>
                <Button
                    theme="blue"
                    width={`100%`}
                    onClick={() => setActive(false)}
                >
                    Close
                </Button>
            </div>
        </div>
    );
};

export default PopupMessage;