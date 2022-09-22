import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.info}>
                <p>Created with love by Inna Rieznik &#60;3</p>
            </div>
        </footer>
    );
}

export default Footer;