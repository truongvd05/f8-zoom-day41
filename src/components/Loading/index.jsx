import style from './Loading.module.scss'

function Loading() {
    return (
        <div className={style.container}>
            <i class={`fa-solid fa-spinner ${style.icon}`}></i>
        </div>
    )
}

export default Loading;