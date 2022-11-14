import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试换行
const pycode = `
a = 1
b = 2
c = a +\\ 
b
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeTruthy()
})