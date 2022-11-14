import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// raise_stmt
const pycode = `\
x = 10
if x > 5:
    raise Exception('x 不能大于 5。x 的值为: {}'.format(x))
if x > 6:
    raise
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})