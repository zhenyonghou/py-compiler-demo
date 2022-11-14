import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// while_stmt
const pycode = `\
while True:
    break
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})