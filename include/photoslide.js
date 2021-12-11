/**
 * スライドに表示する画像
 */
let photos =
[
  "https://cdn.discordapp.com/attachments/726363367245086811/866876003020177418/DX9.jpg",
  "https://cdn.discordapp.com/attachments/866576565793325078/866576726040641566/20210719_160603.JPG",
  "https://cdn.discordapp.com/attachments/726363367245086811/917454324546805860/IMG_4989.jpg"
];

/**
 * 写真を追加
 * @param {string} url 画像URL
 */
function add_photo(url)
{
  $(`<div class="photo-image p${current_index}" style="background: url(${url})"></div>`)
    .appendTo('.photo-list');
}

// 画像幅
let image_width = $('.photo-wrapper .photo-image').width();

// Previous Image Width
let image_width_prev;

// 現在のIndex
let current_index = 0;

// 写真の追加
for (let photo of photos) add_photo(photo);

// Max Index
let max_index = $('.photo-list').children().length - 1;

// ページの丸リスト
let paginations = [];

timer_tick();

init_pagination();

let timer = auto_slide();

let window_width = $(window).width();

$('.next-right').mouseup(function()
{
  next_right();
  reset_timer();
});

$('.prev-left').mouseup(function()
{
  prev_left();
  reset_timer();
});

$('.photo-image').mouseover(function()
{
  // モバイル以外
  if (window_width > 480) clearInterval(timer);
});
$('.photo-image').mouseout(function()
{
  // モバイル以外
  if (window_width > 480) timer = auto_slide();
})

$('.slider-pagination i').mouseup(function()
{
  let index = $('.slider-pagination i').index(this);
  current_index = index;
  reset_timer();
});

/**
 * 次へ
 */
function next_right()
{
  current_index++;

  if (current_index > max_index)
  {
    current_index = 0;
  }

  slide();
}

/**
 * 前へ
 */
function prev_left()
{
  current_index--;

  if (current_index < 0)
  {
    current_index = max_index;
  }

  slide();
}

/**
 * 必要な情報を取得
 */
function get_values()
{
  image_width = $('.photo-wrapper .photo-image').width();
  max_index   = $('.photo-list').children().length - 1;
}

/**
 * 自動スライドタイマー
 * @returns タイマー
 */
function auto_slide()
{
  return setInterval(next_right, 3000);
}

function reset_timer()
{
  clearInterval(timer);
  timer = auto_slide();
}

/**
 * 現在のindexに向けてスライド
 */
function slide()
{
  get_values();

  // 画面サイズが変更されたらindexを0に戻す
  if (image_width_prev != image_width)
  {
    image_width_prev = image_width;
    current_index    = 0;
  }

  $('.photo-wrapper .photo-list')
    .css(
      'transform',
      `translateX(${current_index * -image_width}px)`
    );
}

/**
 * 常時実行
 */
function timer_tick()
{
  setInterval(function()
  {
    slide();
    set_pagination();
  }, 1000 / 60);
}

/**
 * ページ丸の初期化
 */
function init_pagination()
{
  let $p = $('<i class="fas fa-circle current"></i>').appendTo('.slider-pagination');
  paginations.push($p);

  for (let i = 0; i < max_index; i++)
  {
    $p = $('<i class="fas fa-circle"></i>').appendTo('.slider-pagination');
    paginations.push($p);
  }
}

/**
 * ページ丸をセット
 */
function set_pagination()
{
  for (let i = 0; i < max_index + 1; i++)
  {
    if (i == current_index)
    {
      paginations[i].addClass('current');
    }
    else
    {
      paginations[i].removeClass('current');
    }
  }
}
