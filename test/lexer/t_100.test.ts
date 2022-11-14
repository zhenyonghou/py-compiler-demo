import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// 测试换行&缩进
const pycode = `\
objA = {
    "attr": "A",
    "members": {
        "p1": 1,
        "p2": 2
    }
}

arr = [
    "h",
    ["e", "l"]
]

l = ("h",
"e")
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
})