export const tableConfig = () => {
    return {
        stripe: true
    }
}

export const columsConfig = (compomentFun) => {
    return [
        {
            label: '日期',
            prop: 'date',
            width: 180,
        },
        {
            label: '姓名',
            prop: 'name',
            width: 180,
        },
        {
            label: '地址',
            prop: 'address',
            width: 180,
        },
        {
            label: "操作",
            render: (h, row) => {
                return h(
                    "span",
                    {
                        style: {
                            color: 'red',
                            fontSize: '14px'
                        },
                        on: {
                            click: () => {
                                console.log(row)
                            }
                        }
                    },
                    "查看"
                )
            }
        },
        {
            label: "调用组件里的函数",
            render: (h, row) => {
                return h(
                    "span",
                    {
                        style: {
                            color: 'hoepink',
                            fontSize: '14px'
                        },
                        on: {
                            click: () => {
                                compomentFun(row)
                            }
                        }
                    },
                    "组件函数"
                )
            }
        }
    ]
}