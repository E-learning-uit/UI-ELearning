import { useEffect, useState, useMemo, useRef } from 'react'
import ELearningContext from '../../contexts/f8.context';
import FaceIcon from '@material-ui/icons/Face';
import swal from 'sweetalert';
import { io } from "socket.io-client";
import socketIOClient from "socket.io-client";




const Comment = ({ props }) => {
    const host = "http://localhost:4001";
    const f8Context = new ELearningContext();
    const { idCourse, idItem } = props;

    const [content, setContent] = useState('');
    const [listComment, setListComment] = useState([]);
    const [accessComment, setAccessComment] = useState(false);
    const socketRef = useRef();

    const handleCancel = () => {
        if (localStorage.getItem('eLearning_data')) {
            setContent('')
        }
        else {
            swal("Oops!", 'Bạn cần đăng nhập để thực hiện tính năng này.', "error");
        }
    }
    const handleComment = () => {
        if (localStorage.getItem('eLearning_data')) {
            let idUser = JSON.parse(localStorage.getItem('eLearning_data')).id;
            socketRef.current.emit('sendNewComment',
                {
                    idUser,
                    content: content,
                    idCourse: idCourse,
                    idItem: idItem
                });
            setContent('')
        }
        else {
            swal("Oops!", 'Bạn cần đăng nhập để có thể bình luận.', "error");
        }
    }
    // socket comment
    useEffect(() => {
        socketRef.current = socketIOClient.connect(host)

        socketRef.current.on('getId', data => {
            // setId(data)
            console.log(data);
        })

        socketRef.current.on('receiveNewComment', data => {
            console.log(data);
            if (data.newComment) {
                setListComment(oldComment => [data.newComment, ...oldComment])
            }
            else
                swal("Oops!", 'Đã có lỗi xảy ra, vui lòng kiểm tra lại', "error");
        })

        return () => {
            socketRef.current.disconnect();
        };
    }, [])

    // initial data
    useEffect(async () => {
        if (localStorage.getItem('eLearning_data')) {
            setAccessComment(true)
        }
        if (idCourse) {
            let data = await f8Context.getListCommentCourse(idCourse)
            setListComment(data.data)
            console.log('cmt course ', idCourse, ':', data);
        }
        else if (idItem) {
            let data = await f8Context.getListCommentItem(idItem)
            setListComment(data.data)
            console.log('cmt item ', idItem, ':', data);
        }
        else
            console.warn('éo nhận đc cái id nào để show hết')
    }, [window.location.href])

    return (
        <>
            <div className='px-2 mb-3'>
                <p className='text-[#003663] font-bold my-4 text-[20px] pt-[20px]'>{listComment.length} {listComment.length > 1 ? 'comments' : 'comment'}</p>
                <div>
                    <div className='w-full flex items-center'>
                        <FaceIcon style={{ width: '40px', height: '40px', color: 'orange', marginRight: '2px' }} />
                        <div className='w-full'>
                            <input
                                type="text"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder={accessComment ? 'Bạn có thắc mắc gì trong bài học này không ?' : 'Bạn cần đăng nhập để thực hiện tính năng này.'}
                                disabled={!accessComment}
                                className='w-full p-2 '
                                style={{ outline: 'none' }}
                            />
                            <hr />
                        </div>
                    </div>
                    <div className='flex justify-end my-1 mx-3'>
                        <button className='hover:bg-gray-200 rounded-2xl text-gray-500 px-2 py-1 font-semibold mx-2' onClick={handleCancel}>Cancel</button>
                        <button className='rounded-2xl text-white bg-orange-400 px-2 py-1 font-semibold hover:opacity-75' onClick={handleComment}>Comment</button>
                    </div>
                </div>
                <div>
                    {listComment.map((item, index) => (
                        <div className='flex my-3' key={index}>
                            <img src={item.avatarUser} alt="" className='rounded-full w-10 h-10 p-[2px] mx-1' />
                            <div className='bg-[#f2f3f5] rounded-lg'>
                                <p className='px-4 font-semibold text-[#b89a9b]'>{item.nameUser}</p>
                                <p className="text-[#b89a9b] px-4 text-[15px]">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Comment