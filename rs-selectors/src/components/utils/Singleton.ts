class Singleton {
    private static instance: { [key: string]: object } = {};

    public static getInstance<T extends object>(constructor: new () => T): T {
        const className: string = constructor.name;
        if (!Singleton.instance[className]) {
            Singleton.instance[className] = new constructor();
        }
        return Singleton.instance[className] as T;
    }
}

export default Singleton;
