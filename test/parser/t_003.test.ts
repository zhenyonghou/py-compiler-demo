import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 参数
const pycode = `\
def func(a, b):
    return a + b

def func2(a, b, c=100):
    return a + b
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})