import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.info}>
                <p>Created by Inna Rieznik &#60;3</p>
                <p style={{fontSize: "15px"}}>All illustrations are taken from <a href='https://ls.graphics/illustrations'>https://ls.graphics/illustrations</a>  </p>
            </div>
        </footer>
    );
}

export default Footer;