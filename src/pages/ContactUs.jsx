import { useState } from "react";
import ELearningContext from '../contexts/f8.context';
import swal from 'sweetalert';

const ContactUs = () => {
    const f8Context = new ELearningContext();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async () => {
        if (name === "" || email === "" || message === "" || phone === "") {
            swal("Thông báo", "Vui lòng nhập đầy đủ thông tin", "warning");
        }
        else {
            f8Context.sendMail(name, email, message, phone)
                .then(res => {
                    if (res.status === 200) {
                        swal("Thông báo", "Gửi thành công", "success");
                        setName("");
                        setEmail("");
                        setMessage("");
                        setPhone("");
                    }
                    else {
                        swal("Thông báo", "Gửi thất bại", "error");
                    }
                })
        }
    }

    return (
        <div className="w-1/3 mx-20">
            <p className="font-bold text-xl my-3 pt-4">Liên hệ</p>
            <div>
                <p className="my-1 font-semibold">Họ và tên:</p>
                <input
                    type="text"
                    value={name}
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
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Nhập nội dung liên hệ ...."
                    className="border-2 rounded-md px-1 py-1 w-full hover:border-slate-500"
                />
            </div>
            <button className="rounded-2xl text-white bg-orange-500 px-2 py-1 font-semibold hover:opacity-75" onClick={handleSubmit}>Gửi đi</button>
        </div>
    )
}
export default ContactUs;