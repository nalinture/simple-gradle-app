import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,  // 10 Virtual Users
  iterations: 10  // Each VU runs the test 10 times
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/users');

  check(res, {
    'Response status is 200': (r) => r.status === 200,
    'Response time is < 500ms': (r) => r.timings.duration < 500
  });

  sleep(1);
}
