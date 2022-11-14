import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试string
const pycode = `
s = '''
字母'A'的ascii码是？ 
'''
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
})