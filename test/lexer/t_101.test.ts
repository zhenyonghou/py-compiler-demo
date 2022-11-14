import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// 测试换行&缩进
const pycode = `\
def my_func(a, b, c):
    if a > b:
        return {"value": "a"
    
    return None
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeTruthy()
})