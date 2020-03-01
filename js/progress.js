let data = [
  {
    name: "根节点1", percent: "63",
    chileNode: [
      {
        name: '二级节点1',
        percent: 70
      },
      {
        name: '二级节点2',
        percent: 40
      }
    ]
  },
  {
    name: "根节点2", percent: "45",
    chileNode: [
      {
        name: '二级节点1',
        percent: 60
      },
      {
        name: '二级节点2',
        percent: 35
      }
    ]
  },
  {
    name: "根节点3", percent: "45",
    chileNode: [
      {
        name: '二级节点1',
        percent: 60
      },
      {
        name: '二级节点2',
        percent: 35
      }
    ]
  },
  {
    name: "根节点4", percent: "45",
    chileNode: [
      {
        name: '二级节点1',
        percent: 60
      },
      {
        name: '二级节点2',
        percent: 35
      }
    ]
  },
  {
    name: "根节点5", percent: "45",
    chileNode: [
      {
        name: '二级节点1',
        percent: 60
      },
      {
        name: '二级节点2',
        percent: 35
      }
    ]
  },
  {
    name: "根节点6", percent: "45",
    chileNode: [
      {
        name: '二级节点1',
        percent: 60
      },
      {
        name: '二级节点2',
        percent: 35
      }
    ]
  },
  {
    name: "根节点7", percent: "45",
    chileNode: [
      {
        name: '二级节点1',
        percent: 60
      },
      {
        name: '二级节点2',
        percent: 35
      }
    ]
  },
];
function dealData(data) {
  let deal = []
  data.forEach((cate, index) => {
    let num = 3
    let indexMore = index + 1
    if (index && indexMore % num == 0) {
      deal.push(data.slice(indexMore - num, indexMore))
    } else if (indexMore === data.length) {
      let pre = indexMore < num ? 0 : index - (index % num)
      deal.push(data.slice(pre, indexMore))
    }
  })
  return deal
};
function dealColor(plan) {
  let progressColors = [
    { name: '未开始', color: '#d6d6d6' },
    { name: '进行中', color: '#4279FF' },
    { name: '已完成', color: '#7CCAB0' },
    { name: '轻度延误', color: '#FFCA36' },
    { name: '中度延误', color: '#FF9536' },
    { name: '重度延误', color: '#FF3695' }
  ];
  let percent = plan.percent
  if (percent == 0) {
    plan.color = progressColors[0].color
  } else if (percent == 100) {
    plan.color = progressColors[1].color
  } else if (percent > 80) {
    plan.color = progressColors[2].color
  } else if (percent > 40) {
    plan.color = progressColors[3].color
  } else {
    cs
    plan.color = progressColors[4].color
  }
};
console.log(dealData(data)[0][0].chileNode);