import Mock from 'mockjs';
import homeApi from './mockServerData/home';
import userApi from './mockServerData/user';

Mock.mock('/api/home/getData', homeApi.getStatisticalData)
Mock.mock(/api\/user\/add/, 'post', userApi.createUser)
Mock.mock(/api\/user\/edit/, 'post', userApi.updateUser)

Mock.mock(/api\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/api\/user\/del/, 'get', userApi.deleteUser)