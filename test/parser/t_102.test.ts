import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// del_stmt
const pycode = `\
objA = {
    "attr": "A"
}
objB = {
    "attr": "B"
}
objC = {
    "attr": "C"
}
objD = {}
objE = ()
objF = []
del objA.attr, objB['attr'], objC
del (objC, objE, objF)
del (objA.attr, objB['attr'], objC)
del [objA.attr, objB['attr'], objC]
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})