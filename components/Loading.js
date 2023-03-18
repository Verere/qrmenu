import styles from '../styles/Loading.module.css'
const Loading = () => {
    return (
        <div className={"position-fixed w-100 h-100 text-center", styles.loading}
       >
            <svg width="205" height="250" viewBox="0 0 40 50">
                <polygon strokeWidth="1" stroke="#fff" fill="none"
                points="20,1 40,40 1,40"></polygon>
                <text fill="#fff" x="5" y="47"
                 style={{background: '#0008'}}>loading...</text>
            </svg>
        </div>
    )
}

export default Loading