export function objToString<T extends object>(obj:T):string[] {
    return Object.values(obj).map((value) => {
        if(typeof value == "object") {
            return objToString(value)
        }
        return value.toString()
    })
}