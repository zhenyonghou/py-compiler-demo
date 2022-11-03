
import {pycode} from './t_001'

export const start = () => {
    // 异步加载，需要在tsconfig.json里设置"module": "esnext", 也可以同步加载。
    import("../../lib/PC.js").then((module: any) => {
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

        const symbols = pc.getSymbolTable().match("a", 3, 1)
        console.log("symbols:", symbols)
    })
}