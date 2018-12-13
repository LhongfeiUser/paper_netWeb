<template>
  <div class="rightFooter">
    <h3 class="rtfooter_til ">论文检测报告须知</h3>
    <ul>
      <li><span class="label bg-info">多订单号取报告</span> 如是合并订单检测，填写其中任何一个订单号即可下载。</li>
      <li><span class="label bg-success">如何修改论文？</span> 可根据报告标红去修改，如报告中含修改秘籍，可以参考。</li>
      <li><span class="label bg-warning">要严格OR要准确 </span> 严格＝准确，这是对报告结果的认识误区，严格并不一定准确，很多同学喜欢严格，而不问准确性。</li>
      <li><span class="label bg-danger">0相似度正常吗？</span>如检测结果为0，说明官网检测结果也是0，并非未检测，并非不准。只能说明你的论文在该检测系统的比对库里中没有重复的，即使你去官网检测也是这个结果。
      </li>
      <li><span class="label bg-primary">定稿如何选系统</span>不同的检测系统，使用不同论文对比库，所以检测结果极少有相同的。您学校用什么系统来审核论文，选择和学校同样的检测系统，检测结果和学校是一样的，不同的检测系统的检测结果是不一样的！
      </li>
      <li><span class="label bg-info">检测内容的标准</span>有些学校只测正文，有些测正文和参考文献，有些甚至连声明、致谢都测。学校测的内容一旦有差异，结果就有少许差异。但是如果你提交检测的论文和提交给学校一样，没有任何改动，那么结果是一样的。
      </li>
      <li><span class="label bg-success">正品检测报告！</span>请不要以"准"或"不准"等词语中差评，因为我们的系统直通检测官网，是从官方下载的报告，如有任何的疑问可联系店家解决。
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "report_notice"
    }
</script>

<style scoped lang="scss">
  .rightFooter {
    width: 100%;
    background: #f8f8f8;
    padding: 28px 0 95px 0;
    .rtfooter_til {
      margin-left: 28px;
      padding-left: 35px;
      background: url(../../../assets/images/inform.png) left center no-repeat;
      font-size: 18px;
      color: #666666;
      height: 20px;
      line-height: 20px;
    }
    ul {
      margin: 25px 0 0 30px;
      li {
        color: #878787;
        font-size: 15px;
        line-height: 28px;
        margin-bottom: 10px;
        padding-left: 160px;
        padding-right: 7%;
        position: relative;
        text-align: justify;
        span {
          display: inline-block;
          width: 140px;
          height: 22px;
          text-align: center;
          line-height: 22px;
          color: #fff;
          font-size: 14px;
          border-radius: 5px;
          padding: 0 13px;
          margin: 0;
          position: absolute;
          left: 0;
        }
      }
    }
  }
</style>
