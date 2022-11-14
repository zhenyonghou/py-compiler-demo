import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试number
const pycode = `
a = 0xFF
b = 0X01A
c = 0.0001
d = .1
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
})