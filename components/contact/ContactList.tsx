import contactlistStyles from '../../styles/contactlist.module.css'
const ContactList = () => {

    const contactSet = [
        'GitHub',
        'Gmail',
        'Qiita',
        'Twitter'
    ]

    return (
        <section className={contactlistStyles.contactList}>
            <h2 className={contactlistStyles.contactTitle}>contact</h2>
            <div className={contactlistStyles.contactContainer}>
                {contactSet.map((contact,index) => {
                    return (
                        <div className={contactlistStyles.contactCard} key={index}>
                            <p className={contactlistStyles.contactText}>{contact}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )

}

export default ContactList