import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// import_stmt
const pycode = `\
import time
import math, random
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})