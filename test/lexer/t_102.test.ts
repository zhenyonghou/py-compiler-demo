import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// 测试换行&缩进
const pycode = `\
def my_func(a, b, c):
    return [
        a, b, c
    
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeTruthy()
})