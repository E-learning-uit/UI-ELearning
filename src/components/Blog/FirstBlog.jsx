import { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatIcon from '@material-ui/icons/Chat';
import ava2 from '../../assets/blog/ava2.jpg'
const FirstBlog = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1 w-[40%] mx-auto my-4">
                <h4 className='text-xl'>Nguyên Đinh</h4>
                <div className='flex items-center my-3'>
                    <div>
                        <FavoriteBorderIcon />
                        <span className='mx-2'>30</span>
                    </div>
                    <div>
                        <ChatIcon />
                        <span className='mx-2'>3</span>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <h1 className='font-bold text-5xl my-5'>Xử Lý Bất Đồng Bộ Trong Javascript - Phần 1</h1>
                <div>
                    <div className='flex items-center justify-between my-3'>
                        <div className='flex items-center'>
                            <div className='mx-2'>
                                <img src={ava2} alt="" className='w-9 h-9 rounded-full' />
                            </div>
                            <div>
                                <p className='font-bold'>Nguyên Đinh</p>
                                <p className='text-[#757575]'>7 tháng trước · 8 phút đọc</p>
                            </div>
                        </div>
                        <div>
                            <BookmarkBorderIcon />
                            <MoreHorizIcon />
                        </div>
                    </div>
                    <div>
                        <p className="text-xl font-semibold mt-4"> Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian delay (gọi API, lấy dữ liệu từ Database, đọc/ghi file,…). Và đây chính là lúc xử lý bất đồng bộ lên ngôi, hãy cùng mình tìm hiểu về bất đồng bộ trong Javascript và chúng giúp code dễ dàng hơn thế nào nhé.</p>
                        <p className="text-xl font-light mt-6">Trong phần đầu tiên này, chúng ta sẽ cùng tìm hiểu và khái niệm cũng như một số phương án xử lý hay dùng.</p>
                        <h3 className="text-3xl font-semibold mt-6">1. Quá trình đồng bộ (Synchronous)</h3>
                        <p className="text-xl font-light mt-6">Đây là một quá trình đã rất quen thuộc với chúng ta. Về cơ bản thì quá trình này gồm các câu lệnh được thực hiện theo thứ tự lần lần lượt, câu lệnh thứ nhất phải hoàn thành thì mới có thể thực hiện câu lệnh thứ 2, …
                            <br />Ví dụ, đây là một đoạn code của quá trình đồng bộ:<br />
                        </p>
                        {/* <pre className="mt-6 ">
                            <code >
                                <span className="px-1 py-1 bg-[#607d8b33] rounded-sm mb-2">console.log("job1");</span><br />
                                <span className="px-1 py-1 bg-[#607d8b33] rounded-sm">console.log("job2");</span><br />
                                <span className="px-1 py-1 bg-[#607d8b33] rounded-sm">console.log("job3");</span>
                            </code>
                        </pre>
                        <p className="text-xl font-light mt-6"><br />Các câu lệnh sẽ chạy lần lượt và cho ra kết quả như sau:<br /></p>
                        <code>
                            job1
                            job2
                            job3
                        </code> */}
                        <p className="text-xl font-light mt-6"><strong>Ưu điểm:</strong>Do các câu lệnh được chạy lần lượt nên sẽ dễ kiểm soát hơn, ngoài ra nếu có bất kỳ lỗi nào thì chương trình cũng sẽ dừng lại mà không chạy tiếp.</p>
                        <p className="text-xl font-light mt-6"><strong>Hạn chế:</strong>: Đôi khi chúng ta cần lấy dữ liệu từ bên ngoài (đọc file, lấy dữ liệu từ DB, …) nên sẽ cần một thời gian chờ nhất định. Nếu chúng ta thực hiện theo kiểu đồng bộ, thì thời gian chạy của toàn bộ chương trình sẽ bằng tổng thời gian thực hiện từng câu lệnh một</p>
                        <p className="text-xl font-light mt-6">Điều này có thể làm giảm hiệu năng của chương trình. Ví dụ ta cần đọc 100 file, mỗi file cần 0.5s. Tổng thời gian chạy chương trình sẽ là 50s.</p>
                        <div className="my-4">
                            <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/1017/617220d5288a1.png" />
                        </div>
                        <h3 className="text-3xl font-semibold mt-6">2. Quá trình bất đồng bộ (Asynchronous)</h3>
                        <p className="text-xl font-light mt-6">Để giải quyết vấn đề ở quá trình đồng bộ thì chúng ta sẽ sử dụng quá trình bất đồng bộ. Đây là quá trình mà các câu lệnh có thể chạy cùng một lúc chứ không cần chờ câu lệnh trước. Với ví dụ trên, thì ta sẽ chạy đồng thời 100 câu lệnh đọc file cùng một lúc. Chúng ta sẽ chỉ mất khoảng 0.5s đến 1s thay vì 50s như lúc trước.</p>
                        <div className="my-4">
                            <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/1017/617221cbee592.png" />
                        </div>
                        <p className="text-xl font-light mt-6">Một lưu ý là có thể câu lệnh thứ 2 sẽ thực hiện nhanh hơn câu lệnh 1 nên sẽ trả về kết quả sớm hơn. Do đó, kết quả của các câu lệnh cũng có thể được trả về không theo thứ tự gọi bạn đâu.</p>
                        <p className="text-xl font-light mt-6"><strong>Ưu điểm:</strong> Như đã nói, nó giúp chúng ta tối ưu được thời gian chạy của các câu lệnh. Cũng giúp chúng ta thực hiện các tác vụ mất nhiều thời gian mà không làm ảnh hưởng đến luồng chính của chương trình.</p>
                        <p className="text-xl font-light mt-6"><strong>Khuyết điểm:</strong>  Chính vì các câu lệnh được thực hiện đồng thời và kết quả cũng được trả về một cách không theo thứ tự nên sẽ khó kiểm soát cũng như debug code.</p>
                        <h3 className="text-3xl font-semibold mt-6">3. Các cách xử lý bất đồng bộ phổ biến</h3>
                        <p className="text-xl font-light mt-6">Vậy trong Javascript thì làm sao để các câu lệnh thực hiện theo đúng thứ tự ?? Mình sẽ nói đến 3 cách xử lý bất đồng bộ hay dùng nhất:</p>
                        <ul className="list-disc pl-4">
                            <li className="text-xl font-light mt-6">Callback</li>
                            <li className="text-xl font-light mt-6">Promise</li>
                            <li className="text-xl font-light mt-6">Async / Await</li>
                        </ul>
                        <h3 className="text-3xl font-semibold mt-6">3.1 Sử dụng Callback (ES5)</h3>
                        <p className="text-xl font-light mt-6">Callback hiểu đơn giản là bạn truyền một hàm B vào hàm A dưới dạng 1 tham số, một lúc nào đó thì hàm A sẽ gọi hàm B để chạy.</p>
                        {/* <p className="text-xl font-light mt-6"><strong>Ở đây mình dùng setTimeout để giả sử cho thời gian chờ là 1s. Kết quả khi chạy đoạn code trên:</strong></p> */}
                        {/* <p className="text-xl font-light mt-6">
                            <code>
                                Start
                                Waiting
                                End
                            </code>
                        </p> */}
                        <p className="text-xl font-light mt-6">Ở đây hàm callback của mình là printEnd và được truyền vào hàm asyncFunction dưới dạng 1 tham số. Sau khi chờ 1s thì asyncFunction mới gọi hàm callback để thực hiện các câu lệnh tiếp theo.  Callback thường được sử dụng trong các EventListener để khi bắt được các sự kiện sẽ gọi đến hàm callback.</p>
                        <p className="text-xl font-light mt-6">Và tất nhiên callback cũng có nhược điểm của nó. Nếu như bạn cần thực hiện nhiều câu lệnh bất đồng bộ thì bạn cần phải lồng từng đó callback với nhau, khiến cho code sẽ vô cùng khó đọc, khó debug cũng như phát triển (trường hợp này được gọi là Callback Hell),</p>
                        <p className="text-xl font-light mt-6">
                            <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/1017/617223622ca96.png" alt="" />
                        </p>
                        <h3 className="text-3xl font-semibold mt-6">3.2 Sử dụng Promise (ES6)</h3>
                        <p className="text-xl font-light mt-6">Để giải quyết vấn đề Callback Hell ở trên, phiên bản ES6 đã đem đến cho chúng ta Promise. Về khái niệm, Promise chính là “lời hứa” đại diện cho giá trị chưa tồn tại và giá trị đó sẽ được trả về vào một thời gian trong tương lai.</p>
                        <p className="text-xl font-light mt-6">Ví dụ, khi bạn oder một món đồ ở trên mạng và cần 2 ngày để ship về, có thể thấy hành động giao hàng ở đây là bất đồng bộ (cần 2 ngày mới có thể hoàn thành). Thì chủ shop đã trao cho bạn một “lời hứa”  đại diện cho món hàng đó. Sau đó, bạn vẫn thực hiện các hoạt động khác (ăn, ngủ, code) bình thường và cuối cùng sẽ nhận được món hàng sau 2 ngày và có thể sử dụng nó.</p>
                        <p className="text-xl font-light mt-6">Promise sẽ nhận vào một hàm callback gồm 2 tham số như sau:</p>
                        <ul className="list-disc pl-4">
                            <li>
                                <p className="text-xl font-light mt-6"><strong>resolve</strong>: một function sẽ được gọi nếu đoạn code bất đồng bộ trong Promise chạy thành công.</p>
                            </li>
                            <li>
                                <p className="text-xl font-light mt-6"><strong>reject</strong>: một function sẽ được gọi nếu đoạn code bất đồng bộ trong Promise có lỗi xảy ra.
                                    Promise cũng cung cấp cho chúng ta 2 phương thức để xử lý sau khi được thực hiện:</p>
                            </li>
                            <li>
                                <p className="text-xl font-light mt-6"><strong>then()</strong>: Dùng để xử lý sau khi Promise được thực hiện thành công (khi resolve được gọi).</p>
                            </li>
                            <li>
                                <p className="text-xl font-light mt-6"><strong>catch()</strong>: Dùng để xử lý sau khi Promise có bất kỳ lỗi nào đó (khi reject được gọi).
                                    Dưới đây là đoạn code hoàn chỉnh về việc sử dụng Promise:</p>
                            </li>
                        </ul>
                        <p className="text-xl font-light mt-6">Mình đã khởi tạo một Promise là randomNumber, nhiệm vụ của Promise này là gọi lên API để lấy một số ngẫu nhiêu trong khoảng [1, 10]. Nếu lấy được số thành công thì sẽ truyền kết quả qua hàm resolve(), còn nếu có lỗi thì sẽ truyền lỗi qua hàm reject().</p>
                        <p className="text-xl font-light mt-6">Ở hàm then(), mình truyền vào 1 callback để in số đó ra nếu lấy thành công</p>
                        <p className="text-xl font-light mt-6">Còn hàm catch() thì là callback để thông báo lỗi nếu thất bại.</p>
                        <p className="text-xl font-light mt-6">Ngoài ra, ta cũng có thể nối nhiều Promise với nhau (Promise Chaining) để xử lý nhiều thao tác bất đồng bộ lồng nhau. Từ đó tránh được Callback Hell.</p>
                        <p className="text-xl font-light mt-6"><strong>Tạm Kết </strong>Vậy là mình đã giới thiệu với các bạn khái quát về bất đồng bộ cũng như một số cách xử lý hay dùng. Tất nhiên còn 1 cách nữa là Async / Await, mình sẽ nói rõ hơn ở phần 2. Cảm ơn các bạn đã đọc hết bài viết</p>
                        <p className="text-xl font-light mt-6"><strong>Source: </strong><a href="https://codelearn.io/sharing/bat-dong-bo-trong-javascript-phan-1"></a>https://codelearn.io/sharing/bat-dong-bo-trong-javascript-phan-1</p>
                        <div className='flex items-center my-8 '>
                            <div>
                                <FavoriteBorderIcon />
                                <span className="mx-2">30</span>
                            </div>
                            <div>
                                <ChatIcon />
                                <span className="mx-2">3</span>
                            </div>
                        </div>
                        <span className="px-2 py-1 bg-[#f2f2f2] rounded">
                            <a href="https://fullstack.edu.vn/blog/tag/javascript">Javascript</a>
                        </span>
                        <div className="my-8">
                            <h3 className="text-xl font-semibold mt-6">Bài đăng cùng tác giả</h3>
                            <ul className="list-disc pl-4 mt-4">
                                <li>
                                    <a href="https://fullstack.edu.vn/blog/xu-ly-bat-dong-bo-trong-javascript-phan-2.html">Xử lý bất đồng bộ trong Javascript (phần 2)</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstBlog