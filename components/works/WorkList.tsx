import worklistStyles from '../../styles/worklist.module.css';
const WorkList = () =>{
    const workSet = [
        'チャットボット',
        'ECサイト',
        'RESTAPI',
        'イベントシステム',
        'このサイト'
    ]

    return(
        <section className={worklistStyles.workList}>
            <h2 className={worklistStyles.workTitle}>work</h2>
            <div className={worklistStyles.workContainer}>
                {workSet.map((work,index)=>{
                    return(
                        <div className={worklistStyles.workCard}>
                            <p className={worklistStyles.workText}>{work}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default WorkList