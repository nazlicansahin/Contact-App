'use client'
import styles from '../style.module.css'

import { useState } from "react";
export default function List({ contacts }) {
    const [filterText, setFilterText] = useState('');
    //filtreleme
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        )
    })
    return (
        <div>
            <input placeholder=" Filter Contact" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <ul className={styles.list}>
                { //kayit listeleme
                    filtered.map((contact, i) => (<li key={i} >
                        <span>{contact.fullname}</span>
                        <span>{contact.phone_number}</span>

                    </li>))
                }
            </ul>
            <p>
                Total Contacts: {filtered.length}
            </p>
        </div >
    )
}