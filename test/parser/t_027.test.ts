import PC from '../../lib/PC.esm'
import {expect, test} from '@jest/globals'
// match_stmt
const pycode = `\
def http_error(status):
    match status:
        case 400:
            return 'Bad request'
        case _:
            return 'Unknown status code'

number = 0
match number:
    case 0:
        print('zero')
    case 1:
        print('one')
    case 2:
        print('two')
        
`

test("", () => {
    const compiler = new PC()
    const ast = compiler.parse(pycode)

    expect(compiler.hasError()).toBeFalsy()
    expect(ast).toBeTruthy()
})