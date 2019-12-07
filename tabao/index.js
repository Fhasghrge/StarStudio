let article = `
    <header>
        <div class="xuanze">
            <img src="images/round.png" class="logo" alt="选择" />
        </div>
        <div class="dianpu">
            <a href="">
                <img
                    src="images/shop.png"
                    class="logo"
                    alt="店铺"
                />
                <p>tiger worksll</p>
                <img
                    src="images/right.png"
                    class="logo"
                    alt="详情"
                />
            </a>
        </div>
    </header>

    <!-- 商品的内部 -->
    <div class="good_ifo_main">
        <div class="xuanze">
            <img src="images/round.png" class="logo" alt="选择" />
        </div>

        <div class="middle">

            <div class="good_main_main">
                <img src="images/touxiang1.jpg" alt="good_img" />
                <div class="main_ifo">
                    <p>
                        这种地签了肯定有一大堆的条条框框，
                        或者说只针对腾讯定制的条件。
                    </p>

                    <div class="guige">
                        <select name="选择规格" id="guige">
                            <option value="杏色XL">杏色XL</option>
                            <option value="黑色XL">黑色XL</option>
                            <option value="黑色XL">黑色XL</option>
                            <option value="橘色XL">橘色XL</option>
                        </select>
                    </div>

                    <div class="warnning">
                        <!-- 库存是否紧张？ -->
                        淘宝双十二
                    </div>

                    <div class="jiage_and_num">
                        <div class="jiage">
                            <!-- 商品的价格 -->
                            ￥46.8
                        </div>
                        <div class="num">
                            <!-- 商品的数量 -->
                            <img
                                src="images/move.png"
                                alt="move_good"
                            />
                            <div class="num_of_goods">1</div>
                            <img
                                src="images/add.png"
                                alt="add_good"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="baoyou">
                <!-- 是否包邮的选择 -->
                <div class="shangping_huodong_tap">本店活动</div>
                <div class="shangping_huodong_shuoming">
                    满
                    <p>48</p>
                    ,享包邮
                </div>
                <div class="coudan">
                    <p>去凑单</p>
                    <img src="images/right_color.png" alt="详情" />
                </div>
            </div>

        </div>
    </div>
`;
function add_good_node(html, num){
    while(num--){
        let content = document.getElementsByClassName("shangping")[0];
        let article_node = document.createElement("article");
        article_node.className = "good_ifo";
        article_node.innerHTML = html;
        content.appendChild(article_node)
    }
}
window.onload = function(){
    this.add_good_node(article,5);
}

