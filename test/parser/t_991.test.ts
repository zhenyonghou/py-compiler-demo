import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

const pycode = `\
"""
排序算法汇总
排序算法可以分为内部排序和外部排序，内部排序是数据记录在内存中进行排序，
而外部排序是因排序的数据很大，一次不能容纳全部的排序记录，在排序过程中需要访问外存。
常见的内部排序算法有：插入排序、希尔排序、选择排序、冒泡排序、归并排序、快速排序、堆排序、基数排序等。
1、平方阶 (O(n2)) 排序 各类简单排序：直接插入、直接选择和冒泡排序。
2、线性对数阶 (O(nlog2n)) 排序 快速排序、堆排序和归并排序。
3、O(n1+§)) 排序，§ 是介于 0 和 1 之间的常数。 希尔排序。
4、线性阶 (O(n)) 排序 基数排序，此外还有桶、箱排序。
"""
arr0 = [3,44,38,5,47,15,36,26,27,44,46,4,19,50,48]

#冒泡排序
def bubbleSort(arr):
    for i in range(1,len(arr)):
        for j in range(0,len(arr)-i):
            if arr[j]>arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

arr1 = bubbleSort(arr0)
print("冒泡排序 arr1 =",arr1)

`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})