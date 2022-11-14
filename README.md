# py-lang

#### PC.xxx.js
> PC是Python Compiler的缩写，将源代码编译为ast，这个库严格解析Python3.10语法，集成了词法分析-语法分析-语义分析

#### PI.xxx.js (过段时间放出)
> PI是Python Interpreter的缩写，解释执行ast, 配合PC.xxx.js使用.

### 特性
- 完全前端实现，不依赖服务端
- 100%覆盖Python3.10语法，轻松集成到任何编辑器
- 线上应用: https://editor.imwatt.com
- 使用中遇到问题可联系我, 微信: mumuhou001, 邮箱mumuhou001@gmail.com

### 如何使用
- 由于接口使用很简单，所以这个Demo里并没有集成编辑器。
- library位置: /lib/PC.xxx.js，提供了esm, umd, cjs三种格式，推荐esm和umd，区别及加载方式请自行搜索。
- Demo看这里: /src/index.ts

### 运行Demo
1. npm run start
2. 然后打开http://localhost:8203/
3. 打开浏览器的控制台，查看运行信息

### 运行test case
- npm run test

## 接口文档
### Compiler类
```typescript
class Compiler {
    /**
     * 重置, 该方法会清空compiler对象内部的编译结果，错误信息等数据。
     * 调用时机: 当编辑器清空代码时调用。
     */
    reset()

    /**
     * 编译
     * @param code 代码字符串
     * @returns 语法树结构
     */
    parse(code: string): ast.AST

    /**
     * 得到符号表，调用parse方法之后调用
     * @returns SymbolTable对象
     */
    getSymbolTable(): SymbolTable
    /**
     * 判断是否有编译错误
     * 调用时机: 在调用parse之后调用该函数
     */
    hasError(): boolean

    /**
     * 获得编译时的错误信息
     * @returns ErrorItem数组
     */
    dumpError(): ErrorItem[] {
        return errCollector.flatten()
    }
}

```

### Compiler类相关的结构体
```typescript
interface ErrorItem {
    type: ErrorType     // 错误类型，枚举类型
    msg: string         // 错误信息
    pos: Position       // 错误出现的位置
}

enum ErrorType {
    Lexical = 0,    // 词法错误
    Syntactical,    // 语法错误
    Semantical,     // 语义错误
    Logical         // 代码逻辑有错误(目前还不支持检测该类型的错误)
}

export interface Position {
    line: number,
    column: number
}
```

### SymbolTable类
```typescript
class SymbolTable {
    /**
     * 从符号表中搜索指定前缀的符号，用于在输入代码过程中做自动完成、提醒。
     * @param prefix 符号的前缀，比如传入"p"时，就匹配到"pos", "Person"等符号
     * @param line 光标所在的行号
     * @param column 光标所在的列号
     * @returns McSymbol数组
     */
    match(prefix: string, line: number, column: number): McSymbol[]
}

```

### SymbolTable类相关的结构体
```typescript
interface McSymbol {
    type: SymbolType    // 符号类型, 枚举
    name: string        // 符号名
    
    builtin: boolean    // 是否是Python内置符号
}

export enum SymbolType {
    Any = 0,
    Number = 1,
    Boolean,
    String,
    List,
    Tuple,
    Dict,
    Set,
    Object,
    Function,
    Class,
}

// SymbolType的描述
export const SymbolTypeNames: string[] = [
    "任意类型",
    "Number类型",
    "Boolean类型",
    "String类型",
    "List类型",
    "Tuple类型",
    "Dict类型",
    "Set类型",
    "对象",
    "函数类型",
    "Class类型",
]

```