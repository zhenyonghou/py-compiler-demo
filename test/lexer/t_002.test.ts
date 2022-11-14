import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// 测试空行
const pycode = `\
a = 99
if a > 0:

    if a > 10:
                    
        if a > 20:
        


            if a > 30:
                pass
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
})