
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useEffect } from 'react';
import PaymentContext from '../../contexts/payment.context';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Vietqr = (props) => {
    // redux
    const dispatch = useDispatch();
    const infoCourse = useSelector(state => state.payment.infoCourse);
    // props
    const navigate = useNavigate();
    const [encodeId, setEncodeId] = useState('')
    const paymentContext = new PaymentContext()
    const { setShowDialogVietqr } = props
    const handlePayment = async () => {
        let data = await paymentContext.checkPayment({ encodeId, accountNumber: '1230103032001' })
        console.log(data.message);
        if (data.message == 'success') {
            navigate(`/course/`)
        } else {

        }
    }
    useEffect(() => {
        const fetchData = async () => {
            let data = await paymentContext.createOrder({
                course_id: infoCourse.course_id
            })
            setEncodeId(data.data?.encodeId)
        }
        fetchData()
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className='p-4 bg-white rounded'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-lg'>Chuyển khoản ngân hàng</p>
                <IconButton onClick={() => setShowDialogVietqr(false)}>
                    <CloseIcon />
                </IconButton>
            </div>
            <hr className='my-2' />
            <div className='flex divide-x-2 gap-2'>
                <div className='p-4 text-center'>
                    <p className='font-semibold '>Cách 1 : QUÉT QRCODE</p>
                    <p>Mở App ngân hàng quét QRCODE</p>
                    <img
                        // src={`https://img.vietqr.io/image/vietinbank-105875113711-compact.jpg?amount=1000&addInfo=${encodeId}`}
                        src={`https://img.vietqr.io/image/mbbank-1230103032001-compact.jpg?amount=1000&addInfo=${encodeId}`}
                        alt="" className='w-80 py-4'
                    />
                    <p>14 App ngân hàng hỗ trợ quét mã VietQR</p>
                </div>
                <div className='p-4'>
                    <p className='font-semibold '>Cách 2 : CHUYỂN KHOẢN THEO THÔNG TIN</p>
                    <div className='my-8'>
                        <div className='flex gap-1 my-3'>
                            <p>Ngân hàng: </p>
                            <b>VietinBank</b>
                        </div>
                        <div className='flex gap-1 my-3'>
                            <p>Chủ tài khoản</p>
                            <b>NGUYEN TRUNG HIEU</b>
                        </div>
                        <div className='flex gap-1 my-3'>
                            <p>Số tài khoản</p>
                            <b>105875113711</b>
                        </div>
                        <div className='flex gap-1 my-3'>
                            <p>Số tiền:</p>
                            <b>{String(Number(infoCourse?.amount) / Number(infoCourse?.discount ? infoCourse.discount : 1)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnd</b>
                        </div>
                        <div className='flex gap-1 my-3 items-center'>
                            <p>Nội dung: </p>
                            <p className='p-1 border-2 text-primary border-primary rounded font-semibold'>{encodeId}</p>
                        </div>
                        <p>Lưu ý: Nhập chính xác nội dung khi chuyển khoản</p>
                    </div>
                </div>
            </div>
            <div className='text-right'>
                <button className='bg-primary text-white px-3 py-1 hover:shadow-md text-right rounded' onClick={handlePayment}>Tôi đã thanh toán</button>
            </div>
        </div>
    )
}
export default Vietqr;