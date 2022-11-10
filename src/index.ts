export const pycode = `\
a = 1 + 2

`

window.onload = () => {
    import("../lib/PC.js").then((module: any) => {
        const pc = new module.default.Compiler()
        const ast = pc.parse(pycode)
        if (pc.hasError()) {    // 检查编译错误
            const errList = pc.dumpError()
            errList.forEach((i: any) => {
                console.info(i)
            })
        }

        if (ast == null) {
            return
        }
        console.log(ast)

        const symbols = pc.getSymbolTable().match("a", 3, 1)
        console.log("symbols:", symbols)
    })
}