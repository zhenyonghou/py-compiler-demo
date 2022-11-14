import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// for_stmt
const pycode = `\
arr = [0,]
for i in arr:
    pass
else:
    s = "hi"
    print(s)

async for j in arr:
    pass
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})