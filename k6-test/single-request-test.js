import http from 'k6/http';
import { sleep, check } from 'k6';






export const options = {
    stages: [
        { target: 20, duration: '20s' },
        { target: 15, duration: '20s' },
        { target: 0, duration: '20s' },
    ],
    thresholds: {
        http_reqs: ['count <= 10'],
    },
};



export default function () {

    const payload = { "MessageAttributeFactoryId": "FF-500293" };
    const headers = {
        'Content-Type': 'application/json',
        'dataType': 'json'
    };
    const res = http.request('POST', 'https://6fjy8wq66c.execute-api.ap-northeast-2.amazonaws.com/checkout',
        JSON.stringify(payload), {
        headers: headers,
    });
    console.log(JSON.stringify(payload))
    sleep(0.1);

    const checkRes = check(res, {
        'status is 200': (r) => r.status === 200, // 기대한 HTTP 응답코드인지 확인합니다.

    });
}