import skillistStyles from '../../styles/skillist.module.css'
const SkillList = () => {

    const skillSet = [
        'PHP','CSS','HTML','JavaScript',
        'Jquery','React','node.js','next.js',
        'EXPRESS','RESTAPI','RDB','NoSQL',
        'Bootstrap','Material-UI','firebase','git',
        'C'
    ]

    return (
        <section className={skillistStyles.skilList}>
            <h2 className={skillistStyles.skillTitle}>skill & knowledge</h2>
            <div className={skillistStyles.skillContainer}>
                {skillSet.map((skill,index) => {
                    return (
                        <div className={skillistStyles.skillCard} key={index}>
                            <p className={skillistStyles.skillText}>{skill}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )

}

export default SkillList