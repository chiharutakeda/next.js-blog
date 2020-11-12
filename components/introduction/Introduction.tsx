import introductionStyles from '../../styles/introduction.module.css';
const introduction = () =>{

    return(
        <section className={introductionStyles.introductionContainer}>
            <p className={introductionStyles.introductionText}>
                プログラミングスクールTECH I.S.にて勉強中。
                次々と新しい技術が増えてくるフロントエンドの領域に興味を持ちJavaScript,Reactを中心に技術を習得しています。
            </p>
       </section>
    )
}

export default introduction