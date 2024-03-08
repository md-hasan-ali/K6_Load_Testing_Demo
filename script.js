import http from 'k6/http';
import { sleep, check } from 'k6';

// export const options = {
//     vus: 2,
//     duration: '2s',
// };

export default function () {
    const res = http.get('https://jsonplaceholder.typicode.com/users');

    check(res, {
        'status was 200': (r) => r.status == 200,
        'responseBody Name Check': (r) => r.body.includes('Ervin Howell'),
        'lat check': (r) => r.body.includes('-37.3159'),
        'Lng check': (r) => r.body.includes('81.1496'),
        'Company Name check': (r) => r.body.includes('Romaguera-Crona'),
    });
    sleep(1);
}