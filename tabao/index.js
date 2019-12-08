let article = `
    <header>
        <div class="xuanze">
            <img src="images/round.png" class="logo" alt="选择" />
        </div>
        <div class="dianpu">
            <a href="">
                <img
                    src="images/shop.png"
                    class="logo_p"
                    alt="店铺"
                />
                <p>tiger worksll</p>
                <img
                    src="images/right.png"
                    class="logo_p"
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
function add_good_node(html, num) {
    while (num--) {
        let content = document.getElementsByClassName('shangping')[0];
        let article_node = document.createElement('article');
        article_node.className = 'good_ifo';
        article_node.innerHTML = html;
        content.appendChild(article_node);
    }
}
function add_good_num() {
    let goods = document.getElementsByClassName('num');
    let length = goods.length;
    for (let i = 0; i < length; i++) {
        let move_good = goods[i].getElementsByTagName('img')[0];
        let add_good = goods[i].getElementsByTagName('img')[1];
        let good_num = goods[i].getElementsByTagName('div')[0];
        move_good.addEventListener('click', function() {
            if (good_num.innerHTML == 1) {
            } else {
                good_num.innerHTML--;
            }
        });
        add_good.addEventListener('click', function() {
            good_num.innerHTML++;
        });
    }
}
function xuanze() {
    let xuanzes = document.getElementsByClassName('good_ifo_main');
    let length = xuanzes.length;

    for (let i = 0; i < length; i++) {
        let round = xuanzes[i]
            .getElementsByClassName('xuanze')[0]
            .getElementsByTagName('img')[0];
        round.addEventListener('click', function() {
            let attr = round.getAttribute('src');
            attr =
                attr === 'images/round_check.png'
                    ? 'images/round.png'
                    : 'images/round_check.png';
            round.setAttribute('src', attr);
        });
    }
}
function xunaze_dianpu() {
    let goods = document.getElementsByClassName('good_ifo');
    let length = goods.length;
    for (let i = 0; i < length; i++) {
        let dianpu_xuanze = goods[i]
            .getElementsByTagName('header')[0]
            .getElementsByClassName('xuanze')[0]
            .getElementsByTagName('img')[0];
        let goods_xuanzes = goods[i]
            .getElementsByClassName('good_ifo_main')[0]
            .getElementsByClassName('logo');
        dianpu_xuanze.addEventListener('click', function() {
            let src = dianpu_xuanze.getAttribute('src');
            if (src === 'images/round_check.png') {
                dianpu_xuanze.setAttribute('src', 'images/round.png');
                for (let goods_src of goods_xuanzes) {
                    goods_src.setAttribute('src', 'images/round.png');
                }
            } else {
                dianpu_xuanze.setAttribute('src', 'images/round_check.png');
                for (let goods_src of goods_xuanzes) {
                    goods_src.setAttribute('src', 'images/round_check.png');
                }
            }
        });
    }
}
function get_all() {
    let all_price = 0;
    let goods = document.getElementsByClassName('good_ifo_main');
    let heji = document.getElementById('heji').getElementsByTagName('p')[0];

    for (let good of goods) {
        let isxunaze = good.getElementsByClassName('logo')[0];
        isxunaze = isxunaze.getAttribute('src') === 'images/round_check.png';
        let good_price = good.getElementsByClassName('jiage')[0];
        good_price = good_price.innerHTML.match(/\d+(.\d+)?/g)[0];
        good_price = parseFloat(good_price);
        let num = good.getElementsByClassName('num_of_goods')[0];
        num = parseInt(num.innerHTML);
        if (isxunaze) {
            all_price += num * good_price;
        }
    }
    all_price = all_price.toFixed(2);
    heji.innerHTML = '￥' + all_price.toString();
}
function jianting() {
    let logos = document.getElementsByClassName('logo');
    for (let logo of logos) {
        logo.addEventListener('click', this.get_all);
    }
    let changes = document.getElementsByClassName('num');
    for (let change of changes) {
        change_img = change.getElementsByTagName('img');
        change_img[0].addEventListener('click', this.get_all);
        change_img[1].addEventListener('click', this.get_all);
    }
}
function quanxuan_fun() {
    let that = this;
    let quanxuan = document
        .getElementById('quanxuan')
        .getElementsByTagName('img')[0];
    quanxuan.addEventListener('click', function() {
        let attr = quanxuan.getAttribute('src');
        let logos = document.getElementsByClassName('logo');
        if (attr === 'images/round.png') {
            quanxuan.setAttribute('src', 'images/round_check.png');
            for (let logo of logos) {
                logo.setAttribute('src', 'images/round_check.png');
            }
        } else {
            quanxuan.setAttribute('src', 'images/round.png');
            for (let logo of logos) {
                logo.setAttribute('src', 'images/round.png');
            }
        }
        that.get_all();
    });
}
window.onload = function() {
    this.add_good_node(article, 5);
    this.add_good_num();
    this.xuanze();
    this.xunaze_dianpu();
    this.jianting();
    this.get_all();
    this.quanxuan_fun();
};
