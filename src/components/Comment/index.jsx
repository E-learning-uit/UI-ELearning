import { useEffect, useState, useMemo, useRef } from 'react'
import ELearningContext from '../../contexts/f8.context';
import FaceIcon from '@material-ui/icons/Face';


const Comment = ({ props }) => {
    const f8Context = new ELearningContext();
    const { idCourse, idItem } = props;
    const [listComment, setListComment] = useState([]);

    useEffect(async () => {
        if (idCourse) {
            let data = await f8Context.getListCommentCourse(idCourse)
            setListComment(data.data)
            console.log(data);
        }
        else if (idItem) {
            let data = await f8Context.getListCommentItem(idItem)
            setListComment(data.data)
            console.log(data);
        }
    }, [])

    return (
        <>
            <div className='px-2 mb-3'>
                <p className='text-[#003663] font-bold my-4 text-[20px] pt-[20px]'>{listComment.length} {listComment.length > 1 ? 'comments' : 'comment'}</p>
                <div>
                    <div className='w-full flex items-center'>
                        <FaceIcon style={{ width: '40px', height: '40px', color: 'orange', marginRight: '2px' }} />
                        <div className='w-full'>
                            <input type="text" placeholder='Bạn có thắc mắc gì trong bài học này không ?' className='w-full p-2 ' style={{ outline: 'none' }} />
                            <hr />
                        </div>
                    </div>
                    <div className='flex justify-end my-1 mx-3'>
                        <button className='hover:bg-gray-200 rounded-2xl text-gray-500 px-2 py-1 font-semibold mx-2'>Cancel</button>
                        <button className='rounded-2xl text-white bg-orange-400 px-2 py-1 font-semibold hover:opacity-75'>Comment</button>
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