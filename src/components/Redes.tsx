import instaLogo from '../assets/insta.png'
import githubLogo from '../assets/github.png'
import linkedinLogo from '../assets/linkedin.png'
import style from  './Redes.module.css'

export function Redes(){
    

    return (
        <div className={style.box}>
            <img src={linkedinLogo} alt="Logo do linkedn" />
            <img src={githubLogo} alt="Logo do github" />
            <img src={instaLogo} alt="Logo do instagram" />
        </div>
    )
}