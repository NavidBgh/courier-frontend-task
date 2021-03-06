export const getAllTransactionData = (data: any[]): any[] => {
    const groups = data.reduce((groups, transaction) => {
        const date = transaction.date?.split('T')[0];
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(transaction);
        return groups;
    }, {});

    const groupArrays = Object.keys(groups).map((date) => {
        return {
            date,
            transactions: groups[date].sort((a: any, b: any) => Date.parse(b.date) - Date.parse(a.date))
        };
    });

    const result: any = [];
    groupArrays.forEach((groupObj: { date: string, transactions: any[] }) => {
        result.push({ date: groupObj.date, type: 'date' });
        groupObj.transactions.forEach(transaction => {
            result.push(transaction);
        });
    });

    return result;
}

export const filterTransactions = (data: any[], filterType: string, searchValue: string = ''): any[] => {
    const arrayReturned = data.filter((el: any) => {
        if (filterType === 'search') {
            return el.driver?.includes(searchValue);
        } else {
            return el.type === filterType;
        }
    });
    // const arrayReturned = data.map(element =>
    //     element.transactions?.filter((el: any) => {
    //         if (filterType === 'search') {
    //             return el.driver?.includes(searchValue);
    //         } else {
    //             return el.type === filterType;
    //         }
    //     })
    // );

    // let result: any[] = [];
    // arrayReturned.forEach((element) => {
    //     element.forEach((el: any) => {
    //         result.push(el)
    //     });
    // });

    return getAllTransactionData(arrayReturned);
}