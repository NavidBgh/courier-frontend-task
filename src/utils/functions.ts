export const getAllTransactionData = (data: any[]): any[] => {
    // this gives an object with dates as keys
    const groups = data.reduce((groups, transaction) => {
        const date = transaction.date?.split('T')[0];
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(transaction);
        return groups;
    }, {});

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
        return {
            date,
            transactions: groups[date].sort((a: any, b: any) => Date.parse(b.date) - Date.parse(a.date))
        };
    });

    return groupArrays;
}

export const filterTransactions = (data: any[], filterType: string): any[] => {
    const result = data.map(element =>
        element.transactions?.filter((el: any) => (
            el.type === filterType
        ))
    );
    return result;
}