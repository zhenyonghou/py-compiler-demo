import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// if语句
const pycode = `\
a = 100
if a == 0:
    pass
elif a == 10:
    pass
else:
    pass
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})