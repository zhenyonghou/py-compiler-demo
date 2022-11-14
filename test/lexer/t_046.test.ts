import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// 测试换行&缩进
const pycode = `\
class QuickSort(object):
    # 升序
    def sort_asc(self, arr=None):
        key = arr[0]
        for i in arr[1:]:
            pass
        return None
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
})