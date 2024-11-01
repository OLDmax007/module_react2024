interface IId {
    uniqueId: number
}

const toCreateUniqeIdForItem = <T extends IId>(arr: T[]) => {
    arr.forEach((item: T, index: number) => {
        item['uniqueId'] = index + 1;
    });
}


const toFindLastIndex = <T extends IId>(arr: T[]): { arr: T[] } | number | null => {
    if (arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1].uniqueId;

};

const isFinalIndex = <T extends IId>(arr:T[], total:number): boolean => {
    if (arr.length === 0) {
        return true;
    }

    const lastIndex = toFindLastIndex(arr);
    return lastIndex !== null && lastIndex >= total;
}


export { isFinalIndex, toCreateUniqeIdForItem };

