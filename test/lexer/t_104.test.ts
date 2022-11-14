import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

const pycode = `\
def my_func(a, b, c):
    la = (
        a, b, c)
    )
    lb = [
        a, b, c]
    ]
    lc = {"a": a, "b": "b1": 1}}
    
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeTruthy()
})