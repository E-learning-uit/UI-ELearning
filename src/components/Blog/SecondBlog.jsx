import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import ava from '../../assets/blog/ava.jpg'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const SecondBlog = () => {


    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1 w-[40%] mx-auto my-4">
                <p className='text-xl'>Ho Binh</p>
                <hr className='my-3'/>
                <div className='flex items-center'>
                    <FavoriteIcon />
                    <p className='mx-2'>7</p>
                    <ChatIcon />
                    <p className='mx-2'>3</p>
                </div>
            </div>
            <div className="col-span-2">
                <div className='font-bold text-5xl my-5'>
                    <p>ReactJS with Typescript [Series].</p>
                    <p className='my-1'>Phần 1 Basic Typescript</p>
                </div>
                <div className='flex items-center justify-between my-3'>
                    <div className='flex items-center'>
                        <div className='mx-2'>
                            <img src={ava} alt="" className='w-9 h-9 rounded-full' />
                        </div>
                        <div>
                            <p className='font-bold'>Ho Binh</p>
                            <p className='text-[#757575]'>7 ngày trước . 5 phút trước</p>
                        </div>
                    </div>
                    <div>
                        <BookmarkBorderIcon />
                        <MoreHorizIcon />
                    </div>
                </div>
                <div>
                    <p className='text-2xl'>Chào các bạn cộng đồng lập trình f8 mình cũng là một thành viên.Hôm nay mình muốn viết một series về ReactJS kết hợp với typescript . Mình mong mọi người sẽ đón nhận và trao đổi kiến thức với nhau.Bài viết này sẽ viết về những điều tuyệt vời và hay ho khi làm việc với typescript nhé.</p>
                </div>
                <div className='text-xl'>
                    <p className='font-bold my-4'>I. Giới thiệu về Typescript và cách cài đặt</p>
                    <div>
                        <p className='my-5'>1. Typescript là gì? Điểm mạnh và tại sao nên sử dụng.</p>
                        <ul>
                            <li>TypeScript là một dự án mã nguồn mở được phát triển bởi Microsoft, nó có thể được coi là một phiên bản nâng cao của Javascript bởi việc bổ sung tùy chọn kiểu tĩnh và lớp hướng đối tượng mà điều này không có ở Javascript. TypeScript có thể sử dụng để phát triển các ứng dụng chạy ở client-side (Angular2) và server-side (NodeJS).</li>
                            <img src={'https://files.fullstack.edu.vn/f8-prod/blog_posts/3523/62807a229e33b.png'} alt="" />
                            <li>Như hình ở trên các bạn có thể thấy Typescript bao trọn Javascript và ES6 ngoài ra còn có Interfaces,Strongly Typed và Generics nữa cấu tạo thành Typescript.Qua đó chúng ta thấy Typescript sử dụng tất các các tính năng của ES6(ECMAScript 2015) như là class, module, destructuring…ngoài ra còn sử dụng các Interfaces, Generics ngoài ra còn có một số tính năng khác mình sẽ nói rõ ở phần dưới.Nhưng bản chất Typescript cũng sẽ compiles ra Javascript cũng có thể nói là Typescript là Javascript và browser thì không thể đọc được Typescript nên mới cần biên dịch ra Javascript để thực thi các lệnh và đó là đôi giới thiệu qua về Typescript.</li>
                        </ul>
                        <p className='my-5'>2.Vậy tại sao nên dùng Typescript.</p>
                        <ul>
                            <li>
                                <b>Dễ học và dễ code : </b>
                                <span>Vì được kế thừa cũng như dựa trên các cú pháp từ javascript và code theo kiểu hướng đối tượng như class,interface,generics… nên sẽ dễ tiếp cận.</span>
                            </li>
                            <li>
                                <b>Dễ scale dự án :</b>
                                <span>Với việc sử dụng các kỹ thuật mới nhất và lập trình hướng đối tượng nên TypeScript giúp chúng ta phát triển các dự án lớn một cách dễ dàng.Việc code dự án javascript với dự án càng lớn thì sẽ có rất nhiều kiểu dữ liệu đầu vào và đầu ra khác nhau và việc chúng ta phải nhớ hoặc phải mò lại code rất khổ sở cũng như không rõ sẽ làm cho việc code trở nên khó khăn nhưng đối với Typescript thì chúng ta sẽ biết rõ dữ liệu đầu vào (input) cũng như dữ liệu đầu ra (output) một cách rõ ràng giúp chúng ta thuận tiện khi code.Ngoài ra nó còn được phát triển bởi microsoft nên khi sử dụng cùng với VScode sẽ có rất nhiều các extendsions giúp hỗ trợ nhắc lệnh hoặc báo lỗi rất tốt.</span>
                            </li>
                            <li>
                                <b>Được nhiều người sử dụng cũng như các Framework sự dụng : </b>
                                <span>Typescript được mọi người sử dụng Javascript rất yêu thích và chuyển qua sử dụng ngoài ra còn có các Framework khuyên khích sử dụng như ReactJS,AngularJS nên sẽ có cộng đồng phát triển rất mạnh hỗ trợ việc chúng ta học và làm viêc.</span>
                            </li>
                        </ul>
                    </div>
                    <p className='my-5 font-bold'>II. Cách cài đặt</p>
                    <div>
                        <p>1. Cài đặt Typescript Global</p>
                        <ul>
                            <li>
                                <b>Chạy lệnh :</b>
                                <code className='bg-[rgba(96,125,139,.2)] mx-2'>npm install -g typescript</code>
                                <span>ở terminal. Các bạn lưu ý là trong máy đã cài Nodejs để có thể install.</span>
                            </li>
                            <img src={'https://files.fullstack.edu.vn/f8-prod/blog_posts/3523/628086ee384c6.png'} alt="" />
                            <span>sau khi install thành công thì các bạn sự dụng lệnh</span>
                            <code className='bg-[rgba(96,125,139,.2)] mx-2'>tsc -v</code>
                            <span>để kiểm tra</span>
                            <li>Cách để chạy thử file typescript :</li>
                            <img src={'https://files.fullstack.edu.vn/f8-prod/blog_posts/3523/628087b02b1aa.png'} alt="" />
                            <p>Đầu tiên mình tạo ra một file blog.ts là một file Typescript với nội dung như hình.Để compile ra file Javascript mình sử dụng lệnh tsc blog.ts để tạo ra file blog.js để thực thi các lệnh.Và cuối cùng để thực thi file blog.js thì ta dùng lệnh node blog.js và đây là kết quả.</p>
                        </ul>
                    </div>
                </div>
                <hr className='my-3'/>
                <div className='flex items-center my-2'>
                    <FavoriteIcon />
                    <p className='mx-2'>7</p>
                    <ChatIcon />
                    <p className='mx-2'>3</p>
                </div>
            </div>
            <div className="col-span-1">
                {/* code something */}
            </div>
        </div>
    )
}

export default SecondBlog;