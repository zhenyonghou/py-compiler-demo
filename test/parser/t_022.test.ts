import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// with_stmt
const pycode = `\
A = 10
B = 100
with A > B:
    pass
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})