import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// 算术运算符
export const pycode = `\
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