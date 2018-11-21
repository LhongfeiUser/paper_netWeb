<template>
  <div>
    <p>
      修改技巧一，论文抄袭检测系统最好能够和你现在所用的论文查重系统保持一致，这样，自己的论文检测结果就不会和学校的论文检测结果相差太大，最多只是一点点的“误差”。如果贸然选择检测系统，一旦和学校的不一致，那就极有可能造成论文重复比的结果数据不一样。
    </p>
    <p>
      修改技巧二，明确学校的要求。比如，学校对论文的格式要求，如果在检测之后再对论文格式进行大改动，很可能会影响到检测结果。因为论文抄袭检测系统对论文的抄袭是根据其阀值的设置，而格式的改变必定会改变原来的阀值。还有就是，学校要求论文的重合率是多少?例如，学校的要求是重复比低于20%的话，而你的论文检测结果在远在10%以下，一般即使再经检测都没问题的。如果是15%，而你的论文检测结果是14%的话，就必须进行修改。
    </p>
  </div>
</template>

<script>
  import {getFaqDetail} from "@/api/getDetail";

  export default {
    data() {
      return {}
    },
    created() {
      this.getFaqList()
    },
    methods: {
      getFaqList() {
        const faqDetail = {
          token: 'meichenghuilian20181108',
          detail_id: 2,
        };
        getFaqDetail(faqDetail).then(res => {
          console.log(res);
        })
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
