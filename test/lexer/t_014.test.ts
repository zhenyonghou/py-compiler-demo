import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试函数
const pycode = `print()`


test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
})