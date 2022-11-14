import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// try_stmt
const pycode = `\
try:
    a = 100 / 0
finally:
    print("finally")

try:
    a = 100 / 0
except:
    print("except")
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})