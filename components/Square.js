import styles from "../src/styles/Square.module.css"

export default function Square({content = "", color, handleClick}){
    let className = [styles.normalSize]

    // Gives each of the buttons the proper classes based on the content & color prop
    if(content){
        className.push(color ? styles.backgroundBlack: styles.backgroundWhite)
        if(content === "\uD83D\uDFE0"){
            className.push(styles.blackSquare)
        }else{
            className.push(styles.redSquare)
        }
    }else{
        className.push(color ? styles.noHoverBackgroundBlack: styles.noHoverBackgroundWhite)
    }

    return <button onClick={handleClick} className={className.join(" ")}>{content}</button>
}