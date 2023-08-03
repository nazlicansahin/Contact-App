'use client';
import { useState, useEffect } from "react";
import styles from './style.module.css'
import List from './List'
import Form from "./Form";

export default function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: 'Mehmet',
            phone_number: '456456'
        },
        {
            fullname: 'ayse',
            phone_number: '453456'
        },
        {
            fullname: 'Nazli',
            phone_number: '39396'
        },
    ])
    useEffect(() => {
        console.log(contacts)

    }, [contacts]);//contactsdeki renderi takip eder
    return (
        <div className={styles.container}>
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />

        </div>
    );
}