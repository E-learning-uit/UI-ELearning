import { useState } from 'react';
import { useEffect } from 'react';
import ELearningContext from '../contexts/f8.context';
import { useParams, useNavigate } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import swal from 'sweetalert';
import Vietqr from '../components/Payment/Vietqr';
import { useDispatch, useSelector } from 'react-redux';
import { updateInfoCourse } from '../features/payment';

const Payment = () => {
    // redux
    const dispatch = useDispatch();
    const infoCourse = useSelector(state => state.payment.infoCourse);
    // props
    const { idCourse } = useParams()
    const f8Context = new ELearningContext();
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState('1');
    const [showDialogVietqr, setShowDialogVietqr] = useState(false)

    const handleChange = (event) => {
        setPaymentMethod(event.target.value);
    };
    const handleCancel = () => {
        swal("Bạn chưa thanh toán khóa học này", {
            buttons: ["Hủy bỏ", "Tiếp tục thanh toán"],
        })
            .then(async (res) => {
                if (!res) {
                    navigate(-1)
                }
            })
    }
    const handlePayment = () => {
        if (paymentMethod == 1) {
            // vietqr
            setShowDialogVietqr(true)
        } else {
            //momo

        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const info = await f8Context.getInfoCourse(idCourse)
            const { amount, title, thumbnail, discount, description } = info.data
            dispatch(updateInfoCourse({
                course_id: idCourse,
                amount,
                title,
                thumbnail,
                discount,
                description
            }))
        }
        fetchData()
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            <div className='flex p-8 divide-x-2'>
                <div className='basis-1/2 p-4'>
                    <p className='font-bold text-lg text-center'>Thông tin khóa học</p>
                    <div>
                        <img src={infoCourse?.thumbnail} alt="" className='w-3/4 shadow-md my-4' />
                        <div className='flex gap-2 items-center'>
                            <p>Giá: </p>
                            <p className='bg-primary rounded p-1 text-white font-semibold text-lg'>
                                {String(Number(infoCourse?.amount) / Number(infoCourse?.discount ? infoCourse.discount : 1)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnd
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <p>Tên khóa học:</p>
                            <p className='font-bold text-lg text-cyan-800'>{infoCourse?.title}</p>
                        </div>
                        <div className=''>
                            <span>Mô tả:  </span>
                            <span className='font-semibold italic text-cyan-800'>{infoCourse?.description}</span>
                        </div>
                    </div>
                </div>
                <div className='basis-1/2 p-4'>
                    <p className='font-bold text-lg text-center'>Thông tin thanh toán</p>
                    <div className='my-4'>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={paymentMethod} onChange={handleChange}>
                                <FormControlLabel value="1" control={<Radio />} label="Chuyển khoản ngân hàng (VietQR)" />
                                <FormControlLabel value="2" control={<Radio />} label="MOMO" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className='text-center'>
                        <button className='text-cyan-800 hover:border hover:border-cyan-800 p-1 rounded font-semibold mx-4' onClick={handleCancel}>Hủy bỏ</button>
                        <button className='text-white bg-primary p-1 rounded ' onClick={handlePayment}>Tiến hành thanh toán</button>
                    </div>
                </div>
            </div>
            {
                showDialogVietqr &&
                <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center flex-col bg-black/70 z-40'>
                    <Vietqr setShowDialogVietqr={setShowDialogVietqr} />
                </div>
            }
        </div>
    )
}
export default Payment;