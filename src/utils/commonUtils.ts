export const currencyList = (list: Array<any>) => {
    return list.map(e => Object.values(e).join(' - '));
};

export const infoNeeded = (data: any) => {
    const currencies = Object.values(data?.currencies);
    return [
        { title: 'Capital', value: data?.capital[0] },
        { title: 'Population', value: data?.population },
        { title: 'Area (in miles and kilometres)', value: data?.area },
        { title: 'Timezone(s)', value: data?.timezones.join('\n') },
        {
            title: 'Currency (name and symbol)',
            value: currencyList(currencies),
        },
        {
            title: 'Languages spoken',
            value: Object.values(data?.languages).join('\n'),
        },
    ];
};