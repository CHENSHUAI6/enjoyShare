// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
const db = cloud.database()
const MAX_LIMIT = 100
const _ = db.command
exports.main = async(event, context) => {
  // 先取出集合记录总数
  const countResult = await db.collection('sap_dataset').count()
  const total = countResult.total
  // 计算需分几次取
  const batchTimes = Math.ceil(total / 100)
  // 承载所有读操作的 promise 的数组
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection('sap_dataset').skip(i * MAX_LIMIT).limit(MAX_LIMIT).where(_.or([{
        //使用正则查询，实现对搜索的模糊查询
        module: {
          $regex: '.*' + event.search + '.*',
          //从搜索栏中获取的value作为规则进行匹配。
          $options: 'i',
          //大小写不区分
        },
      },
      {
        //使用正则查询，实现对搜索的模糊查询
        table_name: {
          $regex: '.*' + event.search + '.*',
          //从搜索栏中获取的value作为规则进行匹配。
          $options: 'i',
          //大小写不区分
        },
      },
      {
        //使用正则查询，实现对搜索的模糊查询
        desctibe: {
          $regex: '.*' + event.search + '.*',
          //从搜索栏中获取的value作为规则进行匹配。
          $options: 'i',
          //大小写不区分
        },
      }
    ])).get()
    tasks.push(promise)
  }
  // 等待所有
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })
}