import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// yield_stmt
const pycode = `\
def foo():
    i = 0
    while i < 3:
        i += 1
        res = yield i
        print("res:",res)
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})