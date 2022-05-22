import { useState } from 'react'
import Ellipse12 from '../assets/Ellipse12.png'
import { Link } from 'react-router-dom'
import ava2 from '../assets/blog/ava2.jpg'

const Blog = () => {
    const [blog, setBlog] = useState([
        {
            id: 1,
            user_name: 'Nguyên Đinh',
            user_img: ava2,
            title: 'Xử Lý Bất Đồng Bộ Trong Javascript - Phần 1',
            content: 'Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian delay (gọi API, lấy dữ liệu từ Database, đọc/ghi file,…)Và đây chính là lúc xử lý bất đồng bộ lên ngôi, hãy cùng mình tìm hiểu về bất đồng bộ trong Javascript và chúng giúp code dễ dàng hơn thế nào nhé.',
            to:'/blog/first-blog'
        },
        {
            id: 2,
            user_name: 'Ho Binh',
            user_img: ava2,
            title: 'ReactJS with Typescript [Series].Phần 1 Basic Typescript',
            content: 'Chào các bạn cộng đồng lập trình f8 mình cũng là một thành viên.Hôm nay mình muốn viết một series về ReactJS kết hợp với typescript . Mình mong mọi người sẽ đón nhận và trao đổi kiến thức với nhau.Bài viết này sẽ viết về những điều tuyệt vời và hay ho khi làm việc với typescript nhé.',
            to:'/blog/second-blog'
        },{
            id: 3,
            user_name: 'Kim Lien',
            user_img: 'https://pbs.twimg.com/media/FGPdlo4VkAErCtK.png',
            title: 'Hướng dẫn quét mã QR code trên điện thoại Android và iOS một cách dễ dàng',
            content: 'Trong bài viết này, mình sẽ chia sẻ các cách nhanh chóng để quét mã QR ngay lập tức trên điện thoại Android và iOS.'
        },{
            id: 4,
            user_name: 'Kim Lien',
            user_img: 'https://pbs.twimg.com/media/FGPdlo4VkAErCtK.png',
            title: 'Sản phẩm react sau 2 tuần chăm chỉ học tại f8 ',
            content: 'Mình là một học viên đang sinh sống và làm việc tại Nhật Bản , Vốn là dân trái ngành muốn quay đầu học lại IT để có thể tìm kiếm được công việc phù hợp với bản thân hơn nên vài tháng trước mình đã quyết định bắt đầu học lập trình , và tìm kiếm tới một số khóa học bên Việt Nam mong muốn trong một thời gian càng ngắn càng tốt có thể đủ khả năng để xin intern tại một công ty nào đó . Nhưng tất cả các khóa mình tham gia giường như đem lại sự thất vọng về cách thức giảng dạy . Có khóa thì cung cấp những video có sẵn trên các nền tảng như udemy , youtube hay là tài liệu thuần , có những khóa mà giảng viên chỉ nói một mình không tương tác với học viên không có một chút hứng thú gì khi tham gia . Bản thân mình thì tiếp thu khá nhanh nên những nền tảng cơ bản như html css , js , java core mình đã có thể học trong một thời gian rất ngắn nhưng thứ mình hướng tới là sự chỉnh chu kỹ lưỡng về mặt kiến thức và cả những kinh nghiệm thực tế từ giảng viên . Mình đã từng nghĩ rằng một khóa học free thì không thể nào chất lượng bằng bỏ ra những đồng tiền để mua nhưng thật sự đã sai lầm khi theo học ở fullstack.edu.vn . Có thể nói a sơn là một người truyền đạt kiến thức mà mình có thể nghe đến đâu hiểu tới đó và không nản trí khi gặp những vấn đề khó . Và từ đó hình thành được những tư duy code cho dự án riêng của mình . Đây là một sản phẩm sơ sài của mình hoàn thành trong một thời gian khá ngắn sử dụng những components có sẵn trên các thư viện bstrap https://dannytranvu0307.github.io/react-deploy/'
        },{
            id: 5,
            user_name: 'Kim Lien',
            user_img: 'https://pbs.twimg.com/media/FGPdlo4VkAErCtK.png',
            title: 'Tìm hiểu về HTML và CSS',
            content: 'Bài viết sẽ giới thiệu về HTML, CSS là gì, các thẻ cơ bản HTML, CSS. Mục đích của bài viết để tổng hợp kiến thức cơ bản về HTML, CSS.'
        },
    ])

    return (
        <div className="container mx-auto space-y-4 p-5">
            <h1 className='text-[#003663] text-[31px] py-4 font-bold'>Featured Posts</h1>
            <span className="text-[17px] text-slate-400 font-light">Synthesize shared articles about self-study online programming and web programming techniques.</span>
            {blog.map(item => (
                <Link to={item.to ? item.to : '/blog-detail'}>
                    <div className="rounded-2xl border-[1px] border-inherit mt-12 px-6 py-8">
                        <div className="flex flex-row text-center items-center">
                            <img className="w-10 h-10 rounded-full" src={item.user_img} alt="" />
                            <p className='text-[black] text-[16px] font-medium ml-2'>{item.user_name}</p>
                        </div>
                        <h2 className='text-[#003663] text-[24px] font-bold py-2'>{item.title}</h2>
                        <span className='text-[18px] font-light tracking-wide leading-8 overflow-hidden' style={{ "display": "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "3" }}>{item.content}</span>
                        <h4 className='text-[16px] font-normal mt-2'>3 ngày trước</h4>
                    </div>
                </Link>
            ))}
        </div>

    )
}

export default Blog;