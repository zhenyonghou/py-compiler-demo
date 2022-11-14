import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// async

const pycode = `\
@func_decorator
async def func1():
    return 0
`
test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})