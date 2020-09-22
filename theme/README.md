# Theme Hotel Manager

Trong theme mình sử dụng [w3.css](https://www.w3schools.com/w3css/default.asp). Một css reponsive nhẹ và khá đầy đủ các component

---

**Hướng dẫn commit Front-End cho ứng dụng.**

## Cài đặt

    git clone https://github.com/duonghuan2122000/hotel-manager-dbsystem.git
    cd hotel-manager-dbsystem

## Commit 

    git add .
    git commit -m "tên commit"
    git push
   Lưu ý: Trước khi push nhớ kiểm tra commit hiện tại là mới nhất (tức là đang ở commit cuối cùng của project nếu không sẽ bị lỗi)
   

    git pull
## Bonus (Ngoài lề)
Nếu ae làm phần Front-End muốn phát triển nhanh thì mình đã add thêm cơ chế autoload refresh browser.
**Cách sử dụng**
Đầu tiên là máy của ae phải có Nodejs hoặc download tại [https://nodejs.org/](https://nodejs.org/). Sau đó sử dụng terminal

    npm install
    # or
    yarn install // cài yarn qua npm
    // Tiếp theo 
    gulp watch
Một phương thức http tại địa chỉ [http://localhost:3000/](http://localhost:3000/)
