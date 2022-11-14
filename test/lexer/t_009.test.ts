import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试空格
const pycode = `\

a = 1

 b = 1
`


test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeTruthy()
})