import { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
const FirstBlog = () => {
    return (
        <div>
            <div>
                <h4>Nguyên Đinh</h4>
                <div>
                    <div>
                        <FavoriteBorderIcon />
                        <span>30</span>
                    </div>
                    <div>
                        <ChatBubbleOutlineIcon />
                        <span>3</span>
                    </div>
                </div>
            </div>
            <div>
                <h1>Xử Lý Bất Đồng Bộ Trong Javascript - Phần 1</h1>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h5>Nguyên Đinh</h5>
                        <span>7 tháng trước · 8 phút đọc</span>
                    </div>
                    <div>
                        <h2>Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian delay (gọi API, lấy dữ liệu từ Database, đọc/ghi file,…). Và đây chính là lúc xử lý bất đồng bộ lên ngôi, hãy cùng mình tìm hiểu về bất đồng bộ trong Javascript và chúng giúp code dễ dàng hơn thế nào nhé.</h2>
                        <span>Trong phần đầu tiên này, chúng ta sẽ cùng tìm hiểu và khái niệm cũng như một số phương án xử lý hay dùng.</span>
                        <h3>1. Quá trình đồng bộ (Synchronous)</h3>
                        <span>Đây là một quá trình đã rất quen thuộc với chúng ta. Về cơ bản thì quá trình này gồm các câu lệnh được thực hiện theo thứ tự lần lần lượt, câu lệnh thứ nhất phải hoàn thành thì mới có thể thực hiện câu lệnh thứ 2, …
                            <br />Ví dụ, đây là một đoạn code của quá trình đồng bộ:<br />
                        </span>
                        <code>
                            console.log("job1");
                            console.log("job2");
                            console.log("job3");
                        </code>
                        <span><br />Các câu lệnh sẽ chạy lần lượt và cho ra kết quả như sau:<br /></span>
                        <code>
                            job1
                            job2
                            job3
                        </code>
                        <span><strong>Ưu điểm:</strong>Do các câu lệnh được chạy lần lượt nên sẽ dễ kiểm soát hơn, ngoài ra nếu có bất kỳ lỗi nào thì chương trình cũng sẽ dừng lại mà không chạy tiếp.</span>
                        <span><strong>Hạn chế:</strong>: Đôi khi chúng ta cần lấy dữ liệu từ bên ngoài (đọc file, lấy dữ liệu từ DB, …) nên sẽ cần một thời gian chờ nhất định. Nếu chúng ta thực hiện theo kiểu đồng bộ, thì thời gian chạy của toàn bộ chương trình sẽ bằng tổng thời gian thực hiện từng câu lệnh một</span>
                        <span>Điều này có thể làm giảm hiệu năng của chương trình. Ví dụ ta cần đọc 100 file, mỗi file cần 0.5s. Tổng thời gian chạy chương trình sẽ là 50s.</span>
                        <span>
                            <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/1017/617220d5288a1.png" />
                        </span>
                        <h3>2. Quá trình bất đồng bộ (Asynchronous)</h3>
                        <span>Để giải quyết vấn đề ở quá trình đồng bộ thì chúng ta sẽ sử dụng quá trình bất đồng bộ. Đây là quá trình mà các câu lệnh có thể chạy cùng một lúc chứ không cần chờ câu lệnh trước. Với ví dụ trên, thì ta sẽ chạy đồng thời 100 câu lệnh đọc file cùng một lúc. Chúng ta sẽ chỉ mất khoảng 0.5s đến 1s thay vì 50s như lúc trước.</span>
                        <span>
                            <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/1017/617221cbee592.png" />
                        </span>
                        <span>Một lưu ý là có thể câu lệnh thứ 2 sẽ thực hiện nhanh hơn câu lệnh 1 nên sẽ trả về kết quả sớm hơn. Do đó, kết quả của các câu lệnh cũng có thể được trả về không theo thứ tự gọi bạn đâu.</span>
                        <span><strong>Ưu điểm:</strong> Như đã nói, nó giúp chúng ta tối ưu được thời gian chạy của các câu lệnh. Cũng giúp chúng ta thực hiện các tác vụ mất nhiều thời gian mà không làm ảnh hưởng đến luồng chính của chương trình.</span>
                        <span><strong>Khuyết điểm:</strong>  Chính vì các câu lệnh được thực hiện đồng thời và kết quả cũng được trả về một cách không theo thứ tự nên sẽ khó kiểm soát cũng như debug code.</span>
                        <h3>3. Các cách xử lý bất đồng bộ phổ biến</h3>
                        <span>Vậy trong Javascript thì làm sao để các câu lệnh thực hiện theo đúng thứ tự ?? Mình sẽ nói đến 3 cách xử lý bất đồng bộ hay dùng nhất:</span>
                        <ul>
                            <li>Callback</li>
                            <li>Promise</li>
                            <li>Async / Await</li>
                        </ul>
                        <h3>3.1 Sử dụng Callback (ES5)</h3>
                        <span>Callback hiểu đơn giản là bạn truyền một hàm B vào hàm A dưới dạng 1 tham số, một lúc nào đó thì hàm A sẽ gọi hàm B để chạy. Ví dụ:</span>
                        <span>
                            <code>
                                {
                                    function asyncFunction(callback) {
                                        console.log("Start");
                                        setTimeout(() => {
                                            callback();
                                        }, 1000);
                                        console.log("Waiting");
                                    }
                                }
                            </code>
                        </span>
                        <span><strong>Ở đây mình dùng setTimeout để giả sử cho thời gian chờ là 1s. Kết quả khi chạy đoạn code trên:</strong></span>
                        <span>
                            <code>
                                Start
                                Waiting
                                End
                            </code>
                        </span>
                        <span>Ở đây hàm callback của mình là printEnd và được truyền vào hàm asyncFunction dưới dạng 1 tham số. Sau khi chờ 1s thì asyncFunction mới gọi hàm callback để thực hiện các câu lệnh tiếp theo.  Callback thường được sử dụng trong các EventListener để khi bắt được các sự kiện sẽ gọi đến hàm callback.</span>
                        <span>Và tất nhiên callback cũng có nhược điểm của nó. Nếu như bạn cần thực hiện nhiều câu lệnh bất đồng bộ thì bạn cần phải lồng từng đó callback với nhau, khiến cho code sẽ vô cùng khó đọc, khó debug cũng như phát triển (trường hợp này được gọi là Callback Hell),</span>
                        <span>
                            <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/1017/617223622ca96.png" alt="" />
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstBlog