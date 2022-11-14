import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试纯空格
const pycode = `\
      
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
})