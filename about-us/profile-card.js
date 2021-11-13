/**
 * enum SocialLink
 * ソーシャルボタン
 */
const SocialLink =
{
  TWITTER   : "fab fa-twitter",
  GITHUB    : "fab fa-github",
  YOUTUBE   : "fab fa-youtube",
  INSTAGRAM : "fab fa-instagram"
};

class Profile
{
  constructor(class_name, isLeader = false)
  {
    this.class_name   = class_name;
    this.name         = "";
    this.furigana     = "";
    this.isLeader     = isLeader;
    this.avatar_img   = "";
    this.social_links = [];
    this.tantouList   = [];
    this.yoteiList    = [];
    this.theme_color  = "";
    this.html         = "";
  }

  /**
   * 名前を設定
   * @param {*} name 名前
   * @param {*} furigana フリガナ
   */
  set_name(name, furigana)
  {
    this.name = name;
    this.furigana = furigana;
  }

  set_avatarImg(url)
  {
    this.avatar_img = url;
  }

  set_themeColor(color)
  {
    this.theme_color = color;
  }

  /**
   * リンクを追加
   * @param {*} socialLink enum: SocialLink
   * @param {*} url string: url
   */
  add_socialLink(socialLink, url)
  {
    const result = `<a href="${url}" target="_blank"><i class="${socialLink}"></i></a>`;
    this.social_links.push(result);
  }

  /**
   * 担当を追加
   * @param {*} tantou 担当文
   */
  add_TANTOU(tantou)
  {
    const result = `<h3>&bull; ${tantou}</h3>`;
    this.tantouList.push(result);
  }

  add_YOTEI(yotei)
  {
    const result = `<h3>&bull; ${yotei}</h3>`;
    this.yoteiList.push(result);
  }

  create()
  {
    this.html =
    `<style>` +
      `.${this.class_name} .title-bar` +
      `{` +
        `background-color: ${this.theme_color};` +
      `}` +
      `.${this.class_name} h1` +
      `{` +
        `color: ${this.theme_color};` +
      `}` +
    `</style>` +
    `<div class="bg ${this.class_name}">` +
      `<div class="title-bar"><i class="fas fa-user"></i></div>` +
      `<div class="inner">` +
        `<div class="avatar ${this.class_name}" style="background: url(${this.avatar_img}); background-size: 200px;"></div>` +
        `<div class="profile">` +
          `<span>` +
            `<h1 class="name">Name</h1>` +
            `<h2>${this.name}</h2>` +
            `<h3 class="furigana">（${this.furigana}）</h3>`;

            if (this.isLeader)
              this.html += `<h4 class="leader">（リーダー）</h4>`;

            // `<h1>Link</h1>` +
            // `<h3>`;

    // for (let e of this.social_links) this.html += e;

    this.html +=
            `</h3>` +
          `</span>` +
        `</div>` +
        `<div class="detail">` +
          `<span>` +
            `<h1>担当</h1>`;

    for (let e of this.tantouList) this.html += e;

    // this.html +=
    //         `<h1 class="yotei">今後の予定</h1>`;

    for (let e of this.yoteiList) this.html += e;

    this.html +=
          `</span>` +
        `</div>` +
      `</div>` +
    `</div>`;

    document.write(this.html);
  }
}