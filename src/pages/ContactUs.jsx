import { useState, useRef } from "react";
import ELearningContext from '../contexts/f8.context';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const f8Context = new ELearningContext();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vhygwfj', 'template_ujwly6w', e.target, 'T9F-bKPaqv3Ertb51')
            .then((result) => {
                console.log(result.text);
                swal("Success!", "Your message has been sent!", "success");
            }, (error) => {
                console.log(error.text);
                swal("Error!", "Your message has not been sent!", "error");
            });
    };

    return (
        <div className="w-1/3 mx-20">
            <p className="font-bold text-xl my-3 pt-4">Liên hệ</p>
            <form ref={form} onSubmit={sendEmail}>


                <div>
                    <p className="my-1 font-semibold">Họ và tên:</p>
                    <input
                        type="text"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nhập họ và tên của bạn..."
                        className="border-2 rounded-md px-1 py-1 w-full hover:border-slate-500"
                    />
                </div>
                <div>
                    <p className="my-1 font-semibold">Email:</p>
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email..."
                        className="border-2 rounded-md px-1 py-1 w-full hover:border-slate-500"
                    />
                </div>
                <div>
                    <p className="my-1 font-semibold">Điện thoại:</p>
                    <input
                        type="number"
                        value={phone}
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Nhập số điện thoại...."
                        className="border-2 rounded-md px-1 py-1 w-full hover:border-slate-500"
                    />
                </div>
                <div>
                    <p className="my-1 font-semibold">Nội dung:</p>
                    <textarea
                        type="text"
                        cols="50"
                        value={message}
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Nhập nội dung liên hệ ...."
                        className="border-2 rounded-md px-1 py-1 w-full hover:border-slate-500"
                    />
                </div>
                <button className="rounded-2xl text-white bg-orange-500 px-2 py-1 font-semibold hover:opacity-75" >Gửi đi</button>
            </form>
        </div>
    )
}
export default ContactUs;