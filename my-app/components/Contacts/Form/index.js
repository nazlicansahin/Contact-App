'use client';
import styles from '../style.module.css'
import { useState, useEffect } from "react";
const initalFormValues = { fullname: '', phone_number: '' }


export default function Form({ addContact, contacts }) {
    const [form, setForm] = useState(initalFormValues);

    useEffect(() => {
        setForm(initalFormValues);
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };
    const onSubmit = (e) => {
        e.preventDefault();  //normalde form submit olunca sayfa yenilenir o yenilemeyi durdurur
        //form icindeki inputlar valid degilse durdurabiliriz
        if (form.fullname === '' || form.phone_number === '') {
            return false;
        }
        addContact([...contacts, form]) //Contacts compunda forma addContact degiskeni verdik. Boylece buradaki inputlari contacts a aktardik
    };
    return (<form onSubmit={onSubmit}>
        <div>
            <input value={form.fullname}
                name="fullname"
                placeholder="Full Name"
                onChange={onChangeInput} />
        </div>
        <div>
            <input
                value={form.phone_number} name="phone_number" placeholder="Phone" onChange={onChangeInput} />
        </div>
        <div className={styles.btn}>
            <button> Add </button>
        </div>

    </form>
    );
}