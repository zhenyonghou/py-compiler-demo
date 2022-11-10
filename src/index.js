import PC from '../lib/PC.js'

export const pycode = `\
a = 1 + 2

`

window.onload = () => {
    console.log('PC:', PC)

    const compiler = new PC.Compiler()
    console.log('code:', pycode)
    console.log('compiler:', compiler)
    const ast = compiler.parse(pycode)
    console.log('ast:', ast)
}

// window.onload = () => {
//     import("../lib/PC.js").then((module: any) => {
//         console.log('code:', pycode)
//         const pc = new module.default.Compiler()
//         const ast = pc.parse(pycode)
//         if (pc.hasError()) {    // 检查编译错误
//             const errList = pc.dumpError()
//             errList.forEach((i: any) => {
//                 console.info(i)
//             })
//         }

//         if (ast == null) {
//             return
//         }
//         console.log('ast:', ast)

//         const symbols = pc.getSymbolTable().match("a", 3, 1)
//         console.log("symbols:", symbols)
//     })
// }