interface Language_Word {
    [key:string]:string,
}

type SuggestedSentence = 'add_items_to_cart' | 'n_items_left' | 'select_n_items'

type SentenceFromValue = (arg0: string|number)=>{[key:string]:string}

type SentenceObjType = { [K in SuggestedSentence]: SentenceFromValue } & { [k: string]: SentenceFromValue }

type SuggestedWord = 'darkmode' | 'language' | 'cart' | 'user' | 'search' | 'more' 
                    | 'libraries' | 'solutions' | 'articles' 
                    | 'comics' | 'novel' | 'book' 
                    | 'book_language' | 'english' | 'vietnamese' 
                    | 'price_from' | 'price_to' | 'filt' 
                    | 'manga' | 'manhua' | 'manhwa' | 'shop' | 'all' 
                    | 'delivery_on' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday' 
                    | 'not_found_delivery_msg' | 'my_order' | 'logout' | 'view_cart' | 'empty_cart' | 'buy_now' | 'add_to_cart'
                    | 'lang_VI' | 'lang_EN' | 'book_filting' | 'book_filting_lang' | 'book_filting_price1' | 'book_filting_price2'
                    | 'book_searching' | 'all_product' | 'show_menubar' | 'hide_menubar' | 'delete_filter' 
                    | 'purchasing' | 'shipping_detail' | 'product_description' | 'customer_review' | 'show_more' | 'show_less'
                    | 'delivery_to'  | 'change_address' | 'add_to_cart_success_msg' | 'exceed_quantity_msg' | 'quantity'
                    | 'overview' | 'rating' | 'response_from_seller' | 'select_delivery_address' | 'other_address'
                    | 'select_loc_1' | 'select_loc_2' | 'select_loc_3' | 'amount' | 'subtotal' | 'make_payment'
                    |'item'|'price'|'amount_2'|'remove'|'remove_item'|'remove_item_warn'|'yes'|'no'
                    |'buyer_name'|'buyer_name_input_warn'|'buyer_phone_num'|'buyer_phone_num_input_warn'
                    |'buyer_email'|'buyer_email_input_warn'|'invalid_email_warn'|'delivery_address'|'delivery_address_input_warn'
                    |'shipping_method'|'shipping_method_input_warn'|'spec_address'|'spec_address_input_warn'|'example'
                    |'payment_method'|'payment_method_input_warn'|'cod_payment'|'credit_card'|'items_price'|'shipping_fee'|'total'
                    |'order'|'sold'|'pending'|'awaiting_delivery'|'delivering'|'complete'|'cancelled'|'order_date'|'status'
                    |'delivery_date'|'expected_date_delivery'|'cancel_date'|'view_items'|'cancel_order'|'zalopay'|'filter'|'category'
                    |'no_result_found_msg'|'exceed_quantity_in_cart_msg'|'order_complete_title'|'order_complete_msg'|'continue_shopping'
                    |'login'|'account'|'password'|'cancel'|'login_fail_title'|'login_fail_msg'|'acc_input_warn'|'pass_input_warn'
                    |'select_payment_method'


type SuggestedKeysType = { [K in SuggestedWord]: Language_Word } & { [k: string]: Language_Word }

// deprecated, old code
// interface Word_List {
//     darkmode:Language_Word, language:Language_Word, cart:Language_Word, user:Language_Word, search:Language_Word, more:Language_Word,
//     libraries:Language_Word, solutions:Language_Word, articles:Language_Word,
//     comics:Language_Word, novel:Language_Word, book: Language_Word, 
//     book_language:Language_Word, english:Language_Word, vietnamese: Language_Word,
//     price_from:Language_Word, price_to:Language_Word, filt:Language_Word
// }

const Word:SuggestedKeysType = {
    fill:{EN:'Filling eff',VI:'Filling eff'},
    select_payment_method:{EN:'Selecting a payment method',VI:'Chọn phương thức thanh toán'},
    pass_input_warn:{EN:'The entered password is not valid', VI:'Mật khẩu đã nhập không hợp lệ.'},
    acc_input_warn:{EN:'Account name is invalid.', VI:'Tên tài khoản không hợp lệ.'},
    login_fail_msg:{EN:'Incorrect login information.', VI:'Sai thông tin đăng nhập.'},
    login_fail_title:{EN:'Failed to login', VI:'Đăng nhập thất bại'},
    cancel:{EN:'Cancel',VI:'Hủy bỏ'},
    password:{EN:'Password',VI:'Mật khẩu'},
    account:{EN:'Account',VI:'Tài khoản'},
    login:{EN:'Login',VI:'Đăng nhập'},
    continue_shopping:{EN:'Continue shopping',VI:'Tiếp tục mua sắm'},
    order_complete_title:{EN:'Your order is completed!',VI:'Đặt hàng thành công!'},
    order_complete_msg:{EN:'Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.',
                VI:'Cảm ơn bạn đã đặt hàng! Đơn hàng của bạn đang được xử lý và sẽ hoàn thành trong vòng 3-6 giờ. Bạn sẽ nhận được email xác nhận khi đơn hàng của bạn hoàn tất.'},
    no_result_found_msg:{EN:'No matching results were found', VI:'Không tìm thấy kết quả phù hợp'},
    category:{EN:'Category',VI:'Danh mục'},
    filter:{EN:'Filter',VI:'Bộ lọc'},
    status:{EN:'Status',VI:'Trạng thái'},
    order_date:{EN:'Order date',VI:'Ngày đặt hàng'},
    zalopay:{EN:'Zalopay',VI:'Zalopay'},
    cancel_order:{EN:'Cancel order', VI:'Hủy đơn hàng'},
    view_items:{EN:'View items', VI:'Xem mặt hàng'},
    expected_date_delivery:{EN:'Expected date of delivery', VI:'Thời gian nhận hàng dự kiến'},
    delivery_date:{EN:'Delivery date',VI:'Ngày nhận hàng'},
    cancel_date:{EN:'Cancellation date', VI:'Ngày hủy đơn'},
    cancelled:{EN:'Cancelled',VI:'Đã hủy'},
    complete:{EN:'Complete',VI:'Hoàn thành'},
    delivering:{EN:'Delivery is in progress',VI:'Đang giao hàng'},
    awaiting_delivery:{EN:'Awaiting delivery',VI:'Chờ giao hàng'},
    pending:{EN:'Pending',VI:'Chờ xác nhận'},
    sold:{EN:'Sold',VI:'Đã bán'},
    order:{EN:'Order',VI:'Đặt hàng'},
    total:{EN:'Total',VI:'Tổng cộng'},
    shipping_fee:{EN:'Shipping fee: ',VI:'Phí vận chuyển: '},
    items_price:{EN:'Items price: ',VI:'Giá hàng hóa: '},
    credit_card:{EN:'Credit card', VI:'Thẻ tín dụng'},
    cod_payment:{EN:'Cash on delivery',VI:'Thanh toán tiền mặt (khi nhận hàng)'},
    payment_method_input_warn:{EN:'Please select a payment method!',VI:'Vui lòng chọn một phương thức thanh toán'},
    payment_method:{EN:'Payment method',VI:'Phương thức thanh toán'},
    example:{EN:'Example:',VI:'Ví dụ:'},
    spec_address_input_warn:{EN:'Please enter house number, street name!',VI:'Vui nhập số nhà, tên đường!'},
    spec_address:{EN:'House number, street name',VI:'Số nhà, tên đường'},
    shipping_method_input_warn:{EN:'Please select a shipping method!',VI:'Vui lòng chọn một phương thức vận chuyển'},
    shipping_method:{EN:'Shipping method',VI:'Phương thức vận chuyển'},
    delivery_address_input_warn:{EN:'Please select a valid delivery address!',VI:'Vui lòng chọn một địa chỉ nhận hàng hợp lệ!'},
    delivery_address:{EN:'Delivery address', VI:'Địa chỉ nhận hàng'},
    invalid_email_warn:{EN:'The input is not valid E-mail!',VI:'Email đã nhập không hợp lệ!'},
    buyer_email_input_warn:{EN:"Please enter the buyer's email!",VI:'Vui lòng nhập Email người mua!'},
    buyer_email:{EN:"Buyer's email", VI:'Email người mua'},
    buyer_phone_num_input_warn:{EN:"Please enter the buyer's phone number!",VI:'Vui lòng nhập SĐT người mua!'},
    buyer_phone_num:{EN:"Buyer's phone number", VI:'Số điện thoại người mua'},
    buyer_name_input_warn:{EN:"Please enter the buyer's name!",VI:'Vui lòng nhập tên người mua!'},
    buyer_name:{EN:"Buyer's full name",VI:'Họ tên người mua'},
    yes:{EN:'Yes',VI:'Có'},
    no:{EN:'No',VI:'Không'},
    remove_item_warn:{EN:'Are you sure you want to remove this item?',VI:'Bạn có chắc muốn bỏ mặt hàng này?'},
    remove_item:{EN:'Remove item',VI:'Bỏ mặt hàng'},
    remove:{EN:'Remove',VI:'Bỏ'},
    amount:{EN:'Amount',VI:'Số lượng'},
    price:{EN:'Price',VI:'Giá'},
    item:{EN:'Item',VI:'Mặt hàng'},
    make_payment:{EN:'Make payment',VI:'Thanh toán'},
    subtotal:{EN:'Subtotal: ',VI:'Tạm tính: '},
    amount_2:{EN:'Amount:',VI:'SL:'},
    select_loc_3:{EN:'Select Ward/Commune',VI:'Chọn Phường/Xã'},
    select_loc_2:{EN:'Select District',VI:'Chọn Quận/Huyện'},
    select_loc_1:{EN:'Select Province/City',VI:'Chọn Tỉnh/Thành phố'},
    other_address:{EN:'Other address',VI:'Địa chỉ khác'},
    select_delivery_address:{EN:'Select delivery address',VI:'Chọn địa chỉ giao hàng'},
    response_from_seller:{EN:'Response from seller:', VI:'Phản hồi của người bán:'},
    rating:{EN:'rating(s)',VI:'đánh giá'},
    overview:{EN:'Overview',VI:'Tổng quan'},
    add_to_cart:{EN:'Add to cart',VI:'Thêm vào giỏ hàng'},
    quantity:{EN:'Quantity',VI:'Số lượng'},
    delivery_to:{EN:'Delivery to',VI:'Giao đến'},
    change_address:{EN:'Change address',VI:'Đổi địa chỉ'},
    exceed_quantity_in_cart_msg:{EN:'The quantity in the cart exceeds the quantity available!', VI:'Số lượng trong giỏ hàng vượt quá số lượng khả dụng!'},
    exceed_quantity_msg:{EN:'The quantity entered exceeds the quantity available!', VI:'Số lượng thêm vượt quá số lượng khả dụng!'},
    add_to_cart_success_msg:{EN:'Successfully add to cart!', VI:'Thêm vào giỏ hàng thành công!'},
    // add_items_to_cart_1:{EN:'Added',VI:'Đã thêm'},
    // add_items_to_cart_2:{EN:'items',VI:'mặt hàng'},
    show_less:{EN:'Show less', VI:'Ẩn bớt'},
    show_more:{EN:'Show more', VI: 'Hiện thêm'},
    customer_review:{EN:'Customer reviews', VI:'Đánh giá từ khách hàng'},
    product_description:{EN:'About this item', VI:'Mô tả hàng hóa'},
    purchasing:{EN:'Purchasing',VI:'Mua hàng'},
    shipping_detail:{EN:'Shipping & fee details', VI:'Thông tin vận chuyển & phí'},
    delete_filter:{EN:'Delete the filter', VI:'Xóa bộ lọc'},
    show_menubar:{EN:'Show menu bar', VI:'Hiện thanh menu'},
    hide_menubar:{EN:'Hide menu bar', VI:'Ẩn thanh menu'},
    all_product:{EN:'All product', VI:'Tất cả mặt hàng'},
    lang_EN:{EN:'English', VI:'Tiếng Anh'},
    lang_VI:{EN:'Vietnamese', VI:'Tiếng Việt'},
    book_filting:{EN:'Showing books',VI:'Đang hiển thị sách'},
    book_filting_lang:{EN:'in',VI:''},
    book_filting_price1:{EN:'priced from ',VI:'có giá từ'},
    book_filting_price2:{EN:'to',VI:'đến'},
    book_searching:{EN:'related to the keyword', VI:'có liên quan đến từ khóa'},
    darkmode: { EN: "Dark mode", VI: "Chế độ tối" },
    language: { EN: "Language", VI: "Ngôn ngữ" },
    cart: { EN: "Cart", VI: "Giỏ hàng" },
    user: { EN: "User", VI: "Người dùng" },
    search: { EN: "Search a product...", VI: "Tìm kiếm sản phẩm..." },
    more: { EN: "More", VI: "Xem thêm" },
    libraries: { EN: "Libraries", VI: "Thư viện" },
    solutions: { EN: "Solutions", VI: "Giải pháp" },
    articles: { EN: "Articles", VI: "Bài viết" },
    book_language:{ EN: "Book language", VI: "Ngôn ngữ sách" },
    english:{ EN: "English", VI: "Tiếng Anh" },
    vietnamese:{EN:"Vietnamese", VI: "Tiếng Việt"},
    comics:{ EN: "Comics", VI: "Truyện tranh" },
    novel:{ EN: "Novels", VI: "Tiểu thuyết" },
    book:{ EN: "Books", VI: "Sách" },
    manga:{EN:"Manga", VI:"Manga"},
    manhwa:{EN:"Manhwa", VI:"Manhwa"},
    manhua:{EN:"Manhua", VI:"Manhua"},
    economy_book:{EN:"Economy book", VI:"Sách kinh tế"},
    technology_book:{EN:"Technology book", VI:"Sách công nghệ"},
    history_book:{EN:"History book", VI:"Sách lịch sử"},
    shop:{EN:"Shop",VI:"Shop"},
    price_from:{EN:"Price from", VI:"Giá tiền từ"},
    price_to:{EN:"To", VI:"Đến"},
    filt:{EN:"Fill", VI:"Lọc"},
    all:{EN:"Shop", VI:"Cửa hàng",}, // All shop 
    delivery_on:{EN:"Delivery on", VI:"Giao hàng vào"},
    monday:{EN:"Monday",VI:"Thứ hai"},
    tuesday:{EN:"Tuesday",VI:"Thứ ba"},
    wednesday:{EN:"Wednesday",VI:"Thứ tư"},
    thursday:{EN:"Thursday",VI:"Thứ năm"},
    friday:{EN:"Friday", VI:"Thứ sáu"},
    saturday:{EN:"Saturday", VI:"Thứ bảy"},
    sunday:{EN:"Sunday", VI:"Chủ nhật"},
    not_found_delivery_msg:{EN:"No delivery information found at this address",VI:"Không tìm thấy thông tin giao hàng ở địa chỉ này"},
    my_order:{EN:'My orders', VI:'Đơn hàng của tôi'},
    logout:{EN:'Log out', VI:'Đăng xuất'},
    view_cart:{EN:'View cart', VI:'Xem giỏ hàng'},
    empty_cart:{EN:'There is nothing in the cart yet', VI:'Chưa có gì trong giỏ hàng'},
    buy_now:{EN:'Buy now', VI:'Mua ngay'},
    
    

    //{ EN: "", VI: "" },
}

export default Word;

export const Sentence:SentenceObjType={
    n_items_left:(n)=>({EN:n+' items left', VI:'Còn '+n+' mặt hàng'}),
    add_items_to_cart:(n)=>({EN:'Add '+n+' items!',VI:'Đã thêm '+n+' mặt hàng!'}),
    select_n_items:(n)=>({EN:'Selected '+n+' item(s)',VI:'Đã chọn '+n+' mặt hàng'})
}

export const ShortTimePeriodString = (start:Date, end:Date, lang:string) => {
    const period = [start.getHours(), end.getHours()];
    const date_range = start.getDate()==end.getDate()? start.getDate()+'/'+start.getMonth() 
        : start.getDate()+'/'+start.getMonth()+'-'+end.getDate()+'/'+end.getMonth();
    let hour_range:string;

    if(lang=='VI')
        hour_range=period[0]+"h-"+period[1]+"h";
    else 
    {   const t1 = period[0]>11? String(period[0]-12)+'PM': period[0]+'AM';
        const t2 = period[1]>11? String(period[1]-12)+'PM': period[1]+'AM';
        hour_range=t1+'-'+t2;}

    return date_range+', '+hour_range;
}