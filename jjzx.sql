SET NAMES UTF8;
DROP DATABASE IF EXISTS jjzx;
CREATE DATABASE jjzx CHARSET=UTF8;
USE jjzx;

/* 轮播列表 */
CREATE TABLE jj_carousel(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  href VARCHAR(255)
);
INSERT INTO jj_carousel VALUES(null,"http://127.0.0.1:3000/img/banner (1).jpg","/index");
INSERT INTO jj_carousel VALUES(null,"http://127.0.0.1:3000/img/banner (2).jpg","/index");
INSERT INTO jj_carousel VALUES(null,"http://127.0.0.1:3000/img/banner (3).jpg","/index");


/* 九宫格列表 */
CREATE TABLE jj_sudoku(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title VARCHAR(25),
  href VARCHAR(255)
);
INSERT INTO jj_sudoku VALUES(null,"http://127.0.0.1:3000/img/grid-05.png","免费设计","/design");
INSERT INTO jj_sudoku VALUES(null,"http://127.0.0.1:3000/img/grid-06.png","计算器","/calc");
INSERT INTO jj_sudoku VALUES(null,"http://127.0.0.1:3000/img/grid-07.png","装修公司","/products");
INSERT INTO jj_sudoku VALUES(null,"http://127.0.0.1:3000/img/grid-08.png","装修策略","/home");

/* 装修案例列表 */
CREATE TABLE jj_case(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title VARCHAR(255),
  sub_title VARCHAR(255),
  author VARCHAR(12),
  authorPic VARCHAR(255),
  heartCount   INT
);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (1).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","杜XX","http://127.0.0.1:3000/img/caser (1).jpg",560);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (2).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","林XX","http://127.0.0.1:3000/img/caser (2).jpg",360);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (3).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","张XX","http://127.0.0.1:3000/img/caser (3).jpg",860);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (4).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","李XX","http://127.0.0.1:3000/img/caser (4).jpg",160);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (5).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","曾XX","http://127.0.0.1:3000/img/designer (1).jpg",780);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (4)","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","王XX","http://127.0.0.1:3000/img/caser (3).jpg",590);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (1).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","杜XX","http://127.0.0.1:3000/img/caser (1).jpg",560);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (2).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","林XX","http://127.0.0.1:3000/img/caser (2).jpg",360);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (3).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","张XX","http://127.0.0.1:3000/img/caser (3).jpg",860);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (4).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","李XX","http://127.0.0.1:3000/img/caser (4).jpg",160);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (5).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","曾XX","http://127.0.0.1:3000/img/designer (1).jpg",780);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (4)","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","王XX","http://127.0.0.1:3000/img/caser (2).jpg",590);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (1).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","杜XX","http://127.0.0.1:3000/img/caser (1).jpg",560);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (2).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","林XX","http://127.0.0.1:3000/img/caser (2).jpg",360);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (3).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","张XX","http://127.0.0.1:3000/img/caser (3).jpg",860);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (4).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","李XX","http://127.0.0.1:3000/img/caser (4).jpg",160);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (5).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","曾XX","http://127.0.0.1:3000/img/designer (1).jpg",780);
INSERT INTO jj_case VALUES (null,"http://127.0.0.1:3000/img/case (4).jpg","东方新城1200平大宅 清雅奢华新中式风格","别墅|中式|500平米以上","王XX","http://127.0.0.1:3000/img/caser (3).jpg",590);

/* 装修公司列表 */
CREATE TABLE jj_company(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  name VARCHAR(255),
  title VARCHAR(255),
  addr VARCHAR(255)
);
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (1).jpg","名雕高端家装","装修案例：20套|设计团队:79人","广东省深圳市宝安区龙光世纪大道XXX");
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (2).jpg","志伟装饰","装修案例：30套|设计团队:98人","广东省深圳市宝安区龙光XX大道XXX");
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (3).jpg","创卫高端家居","装修案例：75套|设计团队:79人","广东省深圳市宝安区龙光世纪大道XXX");
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (4).jpg","圣都装饰","装修案例：20套|设计团队:79人","广东省深圳市宝安区龙光世纪大道XXX");
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (1).jpg","名雕高端家装","装修案例：20套|设计团队:79人","广东省深圳市宝安区龙光世纪大道XXX");
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (2).jpg","志伟装饰","装修案例：30套|设计团队:98人","广东省深圳市宝安区龙光XX大道XXX");
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (3).jpg","创卫高端家居","装修案例：75套|设计团队:79人","广东省深圳市宝安区龙光世纪大道XXX");
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (4).jpg","圣都装饰","装修案例：20套|设计团队:79人","广东省深圳市宝安区龙光世纪大道XXX");
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (1).jpg","名雕高端家装","装修案例：20套|设计团队:79人","广东省深圳市宝安区龙光世纪大道XXX");
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (2).jpg","志伟装饰","装修案例：30套|设计团队:98人","广东省深圳市宝安区龙光XX大道XXX");
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (3).jpg","创卫高端家居","装修案例：75套|设计团队:79人","广东省深圳市宝安区龙光世纪大道XXX");
INSERT INTO jj_company VALUES (null,"http://127.0.0.1:3000/img/company (4).jpg","圣都装饰","装修案例：20套|设计团队:79人","广东省深圳市宝安区龙光世纪大道XXX");

/* 装修设计师 */
CREATE TABLE jj_author(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  name VARCHAR(255),
  title VARCHAR(255),
  price VARCHAR(255)
);
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (1).jpg","测试者1","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (2).jpg","测试者2","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (3).jpg","测试者3","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (4).jpg","测试者4","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (1).jpg","测试者5","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (2).jpg","测试者6","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (3).jpg","测试者7","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (4).jpg","测试者8","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (1).jpg","测试者9","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (2).jpg","测试者10","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (3).jpg","测试者11","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");
INSERT INTO jj_author VALUES (null,"http://127.0.0.1:3000/img/designer (4).jpg","测试者12","设计理念:设计师就是要引领潮流、融入生活、设计灵感。不要为了设计而设计，而是为了高品质的生活，为了给居住者一个灵魂的栖息之所","面议");

/* 装修楼盘 */
CREATE TABLE  jj_house(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  title VARCHAR(255),
  addr VARCHAR(255)
);
INSERT INTO jj_house VALUES (null,"测试楼盘名1","装修案例|1套","龙华-大浪-布龙路");
INSERT INTO jj_house VALUES (null,"测试楼盘名2","装修案例|2套","龙华-大浪-布龙路");
INSERT INTO jj_house VALUES (null,"测试楼盘名3","装修案例|3套","龙华-大浪-布龙路");
INSERT INTO jj_house VALUES (null,"测试楼盘名4","装修案例|4套","龙华-大浪-布龙路");
INSERT INTO jj_house VALUES (null,"测试楼盘名5","装修案例|1套","龙华-大浪-布龙路");
INSERT INTO jj_house VALUES (null,"测试楼盘名6","装修案例|2套","龙华-大浪-布龙路");
INSERT INTO jj_house VALUES (null,"测试楼盘名7","装修案例|3套","龙华-大浪-布龙路");
INSERT INTO jj_house VALUES (null,"测试楼盘名8","装修案例|4套","龙华-大浪-布龙路");
INSERT INTO jj_house VALUES (null,"测试楼盘名9","装修案例|1套","龙华-大浪-布龙路");
INSERT INTO jj_house VALUES (null,"测试楼盘名10","装修案例|2套","龙华-大浪-布龙路");
INSERT INTO jj_house VALUES (null,"测试楼盘名11","装修案例|3套","龙华-大浪-布龙路");
INSERT INTO jj_house VALUES (null,"测试楼盘名12","装修案例|4套","龙华-大浪-布龙路");

/* 装修效果图 */
CREATE TABLE jj_draw(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title VARCHAR(24)
);
INSERT INTO jj_draw VALUES(null,"http://127.0.0.1:3000/img/case (1).jpg","北欧");
INSERT INTO jj_draw VALUES(null,"http://127.0.0.1:3000/img/case (2).jpg","美式");
INSERT INTO jj_draw VALUES(null,"http://127.0.0.1:3000/img/case (3).jpg","现代简约");
INSERT INTO jj_draw VALUES(null,"http://127.0.0.1:3000/img/case (4).jpg","新古典");
INSERT INTO jj_draw VALUES(null,"http://127.0.0.1:3000/img/case (5).jpg","别墅");
INSERT INTO jj_draw VALUES(null,"http://127.0.0.1:3000/img/case (6).jpg","两居");
INSERT INTO jj_draw VALUES(null,"http://127.0.0.1:3000/img/case (7).jpg","小户型");
INSERT INTO jj_draw VALUES(null,"http://127.0.0.1:3000/img/case (8).jpg","LOFT");
INSERT INTO jj_draw VALUES(null,"http://127.0.0.1:3000/img/case (9).jpg","吧台");
INSERT INTO jj_draw VALUES(null,"http://127.0.0.1:3000/img/case (10).jpg","餐厅");
#创建用户信息表
CREATE TABLE jj_users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(12),
  upwd VARCHAR(12),
  author VARCHAR(125)
);
#向用户信息表内插入数据
INSERT INTO jj_users VALUES(null,'dingding','123456','http://127.0.0.1:3000/img/designer (1).jpg');