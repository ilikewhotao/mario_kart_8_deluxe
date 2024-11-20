<script setup lang="ts"></script>

<template>
  <n-alert title="往期活动" type="info">
    <n-a href="https://ilikewhotao.github.io/splatoon/dist/" target="_blank">
      斯普拉遁 - 小白杯
    </n-a>
  </n-alert>
  <n-h3 prefix="bar"> 活动报名 </n-h3>
  <n-p> 需要玩家提供好友编号、游戏名称。（活动期间尽量不要修改游戏名称） </n-p>

  <n-divider />
  <n-h3 prefix="bar"> 活动时间 </n-h3>
  <n-ul>
    <n-li> 开始时间：2024-11-23（周六）</n-li>
    <n-li> 结束时间：2024-12-13（周五）</n-li>
  </n-ul>

  <n-divider />
  <n-h3 prefix="bar"> 活动内容 </n-h3>
  <n-ul>
    <n-li> 需要提前报名的玩家才能够参加本次活动 </n-li>
    <n-li> 一场比赛分为4局对战，游戏采用150cc，地图采用随机，车辆不限 </n-li>
    <n-li>
      每场比赛需要至少有9名玩家才能够开始比赛，并且比赛最终结算时玩家数不少于9名，中途不允许额外玩家加入补位等
    </n-li>
  </n-ul>

  <n-divider />
  <n-h3 prefix="bar"> 注意事项 </n-h3>
  <n-ul>
    <n-li> 禁止选择随机以外地图 </n-li>
    <n-li> 禁止一场比赛中途加入补位 </n-li>
    <n-li> 禁止使用未报名的账号参与活动 </n-li>
  </n-ul>
  <n-p> 包括但不限以上情况，如有发现对局视为无效；情节严重者取消资格。 </n-p>

  <n-divider />
  <n-h3 prefix="bar"> 记分规则 </n-h3>
  <n-ul>
    <n-li> 有效对局每人基础分 +1 </n-li>
    <n-li>
      单场排名第1追加
      <n-tag :bordered="false" type="error" size="small"> 🥇+4 </n-tag> 金牌分
    </n-li>
    <n-li>
      单场排名第2追加
      <n-tag :bordered="false" type="warning" size="small"> 🥈+3 </n-tag> 银牌分
    </n-li>
    <n-li>
      单场排名第3追加
      <n-tag :bordered="false" type="info" size="small"> 🥉+2 </n-tag> 铜牌分
    </n-li>
    <n-li>
      单场排名第4-9追加
      <n-tag :bordered="false" type="success" size="small"> 🍀+6 </n-tag>
      随机幸运分
    </n-li>
    <n-li>
      单场排名第10-12追加
      <n-tag :bordered="false" type="default" size="small"> 🍄+1 </n-tag> 鼓励分
    </n-li>
  </n-ul>
  <n-p>
    如果存在玩家掉线，导致游戏结算时玩家数少于9名或中途有玩家加入，本场比赛都视为无效。
  </n-p>
  <n-p> 最终会从玩家所有比赛中随机选出10局，合计得出最终得分。 </n-p>

  <n-divider />
  <n-h3 prefix="bar"> 活动奖励 </n-h3>
  <n-p> 本活动由 <n-text type="success"> 小白 </n-text> 独家赞助💰 </n-p>
  <n-ul>
    <n-li> 累计得分第1名 💰60元* </n-li>
    <n-li> 累计得分第2名 💰40元 </n-li>
    <n-li> 累计得分第3名 💰20元 </n-li>
    <n-li> 累计得分第4-10名 💰10元 </n-li>
  </n-ul>
  <n-p>
    * 第1名可额外获得由
    <n-text type="success"> 汐岚 </n-text>
    独家赞助刻有自定义字符或图案的3D打印手办一个
  </n-p>
</template>
