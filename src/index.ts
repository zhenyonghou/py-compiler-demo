import PC from '../lib/PC.esm.js'

export const pycode = `\
a = 1 + 2
arr = [a, b
`

window.onload = () => {
    console.log('PC:', PC)

    const compiler = new PC()
    console.log('code:', pycode)
    const ast = compiler.parse(pycode)
    if (compiler.hasError()) {    // 检查编译错误
        const errList = compiler.dumpError()
        errList.forEach((i: any) => {
            console.info(i)
        })
    }
    console.log('ast:', ast)
}