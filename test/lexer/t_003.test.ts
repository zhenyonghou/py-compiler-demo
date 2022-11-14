import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试末尾空行和空格
const pycode = `\
a = 99
if a > 0:
    b = 0

    b +=1

    
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
})