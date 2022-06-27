import React from 'react';
import ReactEcharts from 'echarts-for-react';

const Echarts = () => {
    const option = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: '5%',
            left: 'center',
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2,
                },
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [
                    { value: 1048, name: '阿嘎' },
                    { value: 735, name: 'VIVI' },
                    { value: 580, name: 'Gary' },
                    { value: 484, name: '凱文' },
                    { value: 600, name: '阿德' },
                    { value: 444, name: '酷樂' },
                ],
            },
        ],
    };
    return <ReactEcharts option={option} />;
};

export default Echarts;
