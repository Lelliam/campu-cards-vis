 
## Data Visualization System

![](client/src/assets/system.png)

### 环境配置

> 1.安装git、nodejs、WebStorm

> 2.克隆项目

> 3.安装MySQL并配置数据库，数据在server/public/dataset，把数据导入数据库

> 4.进入控制台终端，在项目server下执行`npm install`安装依赖

> 5.进入控制台终端，在项目client下执行`npm install`安装依赖

> 6.在server目录下执行`npm start`启动服务器,在client目录下执行`npm run dev`启动客户端

### 数据信息
 
![image_1](client/src/assets/image_1.png)
![image](client/src/assets/image.png)
![image_2](client/src/assets/image_2.png)

### 分析任务

（1）分析不同专业、不同性别学生消费行为特点与时空偏好；
- 行为特点（消费综合情况）早/中/晚/日/周/月/周末
- 时空偏好（就餐时间和地点）/超市/食堂/Other/时变趋势

（2）评估各食堂的运营状况，为食堂运营提供建议
- 运营情况（各食堂综合消费）消费类型、运营时间、对比分析
- 提供建议（合理定价、运营时间等）

（3）挖掘学生消费特征与日常行为轨迹的关联关系；
- 关联关系（上课、晨练、）结合门禁数据
- 产生消费的原因分析

（4）探索低消费学生群体的行为特征，为学校助学金评定提供参考建议
- 消费群体分类（分类依据？聚类分类）
- 低消费群体识别（三餐不足、消费低于平均、余额偏低、超市消费少等）

 +（5）每个人综合消费情况
-	消费习惯
-	异常检测

