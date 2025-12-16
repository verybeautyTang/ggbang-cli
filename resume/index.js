// 用尽可能少的代码实现一个函数，用于计算用户一个月共计交费多少港元（代码请清晰简洁，我们希望能看到你的编码风格和习惯）。
// 用户在富途平台上进行交易，需要交平台使用费。平台使用费的梯度收费方案如下：
// 每月累计 订单数      每笔订单（港元）
// 梯度1：  1-5笔         30元
// 梯度2：  6-20笔        15元
// 梯度3：  21-50笔       10元
// 梯度4：  51-100笔      9元
// 梯度5：  101-500笔     8元
// 梯度6：  501-1000笔    7元
// 梯度7：  1001-2000笔   6元
// 梯度8：  2001-3000笔   5元
// 梯度9：  3001-4000笔   4元
// 梯度10： 4001-5000笔   3元
// 梯度11： 5001-6000笔   2元
// 梯度12： 6001笔以上    1元

// 假设一个用户，一个月交易了6笔订单，则在梯度1交费共计：30港元 * 5 = 150港元，在第二梯度交费：15港元，一共交费165港元。

///6 -> 165;
// 30 -> 475
// 3888 -> 22377
// 12345 -> 34170
// function fee(orderNum) {
//   let feeCount = 0
//   let tempOrder = orderNum
//   if (tempOrder > 0) {
//     if (tempOrder > 6000) {
//       feeCount += (tempOrder - 6000) * 1
//       tempOrder = tempOrder - (tempOrder - 6000)
//     }
//     if (tempOrder > 5000 && tempOrder <= 6000) {
//       feeCount += (tempOrder - 5000) * 2
//       tempOrder = tempOrder - (tempOrder - 5000)
//     }
//     if (tempOrder > 4000 && tempOrder <= 5000) {
//       feeCount += (tempOrder - 4000) * 3
//       tempOrder = tempOrder - (tempOrder - 4000)
//     }
//     if (tempOrder > 3000 && tempOrder <= 4000) {
//       feeCount += (tempOrder - 3000) * 4
//       tempOrder = tempOrder - (tempOrder - 3000)
//     }
//     if (tempOrder > 2000 && tempOrder <= 3000) {
//       feeCount += (tempOrder - 2000) * 5
//       tempOrder = tempOrder - (tempOrder - 2000)
//     }
//     if (tempOrder > 1000 && tempOrder <= 2000) {
//       feeCount += (tempOrder - 1000) * 6
//       tempOrder = tempOrder - (tempOrder - 1000)
//     }
//     if (tempOrder > 500 && tempOrder <= 1000) {
//       feeCount += (tempOrder - 500) * 7
//       tempOrder = tempOrder - (tempOrder - 500)
//     }
//     if (tempOrder > 100 && tempOrder <= 500) {
//       feeCount += (tempOrder - 100) * 8
//       tempOrder = tempOrder - (tempOrder - 100)
//     }
//     if (tempOrder > 50 && tempOrder <= 100) {
//       feeCount += (tempOrder - 50) * 9
//       tempOrder = tempOrder - (tempOrder - 50)
//     }
//     if (tempOrder > 20 && tempOrder <= 50) {
//       feeCount += (tempOrder - 20) * 10
//       tempOrder = tempOrder - (tempOrder - 20)
//     }
//     if (tempOrder > 5 && tempOrder <= 20) {
//       feeCount += (tempOrder - 5) * 15
//       tempOrder = tempOrder - (tempOrder - 5)
//     }
//     if (tempOrder <= 5) {
//       feeCount += tempOrder * 30
//       tempOrder = 0
//     }
//   }
//   return feeCount
// }
// console.log(fee(12345))

const nodeList = [
  { id: 12, pay: 1, min: 6000 },
  { id: 11, pay: 2, min: 5000, max: 6000 },
  { id: 10, pay: 3, min: 4000, max: 5000 },
  { id: 9, pay: 4, min: 3000, max: 4000 },
  { id: 8, pay: 5, min: 2000, max: 3000 },
  { id: 7, pay: 6, min: 1000, max: 2000 },
  { id: 6, pay: 7, min: 500, max: 1000 },
  { id: 5, pay: 8, min: 100, max: 500 },
  { id: 4, pay: 9, min: 50, max: 100 },
  { id: 3, pay: 10, min: 20, max: 50 },
  { id: 2, pay: 15, min: 5, max: 20 },
  { id: 1, pay: 30, max: 5, min: 0 },
]
function fee(orderNum) {
  let feeCount = 0
  let tempOrder = orderNum
  for (let i = 0; i < 12; i++) {
    getCount(nodeList[i], tempOrder)
  }
  function getCount(node, count) {
    if (node.min > tempOrder && tempOrder > 0) return
    feeCount += (count - node.min) * node.pay
    tempOrder = count - (tempOrder - node.min)
  }
  return feeCount
}

console.log(fee(12345))
