import Modal from "react-modal";
import {useDispatch, useSelector} from "react-redux";
import {setLoginModalVisible} from '../../store/login';
import styles from './LoginModal.module.css';
import KakaoBtn from "../../socialLogin/kakao/kakaoBtn";
import GoogleBtn from "../../socialLogin/google/GoogleBtn";

const customStyles = {
    content: {
        width: '50rem',
        height: '35rem',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(243,244,245)',
        borderRadius: '2rem'
    },
};

function LoginModal() {
    const dispatch = useDispatch();
    const loginModalVisible = useSelector(state => state.login.loginModalVisible);

    function afterOpenModal() {
        // 배경 뿌옇게 만들고 싶음...!!
    }

    function closeModal() {
        dispatch(setLoginModalVisible(false));
    }


    return (
        <div>
            <Modal
                isOpen={loginModalVisible}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Login"
            >
                <div className={styles.greetingText}>
                    <div>환영합니다!</div>
                    <div>로그인하시면 더 많은 기능을 이용하실 수 있어요.</div>

                </div>
                <div className={styles.center}>
                    <KakaoBtn />
                    <GoogleBtn />
                </div>
                <div className={styles.bottom}>
                    <button className={styles.closeBtn} onClick={closeModal}>닫기</button>
                </div>
            </Modal>
        </div>
    );
}

export default LoginModal;