import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试string
const pycode = String.raw `
s = "今天\
你真好看"
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
})