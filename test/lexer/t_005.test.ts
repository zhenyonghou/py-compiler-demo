import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试开头空行
const pycode = `\


# 注释
a = 1
b = 1
`


test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
})