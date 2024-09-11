import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import styles from './Sidebar.module.css'
import {PencilSimpleLine } from '@phosphor-icons/react' 

interface SidebarProps{
    name: string,
    lastView: Date,
    role: string 
}

export function Sidebar({ name, lastView, role }: SidebarProps){
    const lastViewFormatted = format(lastView,"d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR
    })

    const lastViewToNow = formatDistanceToNow(lastView, {
        locale: ptBR,
        addSuffix: true
    })
    return (  
        <aside className={styles.sidebar}>
            <img 
             className={styles.cover}
             src="https://plus.unsplash.com/premium_photo-1723632256384-60dd4173debf?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             title='imagem do perfil' 
            />
            <div className={styles.profile}>
                < Avatar
                hasBorder
                src='https://avatars.githubusercontent.com/u/168144971?v=4'
                />
                <strong>{name}</strong>
                <span>{role}</span>
                <time className={styles.lastView} title={lastViewFormatted} dateTime={lastView.toISOString()}>Última visualização {lastViewToNow}</time>

            </div>
            <footer>
                <a href="#">
                    < PencilSimpleLine size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}