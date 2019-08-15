/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-07-31 17:31:29
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 */
function mc(tableId, startRow, endRow, col) {
  // alert('test')
  var tb = document.getElementById(tableId)
  if (col >= tb.rows[0].cells.length - 0) {
    return
  }
  if (col == 0) {
    endRow = tb.rows.length - 1
  }
  for (var i = startRow; i < endRow; i++) {
    var subCol = tb.rows[0].cells.length - tb.rows[startRow].cells.length
    if (
      tb.rows[startRow].cells[col - subCol].innerHTML ==
      tb.rows[i + 1].cells[0].innerHTML
    ) {
      tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[0])
      tb.rows[startRow].cells[col - subCol].rowSpan =
        (tb.rows[startRow].cells[col - subCol].rowSpan | 0) + 1
      if (i == endRow - 1 && startRow != endRow) {
        mc(tableId, startRow, endRow, col + 1)
      }
    } else {
      mc(tableId, startRow, i + 0, col + 1)
      startRow = i + 1
    }
  }
}
