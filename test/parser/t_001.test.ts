import PC from '../../lib/PC.esm.js'
import {expect, test} from '@jest/globals'
// function_def_raw
const pycode = `\
def func1(): return 1

def func2():
    return 2
    
@func_decorator1
@func_decorator2
def func3():
    return 0
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})