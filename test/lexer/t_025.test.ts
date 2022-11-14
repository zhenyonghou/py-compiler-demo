import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试非法字符

const pycode = `
名字 = ”houzy“
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeTruthy()
})