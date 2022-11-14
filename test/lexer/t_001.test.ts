import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 普通测试
const pycode = `\
a = 0
b = 1
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
})