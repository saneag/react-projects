import React from 'react'

import styles from './styles.module.scss'

function Search() {
    const input_value = ['Marca', 'Model', 'Din anul', 'Pana in anul',
        'Capacitatea de la (ml)', 'Capacitatea pana la (ml)', 'Cai putere de la',
        'Cai putere pana la', 'Pret de la ($)', 'Pret pana la ($)']
    return (
        <div className={styles.search_inputs}>
            {input_value.map((value, index) => <Input_Fields key={index} placeholder={value} />)}
        </div>
    )
}

function Input_Fields({ placeholder }) {
    return (
        <input value={placeholder} />
    )
}

export default Search