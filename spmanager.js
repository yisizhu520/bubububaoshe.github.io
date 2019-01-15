PLAYER_SPECIALS = [
  [[],[]],
  [
    ["ly1a", "hy2a", "ywy2b", "xyz2b", "qhzr2a", "hy1a", "oysg1a", "fqx1a", "blts1b", "qy1a", "sy2a", "sx2a",  "xy2a", "wry2b", "ywy2a", "xyz2a"],
    ["ly1a", "hy2a", "ywy2a", "xyz2a", "qhzr2a", "hy1a", "oysg1a", "fqx1a", "blts1b", "qy1a", "sy2a", "sx2a",  "xy2a", "wry2b", "ywy2b", "xyz2b"]

  ]
];
class SPManager{
  constructor(){}
  initRepository(repo, pack) {
    var char, trick;
    switch (pack) {
      case "1":
        char = new SpecialCharacter("qy1a", "悭臾", "水虺", 4, "夏", "榣山水湄遇长琴， \n通天彻地为知音。");
        trick = new ComboTrick(null, 10);
        char.addTrick(trick);
        trick = new RevealTrick(1);
        char.addTrick(trick);
        repo.addChar(char);
        char = new SpecialCharacter("blts1b", "百里屠苏", "黑猫", 6, "冬", "眼底无故人，\n世事冷如铁。\n谁与长相约，\n眉间刺新血。");
        trick = new DealTrick("若古剑焚寂在公共卡池中，则下一回合一定出现古剑焚寂。", ["古剑焚寂"], true);
        char.addTrick(trick);
        trick = new ComboTrick("桃花幻梦", 30);
        char.addTrick(trick);
        repo.addChar(char);
        char = new SpecialCharacter("fqx1a", "风晴雪", "凤曦", 4, "春", "好向寒节报花信，\n春风一脉动幽都。");
        trick = new CharTrick("百里屠苏", 15);
        char.addTrick(trick);
        repo.addChar(char);
        char = new SpecialCharacter("ly1a", "陵越", "掌门", 4, "冬", "任侠为道守仙门，\n见素抱朴未忘沉。");
        trick = new SwapTrick();
        char.addTrick(trick);
        char.setNoswap();
        repo.addChar(char);
        char = new SpecialCharacter("oysg1a", "欧阳少恭", "蓬莱", 4, "秋", "眼底无故人，\n偏有漏长惊永夜，\n梦魂又觉第几生。");
        trick = new UnnamedBanTrick();
        char.addTrick(trick);
        trick = new ComboTrick("芳华如梦", 20);
        char.addTrick(trick);
        repo.addChar(char);
        char = new SpecialCharacter("hy1a", "红玉", "道服", 4, "秋", "长霜雪凝精神，\n桃花铸肌骨。\n还报一寸心，\n愿同尘与土。");
        trick = new CopyTrick();
        char.addTrick(trick);
        char.setNoswap();
        repo.addChar(char);
      break;
      case "2":
        char = new SpecialCharacter("sy2a", "沈夜", "紫微", 4, "冬", "天命难解此中局，\n神血护佑心魔曲。");
        trick = new DealTrick(" 下一回合一定出现一个流月城角色",["华月","沈曦","谢衣"], true);
        char.addTrick(trick);
        trick = new RevealTrick(2);
        char.addTrick(trick);
        repo.addChar(char);
        char = new SpecialCharacter("sx2a", "沈曦", "魔化", 4, "春", "稚童新衫犹未裁，\n一点红痕一世哀。");
        trick = new RevealTrick(2);
        char.addTrick(trick);
        repo.addChar(char);
        char = new SpecialCharacter("xy2a", "谢衣", "初七", 4, "夏", "霜刃初试驱长夜，\n破云开天相决绝。");
        trick = new ComboTrick("烈山遗族", 20);
        char.addTrick(trick);
        trick = new RevealTrick(1);
        char.addTrick(trick);
        repo.addChar(char);
        char = new SpecialCharacter("hy2a", "华月", "魔化", 4, "冬", "戾天狂歌琴声啸，\n朔雪为刃止喧嚣。");
        trick = new SwapTrick();
        char.addTrick(trick);
        char.setNoswap();
        repo.addChar(char);
        char = new SpecialCharacter("wry2b", "闻人羽", "天罡", 6, "秋", "天罡夜枕绿沉枪，\n敌血尚温金甲凉。");
        trick = new ComboTrick("蓝衫偃师记", 30);
        char.addTrick(trick);
        char.setNoswap();
        repo.addChar(char);
        char = new SpecialCharacter("ywy2b", "乐无异", "偃师", 6, "夏", "金刚力士舞灵木，\n墨意非攻定乾坤。");
        trick = new RevealTrick(3);
        char.addTrick(trick);
        char.setNoswap();
        repo.addChar(char);
        char = new SpecialCharacter("xyz2a", "夏夷则", "太华", 4, "冬", "江山倦夜眠孤客，\n红堕沾衣冷血痕。");
        trick = new ComboTrick("蓝衫偃师记", 20);
        char.addTrick(trick);
        repo.addChar(char);
        char = new SpecialCharacter("xyz2b", "夏夷则", "鲛人", 6, "冬", "沧海遗珠鲛人泪，\n遗骨托生帝王脉。");
        trick = new UnnamedBanTrick();
        char.addTrick(trick);
        trick = new RevealTrick(2);
        char.addTrick(trick);
        repo.addChar(char);
        char = new SpecialCharacter("qhzr2a", "清和真人", "温留", 4, "秋", "赤血丹心照夙昔，\n殊途与归执道心。");
        trick = new NamedBanTrick("夏夷则");
        char.addTrick(trick);
        trick = new ComboTrick("温茶相待", 30);
        char.addTrick(trick);
        repo.addChar(char);
        char = new SpecialCharacter("ywy2a", "乐无异", "捐毒", 4, "夏", "长安年少重游侠，\n抱酒弹铗杏花阴。");
        trick = new CopyTrick();
        char.addTrick(trick);
        char.setNoswap();
        repo.addChar(char);
      break;
      case "3":
      break;
    }
  }
}
function setCookie(cname, cvalue, exdays = 9999) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}