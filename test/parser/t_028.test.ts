import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'

// match_stmt
const pycode = `\
def Point(x, y):
    pass

def Point2(x, y):
    pass

def or_pattern(obj):
    match obj:
        case 0 | 1 | 2: # 0,1,2三个数字匹配
            print('small number')
        case list() | set():  # 列表或者集合匹配
            print('list or set')
        case str() | bytes():  # 字符串或者bytes符合
            print('str or bytes')
        case Point(x, y) | Point2(x, y):  # 借用之前的2个类，其中之一符合即可
            print('{x=},{y=}')
        case [x] | x:  # 列表且只有一个元素或者单个值符合
            print('{x=}')
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})