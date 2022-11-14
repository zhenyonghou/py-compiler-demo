import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// for_stmt
const pycode = `\
items = [0, 100]
for i in items:
    if i > 0 and not (i == 60):
        print(i)
    else:
        continue
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})