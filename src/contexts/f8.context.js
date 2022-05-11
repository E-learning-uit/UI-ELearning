import api from '../services/api.service';




export default class ELearningContext{
    async login(data){
        const response = api.post('/login',data);
        return response;
    }
    async getAllCourses(){
        const response = api.get('/category-item');
        return response;
    }
    async getInfoCourse(idCourse){
        const response = api.get(`/list-course/${idCourse}`);
        return response;
    }
    async getInfoItem(idItem){
        const response = api.get(`/list-item/${idItem}`);
        return response;
    }
    async getListCommentCourse(idCourse){
        const response = api.get(`/list-comment-course/${idCourse}`);
        return response;
    }
    async getListCommentItem(idItem){
        const response = api.get(`/list-comment-item/${idItem}`);
        return response;
    }
}