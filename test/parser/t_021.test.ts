import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// class_def
const pycode = `\
class A():
    pass

class B(A):
    pass

@decorator0
class C(A):
    pass
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})