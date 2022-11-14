import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试string
const pycode = String.raw `
s = "字符串意外换行
b = s
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeTruthy()
})